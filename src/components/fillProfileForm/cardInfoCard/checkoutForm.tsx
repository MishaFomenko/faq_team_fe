import { FormEvent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { useSaveCardInfoMutation } from 'redux/authApiSlice';
import { useGetCardInfoQuery } from 'redux/userApiSlice';
import { v4 as uuidv4 } from 'uuid';

import {
  CardInfo,
  StyledFormWrapper,
} from 'components/fillProfileForm/cardInfoCard/styles';
import {
  billingDetails,
  paymentElementOptions,
} from 'components/fillProfileForm/constants';
import {
  ButtonsContainer,
  StyledButton,
  StyledCard,
  StyledFormContainer,
  StyledSubtitle,
  StyledTabContainer,
  StyledTitle,
} from 'components/fillProfileForm/sharedStyles';
import { ButtonVariant, TabProps } from 'components/fillProfileForm/types';

const CheckoutForm = ({ setSelectedIndex, index, data }: TabProps) => {
  const { t } = useTranslation();

  const [changeCard, setChangeCard] = useState(true);

  const [registrationSaveCardInfo] = useSaveCardInfoMutation();
  const { data: cardInfo, refetch } = useGetCardInfoQuery();

  useEffect(() => {
    refetch();
    cardInfo?.lastFourDigits && setChangeCard(!cardInfo);
  }, [data, refetch]);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    if (!stripe || !elements || !changeCard) {
      setSelectedIndex(index + 1);
      return;
    }

    await elements.submit();

    const { paymentMethod } = await stripe.createPaymentMethod({
      elements,
      params: {
        billing_details: billingDetails(data),
      },
    });

    const result = await registrationSaveCardInfo({
      paymentMethod,
      id: data.id,
    });
    !result.error && setSelectedIndex(index + 1);
  };

  const handleChangeCard = () => {
    setChangeCard(true);
  };

  return (
    <StyledTabContainer onSubmit={handleSubmit}>
      <StyledCard>
        <StyledFormContainer>
          <StyledTitle>{t('fillProfile.cardInfoCard.title')}</StyledTitle>
          <StyledSubtitle>
            {t('fillProfile.cardInfoCard.subTitle')}
          </StyledSubtitle>
        </StyledFormContainer>
        <StyledFormWrapper>
          {cardInfo?.lastFourDigits && (
            <CardInfo>
              <p>Your current payment method:</p>{' '}
              <span>
                {cardInfo.cardBrand}: **** **** **** {cardInfo.lastFourDigits}
              </span>
            </CardInfo>
          )}
          {changeCard && (
            <PaymentElement
              id="payment-element"
              options={paymentElementOptions}
            />
          )}
          <StyledButton
            onClick={handleChangeCard}
            variant={ButtonVariant.Black}
          >
            {!changeCard ? 'Change payment method' : 'Close'}
          </StyledButton>
        </StyledFormWrapper>{' '}
      </StyledCard>
      <ButtonsContainer>
        <StyledButton
          variant={ButtonVariant.White}
          onClick={() => setSelectedIndex(index - 1)}
          key={uuidv4()}
        >
          {t('fillProfile.prevButton')}
        </StyledButton>
        <StyledButton
          key={uuidv4()}
          variant={ButtonVariant.Black}
          type="submit"
        >
          {t('fillProfile.nextButton')}
        </StyledButton>
      </ButtonsContainer>
    </StyledTabContainer>
  );
};

export default CheckoutForm;
