import { useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import PhoneInput from 'react-phone-number-input';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { yupResolver } from '@hookform/resolvers/yup';
import { useGetUserQuery } from 'redux/authApiSlice';

import EditIcon from 'assets/icons/editIcon';
import defaultAvatar from 'assets/images/default-avatar.png';
import CreditCardForm from 'components/cardInfoCard';
import { ErrorMsg } from 'components/sharedUI/form/styles';

import 'react-phone-number-input/style.css';

import {
  cities,
  clothesSizes,
  jeansSizes,
  shoesSizes,
  states,
} from './data/sizes';
import { useEditProfileSchema } from './editProfileFormHooks';
import {
  AddressWrap,
  CardWrap,
  DesktopWrap,
  EditForm,
  EditImgBtn,
  ImgWrap,
  InfoField,
  InfoWrap,
  LocationField,
  SaveBtn,
  SizeField,
  SizesWrap,
  StyledSelectWrapper,
} from './styles';
import { Inputs } from './types';

const avatarSize: number = 120;
const phoneCountry = 'US';

export const EditProfileForm = () => {
  const userId = JSON.parse(localStorage.getItem('userId')!);

  const [avatar, setAvatar] = useState<string>('');
  const { t } = useTranslation();
  const { data } = useGetUserQuery(userId);
  const editProfileSchema = useEditProfileSchema();
  const {
    reset,
    register,
    setValue,
    handleSubmit,
    formState: { errors, isDirty, isSubmitting },
    control,
  } = useForm<Inputs>({
    defaultValues: {
      avatar: null,
      name: '',
      email: '',
      phone: '',
      clothes: clothesSizes[0],
      shoes: shoesSizes[0],
      jeans: jeansSizes[0],
      addressOne: '',
      addressTwo: '',
      country: 'Canada',
      states: states[0],
      cities: cities[0],
    },
    resolver: yupResolver(editProfileSchema),
  });
  useEffect(() => {
    if (data) {
      reset({
        avatar: data.avatar || null,
        name: data.full_name || '',
        email: data.email || '',
        phone: data.phone || '',
        clothes: data.cloth_size || clothesSizes[0],
        shoes: data.shoes_size || shoesSizes[0],
        jeans: data.jeans_size || jeansSizes[0],
        addressOne: data.address || '',
        addressTwo: data.address_2 || '',
        country: data.country || 'Canada',
        states: data.state || states[0],
        cities: data.city || cities[0],
      });
    }
  }, [data, reset]);

  const onSubmit: SubmitHandler<Inputs> = data => {
    JSON.stringify(data);
    reset();
  };

  return (
    <>
      <EditForm onSubmit={handleSubmit(onSubmit)}>
        <ImgWrap>
          <img
            src={avatar ? avatar : defaultAvatar}
            alt="user-avatar"
            width={avatarSize}
            height={avatarSize}
          />
          <EditImgBtn htmlFor="user-avatar">
            <input
              type="file"
              {...register('avatar')}
              id="user-avatar"
              hidden
              accept="image/png, image/jpeg, image/heic"
              onChange={event => {
                if (event.target.files && event.target.files.length > 0) {
                  const file = event.target.files[0];
                  if (file) {
                    setValue('avatar', file);
                    const imageUrl = URL.createObjectURL(file);
                    setAvatar(imageUrl);
                  }
                }
              }}
            />
            <EditIcon />
          </EditImgBtn>
        </ImgWrap>
        <DesktopWrap>
          <InfoWrap>
            <h2>{t('editProfile.title')}</h2>
            <InfoField>
              <label htmlFor="user-name">{t('editProfile.name')}</label>
              <input
                type="text"
                {...register('name')}
                className={errors.name ? 'error-input' : ''}
                placeholder={t('editProfile.namePlaceholder')}
                id="user-name"
              />
              {errors.name && <ErrorMsg>{errors.name.message}</ErrorMsg>}
            </InfoField>
            <InfoField>
              <label htmlFor="user-email">{t('editProfile.email')}</label>
              <input
                type="text"
                {...register('email')}
                className={errors.email ? 'error-input' : ''}
                placeholder={t('editProfile.emailPlaceholder')}
                id="user-email"
              />
              {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
            </InfoField>
            <InfoField>
              <label htmlFor="user-phone">{t('editProfile.phone')}</label>
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <PhoneInput
                    {...field}
                    international
                    defaultCountry="US"
                    countries={[phoneCountry]}
                    className={errors.phone ? 'error-input' : ''}
                    placeholder={t('editProfile.phonePlaceholder')}
                    id="user-phone"
                    onChange={phone => {
                      setValue('phone', String(phone).trim());
                    }}
                  />
                )}
              />
              {errors.phone && <ErrorMsg>{errors.phone.message}</ErrorMsg>}
            </InfoField>
          </InfoWrap>
          <SizesWrap>
            <h2>{t('editProfile.sizesTitle')}</h2>
            <SizeField>
              <label htmlFor="user-clothes">
                {t('editProfile.sizes.clothes')}
              </label>
              <StyledSelectWrapper>
                <Select
                  defaultValue={{
                    label: clothesSizes[0],
                    value: clothesSizes[0],
                  }}
                  placeholder={clothesSizes[0]}
                  options={clothesSizes.map(size => ({
                    label: size,
                    value: size,
                  }))}
                  classNamePrefix="react-select"
                  onChange={selectedOption =>
                    setValue(
                      'clothes',
                      selectedOption?.value ?? clothesSizes[0],
                    )
                  }
                />
              </StyledSelectWrapper>
              {errors.clothes && <ErrorMsg>{errors.clothes.message}</ErrorMsg>}
            </SizeField>
            <SizeField>
              <label htmlFor="user-shoes">{t('editProfile.sizes.shoes')}</label>
              <StyledSelectWrapper>
                <Select
                  defaultValue={{
                    label: shoesSizes[0],
                    value: shoesSizes[0],
                  }}
                  options={shoesSizes.map(size => ({
                    label: size,
                    value: size,
                  }))}
                  classNamePrefix="react-select"
                  onChange={selectedOption =>
                    setValue('shoes', selectedOption?.value ?? shoesSizes[0])
                  }
                />
              </StyledSelectWrapper>
              {errors.shoes && <ErrorMsg>{errors.shoes.message}</ErrorMsg>}
            </SizeField>
            <SizeField>
              <label htmlFor="user-jeans">{t('editProfile.sizes.jeans')}</label>
              <StyledSelectWrapper>
                <Select
                  defaultValue={{
                    label: jeansSizes[0],
                    value: jeansSizes[0],
                  }}
                  {...register('jeans')}
                  id="user-jeans"
                  options={jeansSizes.map(size => ({
                    label: size,
                    value: size,
                  }))}
                  classNamePrefix="react-select"
                  onChange={selectedOption =>
                    setValue('jeans', selectedOption?.value ?? jeansSizes[0])
                  }
                />
              </StyledSelectWrapper>
              {errors.jeans && <ErrorMsg>{errors.jeans.message}</ErrorMsg>}
            </SizeField>
            <Link to="">{t('editProfile.sizeLink')}</Link>
          </SizesWrap>
        </DesktopWrap>
        <AddressWrap>
          <label htmlFor="user-address-one">
            {t('editProfile.addressOne')}
          </label>
          <input
            type="text"
            {...register('addressOne')}
            placeholder={t('editProfile.addressPlaceholder')}
            className={errors.addressOne ? 'error-input' : ''}
            id="user-address-one"
          />
          {errors.addressOne && (
            <ErrorMsg>{errors.addressOne.message}</ErrorMsg>
          )}
        </AddressWrap>
        <AddressWrap>
          <label htmlFor="user-address-two">
            {t('editProfile.addressTwo')}
          </label>
          <input
            type="text"
            {...register('addressTwo')}
            placeholder={t('editProfile.addressPlaceholder')}
            className={errors.addressTwo ? 'error-input' : ''}
            id="user-address-two"
          />
          {errors.addressTwo && (
            <ErrorMsg>{errors.addressTwo.message}</ErrorMsg>
          )}
        </AddressWrap>
        <AddressWrap>
          <label htmlFor="user-country">{t('editProfile.country')}</label>
          <input
            type="text"
            {...register('country')}
            placeholder={t('editProfile.country')}
            className={errors.country ? 'error-input' : ''}
            id="user-country"
          />
          {errors.country && <ErrorMsg>{errors.country.message}</ErrorMsg>}
        </AddressWrap>
        <LocationField>
          <label htmlFor="user-state">{t('editProfile.state')}</label>
          <StyledSelectWrapper>
            <Select
              defaultValue={{
                label: states[0],
                value: states[0],
              }}
              {...register('states')}
              id="user-state"
              options={states.map(state => ({
                label: state,
                value: state,
              }))}
              classNamePrefix="react-select"
              onChange={selectedOption =>
                setValue('states', selectedOption?.value ?? states[0])
              }
            />
          </StyledSelectWrapper>
        </LocationField>
        <LocationField>
          <label htmlFor="user-city">{t('editProfile.city')}</label>
          <StyledSelectWrapper>
            <Select
              defaultValue={{
                label: cities[0],
                value: cities[0],
              }}
              {...register('cities')}
              id="user-state"
              options={cities.map(city => ({
                label: city,
                value: city,
              }))}
              classNamePrefix="react-select"
              onChange={selectedOption =>
                setValue('cities', selectedOption?.value ?? cities[0])
              }
            />
          </StyledSelectWrapper>
        </LocationField>
        <CardWrap>
          <CreditCardForm />
        </CardWrap>
        <SaveBtn
          type="submit"
          variant="black"
          disabled={!isDirty || isSubmitting}
        >
          {t('editProfile.button')}
        </SaveBtn>
      </EditForm>
    </>
  );
};
