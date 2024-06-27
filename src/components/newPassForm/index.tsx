import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNewPassMutation } from 'redux/authApiSlice.ts';
import * as yup from 'yup';

import EyeIcon from 'assets/icons/iconEye';
import EyeCloseIcon from 'assets/icons/iconEyeClose';
import { useTogglePassVisibility } from 'components/newPassForm/newPassFormHooks';
import { NewPass } from 'components/newPassForm/types';
import {
  ErrorMsg,
  StyledForm,
  SubmitBtn,
} from 'components/sharedUI/form/styles';
import { passLengthLim } from 'const/constants';

export const NewPassForm = ({ email }: { email: string }) => {
  const { t } = useTranslation();

  const [newPass, { isError, isLoading }] = useNewPassMutation();

  const { isPassShown, togglePassVisibility } = useTogglePassVisibility();

  const signUpSchema = yup
    .object()
    .shape({
      password: yup
        .string()
        .min(passLengthLim, t('validation.password'))
        .required(t('validation.credentials')),
      repeatedPassword: yup
        .string()
        .test(
          'isRepeatedPasswordValueMatched',
          t('validation.passwordMatch'),
          (value, { parent }) => !value || value === parent.password,
        )
        .min(passLengthLim, t('validation.password'))
        .required(t('validation.credentials')),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isSubmitting },
    setError,
  } = useForm<NewPass>({
    defaultValues: {
      password: '',
      repeatedPassword: '',
    },
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit: SubmitHandler<NewPass> = async data => {
    try {
      await newPass({ password: data.password, email }).unwrap();
    } catch (error) {
      setError('root', {
        type: 'server',
        message: `${t('restorePassword.server')}`,
      });
    }
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="user-password">{t('signUp.password')}</label>
          <input
            type={isPassShown ? 'text' : 'password'}
            {...register('password')}
            className={errors.password ? 'error-input' : ''}
            placeholder={t('restorePasswordSignIn.passwordsPlaceholder')}
            id="user-password"
          />
          {errors.password && <ErrorMsg>{errors.password.message}</ErrorMsg>}
          <button type="button" onClick={togglePassVisibility}>
            {isPassShown ? <EyeIcon /> : <EyeCloseIcon />}
          </button>
        </div>
        <div>
          <label htmlFor="repeated-password">
            {t('restorePasswordSignIn.repeatPassword')}
          </label>
          <input
            type={isPassShown ? 'text' : 'password'}
            {...register('repeatedPassword')}
            className={errors.password ? 'error-input' : ''}
            placeholder={t('restorePasswordSignIn.passwordsPlaceholder')}
            id="repeated-password"
          />
          {errors.repeatedPassword && (
            <ErrorMsg>{errors.repeatedPassword.message}</ErrorMsg>
          )}
          <button type="button" onClick={togglePassVisibility}>
            {isPassShown ? <EyeIcon /> : <EyeCloseIcon />}
          </button>
        </div>
        {isError && <ErrorMsg>{t('validation.server')}</ErrorMsg>}
        <SubmitBtn
          type="submit"
          variant="black"
          disabled={!isDirty || isSubmitting}
        >
          {isLoading ? t('loading.text') : t('restorePasswordSignIn.button')}
        </SubmitBtn>
      </StyledForm>
    </>
  );
};
