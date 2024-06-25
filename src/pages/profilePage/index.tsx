import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetMeQuery } from 'redux/userApiSlice';

import { DeleteAccountModal } from 'components/deleteAccountModal';
import { ProfileNavBar } from 'components/profileNavBar';
import PersonalInfoPage from 'pages/personalInfoPage';

import {
  OutletWrap,
  ProfileNavBarWrap,
  ProfileSection,
  ProfileSectionWrap,
  TitleSection,
} from './styles';

const ProfilePage = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prevIsModalOpen => !prevIsModalOpen);
  };
  const { data, isLoading } = useGetMeQuery();
  console.log(data);
  return (
    <>
      <TitleSection>
        <p>{t('profileNav.title')}</p>
      </TitleSection>
      <ProfileSection>
        <ProfileSectionWrap>
          <ProfileNavBarWrap>
            {data && (
              <ProfileNavBar
                toggleModal={toggleModal}
                avatar={data.avatar}
                name={data.full_name}
              />
            )}
          </ProfileNavBarWrap>
          <OutletWrap>
            {data && <PersonalInfoPage data={data} isLoading={isLoading} />}
          </OutletWrap>
        </ProfileSectionWrap>
      </ProfileSection>
      {isModalOpen && (
        <DeleteAccountModal isModalOpen={isModalOpen} onClose={toggleModal} />
      )}
    </>
  );
};

export default ProfilePage;
