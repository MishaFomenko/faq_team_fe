import { useTranslation } from 'react-i18next';
import * as yup from 'yup';

const maxCharactersLength: number = 100;
const maxPhoneLength: number = 11;

export const useEditProfileSchema = () => {
  const { t } = useTranslation();
  const editProfileSchema = yup
    .object()
    .shape({
      name: yup
        .string()
        .max(maxCharactersLength)
        .required(t('validation.credentials')),
      email: yup
        .string()
        .max(maxCharactersLength)
        .email(t('validation.email'))
        .required(t('validation.credentials')),
      phone: yup
        .string()
        .trim()
        .max(maxPhoneLength, t('validation.phone'))
        .required(t(t('validation.credentials')))
        .transform(value => (value.startsWith('+') ? value.slice(1) : value)),
      clothes: yup.string().required(t('validation.required')),
      shoes: yup.number().required(t('validation.required')),
      jeans: yup.string().required(t('validation.required')),
      addressOne: yup.string().required(t('validation.required')),
      addressTwo: yup.string().optional(),
      country: yup.string().required(t('validation.required')),
      states: yup.string().required(t('validation.required')),
      cities: yup.string().required(t('validation.required')),
    })
    .required();

  return editProfileSchema;
};
