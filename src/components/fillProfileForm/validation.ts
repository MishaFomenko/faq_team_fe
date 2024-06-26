import { useTranslation } from 'react-i18next';
import * as yup from 'yup';

import { Country } from 'components/fillProfileForm/types';

const useFillProfileSchemas = () => {
  const { t } = useTranslation();

  const sizeSchema = yup
    .object({
      clothSize: yup.string().required(),
      shoeSize: yup.number().required(),
      jeansSize: yup.string().required(),
    })
    .required();

  const roleSchema = yup.object().shape({
    role: yup.string().required(),
  });

  const addressValidationRegex = /^[a-zA-Z0-9\s,-]*$/;

  const addressSchema = yup.object().shape({
    address1: yup
      .string()
      .required(t('fillProfile.addressCard.address1Required'))
      .matches(
        addressValidationRegex,
        t('fillProfile.addressCard.address1Invalid'),
      )
      .min(5, t('fillProfile.addressCard.address1Short'))
      .max(100, t('fillProfile.addressCard.address1Long')),
    address2: yup
      .string()
      .optional()
      .matches(
        addressValidationRegex,
        t('fillProfile.addressCard.address2Invalid'),
      )
      .max(100, t('fillProfile.addressCard.address2Long')),
    country: yup
      .mixed<Country>()
      .required(t('fillProfile.addressCard.countryRequired')),
    state: yup.mixed().required(t('fillProfile.addressCard.stateRequired')),
    city: yup.mixed().required(t('fillProfile.addressCard.cityRequired')),
  });

  return { addressSchema, roleSchema, sizeSchema };
};

export default useFillProfileSchemas;
