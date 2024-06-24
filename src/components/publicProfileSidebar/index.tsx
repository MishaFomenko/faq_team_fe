import { useTranslation } from 'react-i18next';

import RatingStarIcon from 'assets/icons/iconRatingStar.tsx';
import bgImg from 'assets/images/default_profile_img.png';
import FollowButton from 'components/followButton';
import {
  ProfileAvatar,
  SideBarInfo,
  SideBarWrapper,
  UserInfo,
  UserName,
  UserRating,
} from 'components/publicProfileSidebar/styles.ts';
import { PublicProfileSidebarType } from 'components/publicProfileSidebar/types.ts';

const PublicProfileSidebar = ({
  fullName,
  avgRate,
  userId,
}: PublicProfileSidebarType) => {
  const { t } = useTranslation();

  return (
    <SideBarWrapper>
      <SideBarInfo>
        <div></div>
        <UserInfo>
          <ProfileAvatar img={bgImg} />
          <UserName>{fullName}</UserName>
          <UserRating>
            <RatingStarIcon />
            <span>{avgRate ? avgRate : t('userInfo.noRate')}</span>{' '}
          </UserRating>
          <FollowButton userId={userId} />
        </UserInfo>
      </SideBarInfo>
    </SideBarWrapper>
  );
};

export default PublicProfileSidebar;
