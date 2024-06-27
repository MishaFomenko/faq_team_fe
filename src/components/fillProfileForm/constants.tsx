import { StripePaymentElementOptions } from '@stripe/stripe-js';

import FirstStepActive from 'assets/icons/steps/step1_active';
import SecondStepActive from 'assets/icons/steps/step2_active';
import SecondStepInactive from 'assets/icons/steps/step2_inactive';
import ThirdStepActive from 'assets/icons/steps/step3_active';
import ThirdStepInactive from 'assets/icons/steps/step3_inactive';
import FourthStepActive from 'assets/icons/steps/step4_active';
import FourthStepInactive from 'assets/icons/steps/step4_inactive';
import FifthStepActive from 'assets/icons/steps/step5_active';
import FifthStepInactive from 'assets/icons/steps/step5_inactive';
import AddressForm from 'components/fillProfileForm/addressCard';
import CreditCardForm from 'components/fillProfileForm/cardInfoCard';
import GeneralInfoCard from 'components/fillProfileForm/generalInfoCard';
import RoleCard from 'components/fillProfileForm/roleCard';
import SizeForm from 'components/fillProfileForm/sizeCard';
import { TabProps, UserData } from 'components/fillProfileForm/types';
import { countriesOptions, countryCodes } from 'const/constants';

export const iconsActive = [
  <FirstStepActive />,
  <SecondStepActive />,
  <ThirdStepActive />,
  <FourthStepActive />,
  <FifthStepActive />,
];
export const iconsInactive = [
  <></>,
  <SecondStepInactive />,
  <ThirdStepInactive />,
  <FourthStepInactive />,
  <FifthStepInactive />,
];

export const tabs = [
  ({ setSelectedIndex, index, data }: TabProps) => (
    <RoleCard setSelectedIndex={setSelectedIndex} index={index} data={data} />
  ),
  ({ setSelectedIndex, index, data }: TabProps) => (
    <GeneralInfoCard
      setSelectedIndex={setSelectedIndex}
      index={index}
      data={data}
    />
  ),
  ({ setSelectedIndex, index, data }: TabProps) => (
    <AddressForm
      setSelectedIndex={setSelectedIndex}
      index={index}
      data={data}
    />
  ),
  ({ setSelectedIndex, index, data }: TabProps) => (
    <CreditCardForm
      setSelectedIndex={setSelectedIndex}
      index={index}
      data={data}
    />
  ),
  ({ setSelectedIndex, index, data }: TabProps) => (
    <SizeForm setSelectedIndex={setSelectedIndex} index={index} data={data} />
  ),
];

export const paymentElementOptions = {
  layout: 'tabs',
  fields: {
    billingDetails: 'never' as unknown,
  },
} as StripePaymentElementOptions;

export const billingDetails = (data: UserData) => {
  const billing_details = {
    name: data.full_name,
    email: data.email,
    phone: data.phone,
    address: {
      country: countryCodes[countriesOptions.indexOf(data.country)],
      postal_code: '',
      state: data.state,
      city: data.city,
      line1: data.address,
      line2: data.address_2,
    },
  };
  return billing_details;
};

export const elementsOptions = {
  mode: 'setup',
  currency: 'usd',
  paymentMethodCreation: 'manual',
  appearance: {
    theme: 'stripe',
  },
};
