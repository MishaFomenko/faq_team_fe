import { useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import PhoneInput from 'react-phone-number-input';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { yupResolver } from '@hookform/resolvers/yup';
import { useElements, useStripe } from '@stripe/react-stripe-js';
import {
  useSaveCardInfoMutation,
  useSaveGeneralInfoMutation,
  useUpdateUserMutation,
} from 'redux/authApiSlice';
import { useGetCardInfoQuery } from 'redux/userApiSlice';

import EditIcon from 'assets/icons/editIcon';
import defaultAvatar from 'assets/images/default-avatar.png';
import CheckoutForm from 'components/fillProfileForm/cardInfoCard/checkoutForm.tsx';
import { billingDetails } from 'components/fillProfileForm/constants';
import { UserData } from 'components/fillProfileForm/types.ts';
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

const phoneCountry = 'CA';

export const EditProfileForm = ({
  data,
  isLoading,
}: {
  data: UserData;
  isLoading: boolean;
}) => {
  const [avatar, setAvatar] = useState<string | null>('');
  const [changeCard, setChangeCard] = useState<boolean>(true);

  const { t } = useTranslation();

  const [registrationSaveGeneralInfo] = useSaveGeneralInfoMutation();
  const [registrationUpdate] = useUpdateUserMutation();
  const [registrationSaveCardInfo] = useSaveCardInfoMutation();

  const { data: cardInfo } = useGetCardInfoQuery();

  useEffect(() => {
    cardInfo?.lastFourDigits && setChangeCard(!cardInfo);
  }, [cardInfo]);

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
        name: `${data.full_name}`,
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
    data && setAvatar(data.avatar);
  }, [data, reset]);

  const handleImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setAvatar(imageUrl);
      }
    }
  };

  const stripe = useStripe();
  const elements = useElements();

  const onSubmit: SubmitHandler<Inputs> = async formData => {
    const phoneImageForm = new FormData();
    phoneImageForm.append('file', formData.avatar && formData.avatar[0]);
    phoneImageForm.append('id', data.id);

    if (typeof formData.avatar !== 'string') {
      try {
        await registrationSaveGeneralInfo(phoneImageForm).unwrap();
      } catch (error) {
        throw new Error(error as string);
      }
    }

    await registrationUpdate({
      id: data.id,
      data: {
        phone: formData.phone,
        full_name: formData.name,
        cloth_size: formData.clothes,
        shoes_size: formData.shoes,
        jeans_size: formData.jeans,
        address: formData.addressOne,
        address_2: formData.addressTwo,
        country: formData.country,
        state: formData.states,
        city: formData.cities,
      },
    }).unwrap();

    if (!stripe || !elements || !changeCard) {
      return;
    }

    await elements.submit();

    const { paymentMethod } = await stripe.createPaymentMethod({
      elements,
      params: {
        billing_details: billingDetails(data),
      },
    });

    await registrationSaveCardInfo({
      paymentMethod,
      id: data.id,
    });
  };
  return (
    <>
      {!isLoading && (
        <EditForm onSubmit={handleSubmit(onSubmit)}>
          <ImgWrap>
            <img src={avatar ? avatar : defaultAvatar} alt="user-avatar" />

            <EditImgBtn htmlFor="user-avatar">
              <input
                type="file"
                {...register('avatar', { onChange: handleImageChange })}
                id="user-avatar"
                hidden
                accept="image/png,image/jpeg,image/heic"
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
                  defaultValue={data?.full_name}
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
                  disabled={true}
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
                      defaultValue={data?.phone}
                      international
                      defaultCountry="CA"
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
                    {...register('clothes')}
                    defaultValue={{
                      label: data?.cloth_size,
                      value: data?.cloth_size,
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
                {errors.clothes && (
                  <ErrorMsg>{errors.clothes.message}</ErrorMsg>
                )}
              </SizeField>
              <SizeField>
                <label htmlFor="user-shoes">
                  {t('editProfile.sizes.shoes')}
                </label>
                <StyledSelectWrapper>
                  <Select
                    defaultValue={{
                      label: data?.shoes_size,
                      value: data?.shoes_size,
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
                <label htmlFor="user-jeans">
                  {t('editProfile.sizes.jeans')}
                </label>
                <StyledSelectWrapper>
                  <Select
                    defaultValue={{
                      label: data?.jeans_size,
                      value: data?.jeans_size,
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
                  label: data?.state,
                  value: data?.state,
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
                  label: data?.city,
                  value: data?.city,
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
            <CheckoutForm
              changeCard={changeCard}
              setSelectedIndex={setChangeCard}
              data={cardInfo}
            />
          </CardWrap>
          <SaveBtn
            type="submit"
            variant="black"
            disabled={isSubmitting && isDirty}
          >
            {t('editProfile.button')}
          </SaveBtn>
        </EditForm>
      )}
    </>
  );
};
