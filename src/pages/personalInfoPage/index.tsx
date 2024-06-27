import { Elements } from '@stripe/react-stripe-js';
import { loadStripe, StripeElementsOptions } from '@stripe/stripe-js';

import { EditProfileForm } from 'components/editProfileForm';
import { elementsOptions } from 'components/fillProfileForm/constants';
import { UserData } from 'components/fillProfileForm/types.ts';

const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLIC_KEY as string,
);

const PersonalInfoPage = ({
  data,
  isLoading,
}: {
  data: UserData;
  isLoading: boolean;
}) => {
  const options = elementsOptions as StripeElementsOptions;

  return (
    <>
      <Elements options={options} stripe={stripePromise}>
        <EditProfileForm data={data} isLoading={isLoading} />
      </Elements>
    </>
  );
};

export default PersonalInfoPage;
