import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { setEmail, setToken, setUserId } from 'redux/auth/authSlice';
import { useLoginMutation, useRestorePassMutation } from 'redux/authApiSlice';
import { useAppDispatch } from 'redux/hooks';

import EyeIcon from 'assets/icons/iconEye';
import EyeCloseIcon from 'assets/icons/iconEyeClose';
import {
  ErrorMsg,
  PasswordLink,
  StyledForm,
  SubmitBtn,
} from 'components/sharedUI/form/styles';
import { fillProfileMaxStep } from 'const/constants';
import { paths } from 'const/paths';
import {
  isErrorWithMessage,
  isFetchBaseQueryError,
} from 'helpers/errorHandler';

import { useSignInSchema } from './signInFormHook';
import { Inputs } from './types';

export const SignInForm = () => {
  const [login, { isLoading }] = useLoginMutation();
  const [sendOtp] = useRestorePassMutation();

  const dispatch = useAppDispatch();

  const { t } = useTranslation();
  const singInSchema = useSignInSchema();
  const navigate = useNavigate();

  const {
    register,
    setError,
    reset,
    handleSubmit,
    formState: { errors, isDirty, isSubmitting },
  } = useForm<Inputs>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(singInSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = async data => {
    try {
      const response = await login(data).unwrap();
      dispatch(setUserId(response?.id));
      dispatch(setToken(response?.access_token));
      dispatch(setEmail(data.email));
      if (!response?.is_verified) {
        await sendOtp({ email: data.email });
        reset();
        navigate(paths.verifyEmail);
      } else if (response?.filled_profile_step < fillProfileMaxStep) {
        console.log(response.access_token);
        navigate(paths.fillProfile);
      } else {
        navigate(paths.root);
      }
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

  const [isPasswordShown, setPasswordShown] = useState<boolean>(false);

  const handlePassword = () => {
    setPasswordShown(!isPasswordShown);
  };
  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="user-email">{t('signIn.email')}</label>
          <input
            type="text"
            {...register('email')}
            className={errors.email ? 'error-input' : ''}
            placeholder={t('signIn.emailPlaceholder')}
            id="user-email"
          />
          {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
        </div>
        <div>
          <label htmlFor="user-password">{t('signIn.password')}</label>
          <input
            type={isPasswordShown ? 'text' : 'password'}
            {...register('password')}
            className={errors.password ? 'error-input' : ''}
            placeholder={t('signIn.passwordPlaceholder')}
            id="user-password"
          />
          {errors.password && <ErrorMsg>{errors.password.message}</ErrorMsg>}
          <button type="button" onClick={handlePassword}>
            {isPasswordShown ? <EyeIcon /> : <EyeCloseIcon />}
          </button>
        </div>
        <PasswordLink to={paths.restorePassword}>
          {t('signIn.forgotPassLink')}
        </PasswordLink>
        {errors.root && <ErrorMsg>{errors.root.message}</ErrorMsg>}
        <SubmitBtn
          type="submit"
          variant="black"
          disabled={!isDirty || isSubmitting}
        >
          {isLoading ? t('loading.text') : t('signIn.submitBtn')}
        </SubmitBtn>
      </StyledForm>
    </>
  );
};
