import * as yup from 'yup';

export const confirmCredentialsForm = yup.object({
  email: yup
    .string()
    .email('validation.email')
    .required('validation.credentials'),
  full_name: yup.string().required('validation.credentials').required(),
});

export type IConfirmCredentialsForm = {
  email?: string | undefined;
  full_name?: string | undefined;
};
