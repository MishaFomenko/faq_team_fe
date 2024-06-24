import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { paths } from 'const/paths';
import ProductFeed from 'pages/productFeed';
import PublicProfilePage from 'pages/publicProfilePage';
import { SharedLayout } from 'pages/sharedLayout';
import { SuperAdminLayout } from 'pages/superAdminLayout';

const UserListPage = lazy(() => import('pages/userListPage'));
const ViewUserProfilePage = lazy(() => import('pages/viewUserProfilePage'));
const HomePage = lazy(() => import('pages/homePage'));
const SignUpPage = lazy(() => import('pages/signUpPage'));
const SignInPage = lazy(() => import('pages/signInPage'));
const RestorePasswordPage = lazy(() => import('pages/restorePassPage'));
const PrivacyPolicyPage = lazy(() => import('pages/privacyPolicyPage'));
const TermsOfUsePage = lazy(() => import('pages/termsOfUsePage'));
const ConfirmCredentialsPage = lazy(
  () => import('pages/confirmCredentialsPage'),
);
const NewPassPage = lazy(() => import('pages/newPassPage'));
const VerifyOtpPAge = lazy(() => import('pages/verifyOtpPage'));
const VerifyEmailPAge = lazy(() => import('pages/verifyEmailPage'));
const ProfilePage = lazy(() => import('pages/profilePage'));
const PersonalInfoPage = lazy(() => import('pages/personalInfoPage'));
const FillProfilePage = lazy(() => import('pages/fillProfilePage'));
const TopVendorsPage = lazy(() => import('pages/topVendorsPage'));
const DashboardPage = lazy(() => import('pages/dashboardPage'));

function App() {
  return (
    <>
      <Routes>
        <Route path={paths.root} element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path={paths.signUp} element={<SignUpPage />} />
          <Route path={paths.signIn} element={<SignInPage />} />
          <Route
            path={paths.restorePassword}
            element={<RestorePasswordPage />}
          />
          <Route path={paths.privacyPolicy} element={<PrivacyPolicyPage />} />
          <Route path={paths.newPassword} element={<NewPassPage />} />
          <Route path={paths.verifyOtp} element={<VerifyOtpPAge />} />
          <Route path={paths.verifyEmail} element={<VerifyEmailPAge />} />
          <Route path={paths.fillProfile} element={<FillProfilePage />} />
          <Route path={paths.termsOfUse} element={<TermsOfUsePage />} />
          <Route path={paths.publicProfile} element={<PublicProfilePage />} />
          <Route path={paths.profile} element={<ProfilePage />}>
            <Route index element={<PersonalInfoPage />} />
          </Route>
          <Route path={paths.productFeed} element={<ProductFeed />} />
          <Route
            path={paths.confirmCredentials}
            element={<ConfirmCredentialsPage />}
          />
        </Route>
        <Route path={paths.dashboard} element={<DashboardPage />} />

        <Route path={paths.superAdminRoot} element={<SuperAdminLayout />}>
          <Route path={paths.userList} element={<UserListPage />} />
          <Route
            path={`${paths.viewUserProfile}:id`}
            element={<ViewUserProfilePage />}
          />
        </Route>
        <Route path={paths.topVendors} element={<TopVendorsPage />} />
      </Routes>
    </>
  );
}

export default App;
