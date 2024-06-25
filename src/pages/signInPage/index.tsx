import { useTranslation } from 'react-i18next';

import GoogleIcon from 'assets/icons/iconGoogle';
import LogoIcon from 'assets/icons/iconLogo';
import bgImg from 'assets/images/sign-in.png';
import { ArrowBackLink } from 'components/arrowBackLink';
import UseProtectRoute from 'components/hooks/useProtectRoute.ts';
import {
  FormContainer,
  FormHeader,
  FormLink,
  FormSection,
  Google,
  ListContainer,
  LogoContainer,
  LogoWrap,
  PolicyLink,
  SubTitle,
  Text,
  Title,
} from 'components/sharedUI/form/styles';
import { SignInForm } from 'components/signInForm';
import { links } from 'const/links';
import { paths } from 'const/paths';

const SignInPage = () => {
  UseProtectRoute();

  const { t } = useTranslation();

  const verifyGoogle = async () => {
    window.location.href = links.googleRoute;
  };

  return (
    <FormSection>
      <LogoContainer img={bgImg}>
        <LogoWrap>
          <LogoIcon width={203} height={56} />
        </LogoWrap>
      </LogoContainer>
      <FormContainer>
        <FormHeader>
          <Title>
            <ArrowBackLink link={links.backToSignUp} />
            {t('signIn.title')}
          </Title>
          <SubTitle>{t('signIn.subtitle')}</SubTitle>
          <Google type="button" onClick={verifyGoogle}>
            <GoogleIcon />
            {t('signIn.google')}
          </Google>
          <Text>or</Text>
        </FormHeader>
        <SignInForm />
        <FormLink to={paths.signUp}>
          <p>{t('signIn.signUpLink')}</p>
          <span>{t('signIn.signUp')}</span>
        </FormLink>
        <ListContainer>
          <li>
            <PolicyLink to={paths.privacyPolicy}>
              {t('signIn.policyLink')}
            </PolicyLink>
          </li>
          <li>
            <PolicyLink to={paths.termsOfUse}>
              {t('signIn.termsLink')}
            </PolicyLink>
          </li>
        </ListContainer>
      </FormContainer>
    </FormSection>
  );
};

export default SignInPage;
