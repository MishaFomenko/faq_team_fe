import { Elements } from '@stripe/react-stripe-js';
import { loadStripe, StripeElementsOptions } from '@stripe/stripe-js';

import CheckoutForm from 'components/fillProfileForm/cardInfoCard/checkoutForm';
import { elementsOptions } from 'components/fillProfileForm/constants';
import { TabProps } from 'components/fillProfileForm/types';

const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLIC_KEY as string,
);

const CreditCardForm = ({ setSelectedIndex, index, data }: TabProps) => {
  const options = elementsOptions as StripeElementsOptions;

  return (
    <Elements options={options} stripe={stripePromise}>
      <CheckoutForm
        setSelectedIndex={setSelectedIndex}
        index={index}
        data={data}
      />
    </Elements>
  );
};

export default CreditCardForm;
