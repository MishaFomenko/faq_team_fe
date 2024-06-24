import { useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import { useUpdateUserMutation } from 'redux/authApiSlice';
import { v4 as uuidv4 } from 'uuid';

import { StyledForm } from 'components/fillProfileForm/addressCard/styles';
import {
  ButtonsContainer,
  StyledButton,
  StyledCard,
  StyledFormBlock,
  StyledFormContainer,
  StyledInput,
  StyledSubtitle,
  StyledTabContainer,
  StyledTitle,
} from 'components/fillProfileForm/sharedStyles';
import {
  AddressSchema,
  ButtonVariant,
  TabProps,
} from 'components/fillProfileForm/types';
import useFillProfileSchemas from 'components/fillProfileForm/validation';
import {
  citiesOptions,
  countriesOptions,
  statesOptions,
} from 'const/constants';

const AddressForm = ({ setSelectedIndex, index, data }: TabProps) => {
  const { t } = useTranslation();

  const [registrationUpdate] = useUpdateUserMutation();
  const { addressSchema } = useFillProfileSchemas();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<AddressSchema>({
    resolver: yupResolver(addressSchema),
    defaultValues: {
      address1: '',
      address2: '',
      country: countriesOptions[0],
      state: statesOptions[countriesOptions[0]][0],
      city: citiesOptions[countriesOptions[0]][0],
    },
  });

  useEffect(() => {
    data && data.address && setValue('address1', data.address);
    data && data.address_2 && setValue('address2', data.address_2);
    data && data.country && setValue('country', data.country);
    data && data.state && setValue('state', data.state);
    data && data.city && setValue('city', data.city);
  }, [data, setValue]);

  const onSubmit: SubmitHandler<AddressSchema> = async addressData => {
    await registrationUpdate({
      id: data.id,
      data: {
        address: addressData.address1,
        address_2: addressData.address2,
        country: addressData.country,
        state: addressData.state,
        city: addressData.city,
        filled_profile_step: 3,
      },
    }).unwrap();
    !data.stripe_id ? setSelectedIndex(index + 1) : setSelectedIndex(index + 2);
  };

  return (
    <StyledTabContainer onSubmit={handleSubmit(onSubmit)}>
      <StyledCard>
        <StyledFormContainer>
          <StyledTitle>{t('fillProfile.addressCard.title')}</StyledTitle>
          <StyledSubtitle>
            {t('fillProfile.addressCard.subTitle')}
          </StyledSubtitle>
        </StyledFormContainer>
        <StyledForm>
          <StyledFormBlock>
            <label>{t('fillProfile.addressCard.address1')}</label>
            <Controller
              name="address1"
              control={control}
              render={({ field }) => (
                <StyledInput
                  type="text"
                  placeholder={t('fillProfile.addressCard.address1')}
                  {...field}
                />
              )}
            />
            <p>{errors.address1 && errors.address1.message}</p>
          </StyledFormBlock>
          <StyledFormBlock>
            <label>{t('fillProfile.addressCard.address2')}</label>
            <Controller
              name="address2"
              control={control}
              render={({ field }) => (
                <StyledInput
                  type="text"
                  placeholder={t('fillProfile.addressCard.address2')}
                  {...field}
                />
              )}
            />
            <p>{errors.address2 && errors.address2.message}</p>
          </StyledFormBlock>
          <StyledFormBlock>
            <label>{t('fillProfile.addressCard.country')}</label>
            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <select {...field}>
                  <option disabled>
                    {t('fillProfile.addressCard.selectCountry')}
                  </option>
                  {countriesOptions.map(country => (
                    <option key={uuidv4()} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              )}
            />
            <p>{errors.country && errors.country.message}</p>
          </StyledFormBlock>
          <StyledFormBlock>
            <label>{t('fillProfile.addressCard.state')}</label>
            <Controller
              name="state"
              control={control}
              render={({ field }) => (
                <select {...field}>
                  <option disabled>
                    {t('fillProfile.addressCard.selectState')}
                  </option>
                  {statesOptions[countriesOptions[0]].map(state => (
                    <option key={uuidv4()} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              )}
            />
            <p>{errors.state && errors.state.message}</p>
          </StyledFormBlock>
          <StyledFormBlock>
            <label>{t('fillProfile.addressCard.city')}</label>
            <Controller
              name="city"
              control={control}
              render={({ field }) => (
                <select {...field}>
                  <option disabled>
                    {t('fillProfile.addressCard.selectCity')}
                  </option>
                  {citiesOptions[countriesOptions[0]].map(city => (
                    <option key={uuidv4()} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              )}
            />
            <p>{errors.city && errors.city.message}</p>
          </StyledFormBlock>

          <ButtonsContainer>
            <StyledButton
              variant={ButtonVariant.White}
              onClick={() => setSelectedIndex(index - 1)}
              key={uuidv4()}
            >
              {t('fillProfile.prevButton')}
            </StyledButton>
            <StyledButton
              key={uuidv4()}
              variant={ButtonVariant.Black}
              type="submit"
            >
              {t('fillProfile.nextButton')}
            </StyledButton>
          </ButtonsContainer>
        </StyledForm>
      </StyledCard>
    </StyledTabContainer>
  );
};

export default AddressForm;
