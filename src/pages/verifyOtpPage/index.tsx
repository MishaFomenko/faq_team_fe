import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'redux/hooks.ts';

import bgImg from 'assets/images/sign-in.png';
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

export const VerifyOtpPage = () => {
  const { t } = useTranslation();
  const user = useAppSelector(state => state.auth.user);

  return (
    <FormSection>
      <LogoContainer img={bgImg}></LogoContainer>
      <FormContainer>
        <FormHeader>
          <Title>
            <ArrowBackLink link={links.backToSignIn} />
            {t('enterCode.title')}
          </Title>
          <SubTitle>{t('enterCode.subtitle')}</SubTitle>
        </FormHeader>
        <OtpForm email={user.email} action={otpFormVersions.newPass} />
      </FormContainer>
    </FormSection>
  );
};

export default VerifyOtpPage;
