import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import { Inputs } from './types';
import { StyledForm, SubmitBtn, ErrorMsg } from '../signInForm/styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignUpSchema } from './signUpFormHooks';
import { useAppDispatch } from 'redux/hooks';
import { useRegistrationMutation } from 'redux/authApiSlice';
import { setEmail } from 'redux/auth/authSlice';
import {
  isErrorWithMessage,
  isFetchBaseQueryError,
} from 'helpers/errorHandler';
import EyeIcon from 'assets/icons/iconEye';
import EyeCloseIcon from 'assets/icons/iconEyeClose';

export const SignUpForm = () => {
  const [registration, { isLoading }] = useRegistrationMutation();
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
      const response = await registration({
        full_name: name,
        email,
        password,
      }).unwrap();
      dispatch(setEmail(response?.email));
      reset();
      navigate('');
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