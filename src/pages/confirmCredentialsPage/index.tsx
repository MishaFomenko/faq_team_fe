import { useTranslation } from 'react-i18next';
import bgImg from 'src/assets/images/sign-up.png';

import { ArrowBackLink } from 'components/arrowBackLink';
import { ConfirmCredentialsForm } from 'components/confirmCredentialsForm';
import {
  ErrorMsg,
  FormContainer,
  FormHeader,
  FormSection,
  LogoContainer,
  Title,
} from 'components/sharedUI/form/styles';
import { links } from 'const/links';

import { useGetMeQuery } from '../../redux/userApiSlice.ts';

const ConfirmCredentialsPage = () => {
  const { t } = useTranslation();
  const { data: user, error } = useGetMeQuery();

  return (
    <FormSection>
      <LogoContainer img={bgImg}></LogoContainer>
      {user && (
        <FormContainer>
          <FormHeader>
            <Title>
              <ArrowBackLink link={links.backToSignIn} />
              {t('confirmCredentials.title')}
            </Title>
          </FormHeader>
          <ConfirmCredentialsForm
            email_value={user.email}
            full_name={user.full_name}
            id={user.id}
          />
        </FormContainer>
      )}
      {error ? <ErrorMsg>{error}</ErrorMsg> : null}
    </FormSection>
  );
};

export default ConfirmCredentialsPage;
