import { useRef } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import {
  useRestorePassMutation,
  useVerifyOtpMutation,
} from 'redux/authApiSlice.ts';

import { useOtpTimer } from 'components/otpForm/otpFormHooks';
import {
  InputContainer,
  OtpFrom,
  ResendButton,
  VerifyBtn,
  VerifyInfoContainer,
} from 'components/otpForm/styles.ts';
import { OptFormProps, OtpFormValue } from 'components/otpForm/types';
import {
  clockPrecision,
  fillProfileMaxStep,
  otpExpirationTime,
  otpFormVersions,
  otpNumberOfDigits,
} from 'const/constants';
import { paths } from 'const/paths';

const otpInputMaxLength = 1;
const otpInputPlaceholder = '1';

export const OtpForm = ({ step, email, action }: OptFormProps) => {
  const { t } = useTranslation();

  const { timer, resetTimer } = useOtpTimer(otpExpirationTime, clockPrecision);

  const [verifyOtp] = useVerifyOtpMutation();
  const [sendOtp] = useRestorePassMutation();
  const navigate = useNavigate();

  const otpBoxReference = useRef<Array<HTMLInputElement | null>>([]);

  const { control, handleSubmit, setError } = useForm<OtpFormValue>({
    defaultValues: {
      otpInput0: '',
      otpInput1: '',
      otpInput2: '',
      otpInput3: '',
      otpInput4: '',
      otpInput5: '',
    },
  });

  function handleChange(value: string, index: number) {
    if (value && index < otpNumberOfDigits - 1) {
      otpBoxReference.current[index + 1]?.focus();
    }
  }

  const handleBackspaceAndEnter = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === 'Backspace' && !e.currentTarget.value && index > 0) {
      otpBoxReference.current[index - 1]?.focus();
    }
    if (
      e.key === 'Enter' &&
      e.currentTarget.value &&
      index < otpNumberOfDigits - 1
    ) {
      otpBoxReference.current[index + 1]?.focus();
    }
  };

  const checkOtp: SubmitHandler<OtpFormValue> = async data => {
    try {
      let otpCode = '';
      for (const element of Object.keys(data)) {
        otpCode += data[element as keyof OtpFormValue];
      }
      await verifyOtp({
        otp_code: otpCode,
        email,
      }).unwrap();

      if (action === otpFormVersions.verifyEmail) {
        if (step > fillProfileMaxStep) {
          navigate(paths.root);
        } else {
          navigate(paths.fillProfile);
        }
      } else {
        navigate(paths.newPassword);
      }
    } catch (error) {
      if (error instanceof Error && error.code === 401) {
        setError('root', {
          type: 'server',
          message: t('otpVerification.otpWrong'),
        });
      } else {
        setError('root', {
          type: 'server',
          message: t('otpVerification.server'),
        });
      }
    }
  };

  const resend = async () => {
    try {
      await sendOtp(email).unwrap();
      resetTimer();
    } catch (error) {
      setError('root', {
        type: 'server',
        message: t('validation.server'),
      });
    }
  };

  return (
    <OtpFrom onSubmit={handleSubmit(checkOtp)}>
      <InputContainer>
        {new Array(6).fill(null).map((_, index) => (
          <Controller
            key={index}
            name={`otpInput${index}` as keyof OtpFormValue}
            control={control}
            render={({ field }) => (
              <input
                type="text"
                placeholder={otpInputPlaceholder}
                maxLength={otpInputMaxLength}
                ref={reference => (otpBoxReference.current[index] = reference)}
                value={field.value}
                onChange={e => {
                  field.onChange(e);
                  handleChange(e.target.value, index);
                }}
                onKeyUp={e => handleBackspaceAndEnter(e, index)}
              />
            )}
          />
        ))}
      </InputContainer>
      <VerifyInfoContainer>
        <div>
          {t('verificationEmail.expired')} {timer}
        </div>
        <ResendButton onClick={resend}>
          {t('verificationEmail.resend')}
        </ResendButton>
      </VerifyInfoContainer>
      <VerifyBtn type={'submit'} variant="black">
        {t('verificationEmail.submitBtn')}
      </VerifyBtn>
    </OtpFrom>
  );
};
