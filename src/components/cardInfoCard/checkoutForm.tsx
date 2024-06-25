import { PaymentElement } from '@stripe/react-stripe-js';

import { CardInfo } from 'components/cardInfoCard/styles';
import { StyledButton } from 'components/fillProfileForm/sharedStyles';
import { ButtonVariant } from 'components/fillProfileForm/types';

import { StyledForm, StyledFormWrapper } from './styles';

const CheckoutForm = ({ changeCard, setChangeCard, data }) => {
  const handleChangeCard = () => {
    setChangeCard(prev => !prev);
  };

  const paymentElementOptions = {
    layout: 'tabs',
    fields: {
      billingDetails: 'never',
    },
  };

  return (
    <StyledFormWrapper>
      <StyledForm id="payment-form">
        {data?.lastFourDigits && (
          <CardInfo>
            <p>Your current payment method:</p>{' '}
            <span>
              {data.cardBrand}: **** **** **** {data.lastFourDigits}
            </span>
          </CardInfo>
        )}
        {changeCard && (
          <PaymentElement
            id="payment-element"
            options={paymentElementOptions}
          />
        )}
        <StyledButton onClick={handleChangeCard} variant={ButtonVariant.Black}>
          {!changeCard ? 'Change payment method' : 'Close'}
        </StyledButton>
      </StyledForm>
    </StyledFormWrapper>
  );
};

export default CheckoutForm;
