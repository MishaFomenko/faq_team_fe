import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { ResponseGetUser } from 'redux/types';

import { EditProfileForm } from 'components/editProfileForm';
import { elementsOptions } from 'components/fillProfileForm/constants';

const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLIC_KEY as string,
);

const PersonalInfoPage = ({
  data,
  isLoading,
}: {
  data: ResponseGetUser;
  isLoading: boolean;
}) => {
  const options = elementsOptions;

  return (
    <>
      <Elements options={options} stripe={stripePromise}>
        <EditProfileForm data={data} isLoading={isLoading} />
      </Elements>
    </>
  );
};

export default PersonalInfoPage;
