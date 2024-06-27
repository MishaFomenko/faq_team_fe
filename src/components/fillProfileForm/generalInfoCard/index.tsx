import { useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { defaultCountries, PhoneInput } from 'react-international-phone';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSaveGeneralInfoMutation } from 'redux/authApiSlice';
import { v4 as uuidv4 } from 'uuid';
import * as yup from 'yup';

import UploadAvatar from 'assets/icons/uploadAvatar';
import avatar from 'assets/images/avatar.png';
import {
  PhoneWrapper,
  StyledImage,
  StyledUploadButton,
  UploadPhotoWrapper,
} from 'components/fillProfileForm/generalInfoCard/styles';
import {
  countries,
  isValidFileList,
} from 'components/fillProfileForm/generalInfoCard/utils';
import {
  ButtonsContainer,
  StyledButton,
  StyledForm,
  StyledFormBlock,
  StyledFormContainer,
  StyledSubtitle,
  StyledTabContainer,
  StyledTitle,
} from 'components/fillProfileForm/sharedStyles';
import {
  ButtonVariant,
  GeneralInfoSchema,
  TabProps,
} from 'components/fillProfileForm/types';
import { imageFormat, phoneLength } from 'const/constants';

import 'react-international-phone/style.css';

const GeneralInfoCard = ({ setSelectedIndex, index, data }: TabProps) => {
  const { t } = useTranslation();

  const schema = yup.object().shape({
    image: yup
      .mixed()
      .test('fileType', 'fillProfile.generalInfoCard.imageRequired', value =>
        !data.avatar ? isValidFileList(value as FileList) : true,
      ),
    phone: yup
      .string()
      .min(phoneLength, 'fillProfile.generalInfoCard.phoneRequired'),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
    setValue,
  } = useForm<GeneralInfoSchema>({
    resolver: yupResolver(schema),
  });

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { ref: registerRef, onChange, ...rest } = register('image');
  const [registrationSaveGeneralInfo] = useSaveGeneralInfoMutation();

  useEffect(() => {
    data.avatar && setSelectedImage(data.avatar);
    data.phone && setValue('phone', data.phone);
  }, [data, setValue]);

  const handleButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ): void => {
    const inputElement = event.currentTarget.children[0] as HTMLInputElement;
    inputElement.click();
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      const fileURL = URL.createObjectURL(file);
      setSelectedImage(fileURL);
    } else {
      setSelectedImage(null);
    }
  };

  const onSubmit: SubmitHandler<GeneralInfoSchema> = async (
    generalData,
  ): Promise<void> => {
    const formData = new FormData();
    formData.append('file', generalData.image[0]);
    formData.append('phone', generalData.phone);
    formData.append('id', data.id);

    if (generalData.image.length) {
      try {
        await registrationSaveGeneralInfo(formData).unwrap();
      } catch (error) {
        throw new Error(error);
      }
    }
    setSelectedIndex(index + 1);
  };

  return (
    <StyledTabContainer onSubmit={handleSubmit(onSubmit)}>
      <StyledForm>
        <StyledFormContainer>
          <StyledTitle>
            {t('fillProfile.generalInfoCard.photoTitle')}
          </StyledTitle>
          <StyledSubtitle>
            {t('fillProfile.generalInfoCard.photoSubTitle')}
          </StyledSubtitle>
        </StyledFormContainer>
        <StyledFormBlock>
          <UploadPhotoWrapper>
            {selectedImage ? (
              <StyledImage src={selectedImage} />
            ) : (
              <StyledImage src={avatar} />
            )}
            <StyledUploadButton
              variant={ButtonVariant.Black}
              onClick={e => handleButtonClick(e)}
              type="button"
            >
              <input
                type="file"
                accept={imageFormat}
                {...rest}
                ref={e => {
                  registerRef(e);
                }}
                onChange={e => (onChange(e), handleFileChange(e))}
              />
              <UploadAvatar />
              {t('fillProfile.generalInfoCard.uploadPhotoButton')}
            </StyledUploadButton>
          </UploadPhotoWrapper>
          <p>{errors.image && errors.image.message}</p>
        </StyledFormBlock>
      </StyledForm>
      <StyledForm>
        <StyledFormContainer>
          <StyledTitle>
            {t('fillProfile.generalInfoCard.phoneTitle')}
          </StyledTitle>
          <StyledSubtitle>
            {t('fillProfile.generalInfoCard.phoneSubTitle')}
          </StyledSubtitle>
        </StyledFormContainer>
        <StyledFormBlock>
          <PhoneWrapper>
            <Controller
              name="phone"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <PhoneInput
                  {...field}
                  defaultCountry="ca"
                  countries={countries(defaultCountries)}
                />
              )}
            />
          </PhoneWrapper>
          <p>{errors.phone && errors.phone.message}</p>
        </StyledFormBlock>
      </StyledForm>
      <ButtonsContainer>
        <StyledButton
          variant={ButtonVariant.White}
          onClick={() => setSelectedIndex(index - 1)}
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

export default GeneralInfoCard;
