import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import { useUpdateUserMutation } from 'redux/authApiSlice';

import { ButtonVariant } from 'components/button/types';
import { Inputs, Props } from 'components/confirmCredentialsForm/types';
import {
  ErrorMsg,
  StyledForm,
  SubmitBtn,
  SubTitle,
} from 'components/sharedUI/form/styles';
import {
  isErrorWithMessage,
  isFetchBaseQueryError,
} from 'helpers/errorHandler';

import { useConfirmCredentialsSchema } from './confirmCredentialsFormHook';

export const ConfirmCredentialsForm = ({
  email_value,
  full_name,
  id,
}: Props) => {
  const { t } = useTranslation();
  const [isSet, setIsSet] = useState(false);
  const [update, { isLoading }] = useUpdateUserMutation();
  const confirmSchema = useConfirmCredentialsSchema();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    defaultValues: {
      email: email_value,
      full_name: full_name,
    },
    resolver: yupResolver(confirmSchema),
  });

  useEffect(() => {
    reset({
      email: email_value,
      full_name: full_name,
    });
  }, [email_value, full_name, reset]);

  const onSubmit: SubmitHandler<Inputs> = async data => {
    try {
      await update({ id, data }).unwrap();
      setIsSet(true);
    } catch (err) {
      if (isFetchBaseQueryError(err)) {
        const errMsg = 'error' in err ? err.error : JSON.stringify(err.data);
        setError('root', {
          message: errMsg,
        });
      } else if (isErrorWithMessage(err)) {
        setError('root', {
          message: err.message,
        });
      }
    }
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="user_name">{t('confirmCredentials.name')}</label>
          <input
            type="text"
            {...register('full_name')}
            className={errors.full_name ? 'error-input' : ''}
            placeholder={t('confirmCredentials.namePlaceholder')}
            id="user_name"
          />
          {errors.full_name && <ErrorMsg>{errors.full_name.message}</ErrorMsg>}
        </div>
        <div>
          <label htmlFor="user-email">{t('confirmCredentials.email')}</label>
          <input
            type="email"
            disabled
            {...register('email')}
            className={errors.email ? 'error-input' : ''}
            placeholder={t('confirmCredentials.emailPlaceholder')}
            id="user-email"
          />
          {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
        </div>
        <SubmitBtn type="submit" variant={ButtonVariant.Black}>
          {isLoading ? t('loading.text') : t('confirmCredentials.submitBtn')}
        </SubmitBtn>
        {isSet ? <SubTitle>{t('confirmCredentials.new_name')}</SubTitle> : null}
      </StyledForm>
    </>
  );
};
