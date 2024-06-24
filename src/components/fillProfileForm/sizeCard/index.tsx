import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useUpdateUserMutation } from 'redux/authApiSlice';
import { v4 as uuidv4 } from 'uuid';

import {
  ButtonsContainer,
  StyledButton,
  StyledForm,
  StyledFormContainer,
  StyledSubtitle,
  StyledTabContainer,
  StyledTitle,
} from 'components/fillProfileForm/sharedStyles';
import {
  clothesSizes,
  jeansSizes,
  shoesSizes,
} from 'components/fillProfileForm/sizeCard/constants';
import { StyledSelect } from 'components/fillProfileForm/sizeCard/styles';
import {
  ButtonVariant,
  Sizes,
  TabProps,
} from 'components/fillProfileForm/types';
import useFillProfileSchemas from 'components/fillProfileForm/validation';
import { paths } from 'const/paths';

const SizeForm = ({ setSelectedIndex, index, data }: TabProps) => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const [registrationUpdate] = useUpdateUserMutation();
  const { sizeSchema } = useFillProfileSchemas();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Sizes>({
    defaultValues: {
      clothSize: clothesSizes[0],
      shoeSize: shoesSizes[0],
      jeansSize: jeansSizes[0],
    },
    resolver: yupResolver(sizeSchema),
  });

  useEffect(() => {
    data && data.cloth_size && setValue('clothSize', data.cloth_size);
    data && data.shoes_size && setValue('shoeSize', data.shoes_size);
    data && data.jeans_size && setValue('jeansSize', data.jeans_size);
  }, [data, setValue]);

  const onSubmit: SubmitHandler<Sizes> = async sizesData => {
    await registrationUpdate({
      id: data.id,
      data: {
        cloth_size: sizesData.clothSize,
        shoes_size: sizesData.shoeSize,
        jeans_size: sizesData.jeansSize,
        filled_profile_step: 5,
      },
    }).unwrap();
    navigate(paths.root);
  };

  return (
    <StyledTabContainer onSubmit={handleSubmit(onSubmit)}>
      <StyledForm>
        <StyledFormContainer>
          <StyledTitle>{t('fillProfile.sizeCard.clothTitle')}</StyledTitle>
          <StyledSubtitle>
            {t('fillProfile.sizeCard.clothSubTitle')}
          </StyledSubtitle>
        </StyledFormContainer>
        <StyledSelect {...register('clothSize')}>
          <option disabled>{t('fillProfile.sizeCard.selectClothSize')}</option>
          {clothesSizes.map(element => (
            <option key={uuidv4()} value={element}>
              {element}
            </option>
          ))}
        </StyledSelect>
        {errors.clothSize && <p>{t('fillProfile.sizeCard.requiredError')}</p>}
      </StyledForm>
      <StyledForm>
        <StyledFormContainer>
          <StyledTitle>{t('fillProfile.sizeCard.shoeTitle')}</StyledTitle>
          <StyledSubtitle>
            {t('fillProfile.sizeCard.shoeSubTitle')}
          </StyledSubtitle>
        </StyledFormContainer>
        <StyledSelect {...register('shoeSize')}>
          <option disabled>{t('fillProfile.sizeCard.selectShoeSize')}</option>
          {shoesSizes.map(element => (
            <option key={uuidv4()} value={element}>
              {element}
            </option>
          ))}
        </StyledSelect>
        {errors.shoeSize && <p>{t('fillProfile.sizeCard.requiredError')}</p>}
      </StyledForm>
      <StyledForm>
        <StyledFormContainer>
          <StyledTitle>{t('fillProfile.sizeCard.jeansTitle')}</StyledTitle>
          <StyledSubtitle>
            {t('fillProfile.sizeCard.jeansSubTitle')}
          </StyledSubtitle>
        </StyledFormContainer>
        <StyledSelect {...register('jeansSize')}>
          <option disabled>{t('fillProfile.sizeCard.selectJeansSize')}</option>
          {jeansSizes.map(element => (
            <option key={uuidv4()} value={element}>
              {element}
            </option>
          ))}
        </StyledSelect>
        {errors.jeansSize && <p>{t('fillProfile.sizeCard.requiredError')}</p>}
      </StyledForm>
      <ButtonsContainer>
        <StyledButton
          key={uuidv4()}
          variant={ButtonVariant.White}
          onClick={() =>
            !data.stripe_id
              ? setSelectedIndex(index - 1)
              : setSelectedIndex(index - 2)
          }
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
    </StyledTabContainer>
  );
};

export default SizeForm;
