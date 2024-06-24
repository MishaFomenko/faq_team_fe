import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'redux/hooks.ts';

import bgImg from 'assets/images/verification.png';
import { ArrowBackLink } from 'components/arrowBackLink';
import { OtpForm } from 'components/otpForm';
import {
  FormContainer,
  FormHeader,
  FormSection,
  LogoContainer,
  SubTitle,
  Title,
} from 'components/sharedUI/form/styles';
import { otpFormVersions } from 'const/constants';
import { links } from 'const/links';

export const VerifyEmailPage = () => {
  const { t } = useTranslation();
  const user = useAppSelector(state => state.auth.user);

  return (
    <FormSection>
      <LogoContainer img={bgImg}></LogoContainer>
      <FormContainer>
        <FormHeader>
          <Title>
            <ArrowBackLink link={links.backToSignIn} />
            {t('verificationEmail.title')}
          </Title>
          <SubTitle>{t('verificationEmail.subtitle')}</SubTitle>
        </FormHeader>
        <OtpForm
          step={user.step}
          email={user.email}
          action={otpFormVersions.verifyEmail}
        />
      </FormContainer>
    </FormSection>
  );
};

export default VerifyEmailPage;
