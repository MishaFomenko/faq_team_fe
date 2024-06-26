import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { setEmail } from 'redux/auth/authSlice';
import {
  useRegistrationMutation,
  useRestorePassMutation,
} from 'redux/authApiSlice';
import { useAppDispatch } from 'redux/hooks';

import EyeIcon from 'assets/icons/iconEye';
import EyeCloseIcon from 'assets/icons/iconEyeClose';
import {
  ErrorMsg,
  StyledForm,
  SubmitBtn,
} from 'components/sharedUI/form/styles';
import { paths } from 'const/paths';
import {
  isErrorWithMessage,
  isFetchBaseQueryError,
} from 'helpers/errorHandler';

import { useSignUpSchema } from './signUpFormHooks';
import { Inputs } from './types';

export const SignUpForm = () => {
  const [registration, { isLoading }] = useRegistrationMutation();
  const [sendOtp] = useRestorePassMutation();

  const signUpSchema = useSignUpSchema();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isDirty, isSubmitting },
  } = useForm<Inputs>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      repeatedPassword: '',
    },
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = async data => {
    try {
      const { name, email, password } = data;
      await registration({
        full_name: name,
        email,
        password,
      }).unwrap();
      dispatch(setEmail(email));
      reset();
      await sendOtp({ email: data.email });
      navigate(paths.verifyEmail);
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
  const [isRepeatedPasswordShown, setRepeatedPassword] =
    useState<boolean>(false);

  const handlePassword = () => {
    setPasswordShown(!isPasswordShown);
  };
  const handleRepeatedPassword = () => {
    setRepeatedPassword(!isRepeatedPasswordShown);
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="user-name">{t('signUp.name')}</label>
          <input
            type="text"
            {...register('name')}
            className={errors.name ? 'error-input' : ''}
            placeholder={t('signUp.namePlaceholder')}
            id="user-name"
          />
          {errors.name && <ErrorMsg>{errors.name.message}</ErrorMsg>}
        </div>
        <div>
          <label htmlFor="user-email">{t('signUp.email')}</label>
          <input
            type="text"
            {...register('email')}
            className={errors.email ? 'error-input' : ''}
            placeholder={t('signUp.emailPlaceholder')}
            id="user-email"
          />
          {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
        </div>
        <div>
          <label htmlFor="user-password">{t('signUp.password')}</label>
          <input
            type={isPasswordShown ? 'text' : 'password'}
            {...register('password')}
            className={errors.password ? 'error-input' : ''}
            placeholder={t('signUp.passwordsPlaceholder')}
            id="user-password"
          />
          {errors.password && <ErrorMsg>{errors.password.message}</ErrorMsg>}
          <button type="button" onClick={handlePassword}>
            {isPasswordShown ? <EyeIcon /> : <EyeCloseIcon />}
          </button>
        </div>
        <div>
          <label htmlFor="repeated-password">
            {t('signUp.repeatPassword')}
          </label>
          <input
            type={isRepeatedPasswordShown ? 'text' : 'password'}
            {...register('repeatedPassword')}
            className={errors.password ? 'error-input' : ''}
            placeholder={t('signUp.passwordsPlaceholder')}
            id="repeated-password"
          />
          {errors.repeatedPassword && (
            <ErrorMsg>{errors.repeatedPassword.message}</ErrorMsg>
          )}
          <button type="button" onClick={handleRepeatedPassword}>
            {isRepeatedPasswordShown ? <EyeIcon /> : <EyeCloseIcon />}
          </button>
        </div>
        {errors.root && <ErrorMsg>{errors.root.message}</ErrorMsg>}
        <SubmitBtn
          type="submit"
          variant="black"
          disabled={!isDirty || isSubmitting}
        >
          {isLoading ? t('loading.text') : t('signUp.submitBtn')}
        </SubmitBtn>
      </StyledForm>
    </>
  );
};
