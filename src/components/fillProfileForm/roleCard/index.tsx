import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import { useUpdateUserMutation } from 'redux/authApiSlice';
import { v4 as uuidv4 } from 'uuid';

import {
  StyledInput,
  StyledRadioGroup,
} from 'components/fillProfileForm/roleCard/styles';
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
  RoleFormData,
  TabProps,
  UserRoles,
} from 'components/fillProfileForm/types';
import useFillProfileSchemas from 'components/fillProfileForm/validation';

const RoleCard = ({ setSelectedIndex, index, data }: TabProps) => {
  const { t } = useTranslation();

  const [registrationUpdate] = useUpdateUserMutation();
  const { roleSchema } = useFillProfileSchemas();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<RoleFormData>({
    resolver: yupResolver(roleSchema),
  });

  useEffect(() => {
    data && data.user_role && setValue('role', data.user_role);
  }, [data, setValue]);

  const onSubmit: SubmitHandler<RoleFormData> = async roleData => {
    await registrationUpdate({
      id: data.id,
      data: { user_role: roleData.role, filled_profile_step: 1 },
    }).unwrap();
    setSelectedIndex(index + 1);
  };

  const handleDivClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const inputElement = e.currentTarget.children[0] as HTMLInputElement;
    inputElement.click();
  };

  return (
    <StyledTabContainer onSubmit={handleSubmit(onSubmit)}>
      <StyledForm>
        <StyledFormContainer>
          <StyledTitle>{t('fillProfile.roleCard.title')}</StyledTitle>
          <StyledSubtitle>{t('fillProfile.roleCard.subTitle')}</StyledSubtitle>
        </StyledFormContainer>
        <StyledFormBlock>
          <StyledRadioGroup>
            <div onClick={e => handleDivClick(e)}>
              <StyledInput
                type="radio"
                value={UserRoles.Buyer}
                {...register('role')}
              />
              <span>{t('fillProfile.roleCard.buyer')}</span>
            </div>
            <div onClick={e => handleDivClick(e)}>
              <StyledInput
                type="radio"
                {...register('role')}
                value={UserRoles.Vendor}
              />
              <span>{t('fillProfile.roleCard.vendor')}</span>
            </div>
          </StyledRadioGroup>
          <p>{errors.role && errors.role.message}</p>
        </StyledFormBlock>
      </StyledForm>
      <ButtonsContainer>
        <StyledButton
          type="submit"
          variant={ButtonVariant.Black}
          key={uuidv4()}
        >
          {t('fillProfile.nextButton')}
        </StyledButton>
      </ButtonsContainer>
    </StyledTabContainer>
  );
};

export default RoleCard;
