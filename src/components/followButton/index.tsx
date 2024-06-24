import { useTranslation } from 'react-i18next';

import {
  FollowBtn,
  FollowButtonWrapper,
} from 'components/followButton/styles.ts';
import { useFollowUser } from 'components/followButton/useFollowUser.ts';

const FollowButton = ({ userId }: { userId?: string }) => {
  const { t } = useTranslation();
  const { handleFollow, isFollowing, error } = useFollowUser({ userId });

  return (
    <FollowButtonWrapper>
      <FollowBtn disabled={isFollowing} onClick={handleFollow}>
        {isFollowing ? t('buttonText.followed') : t('buttonText.follow')}
      </FollowBtn>
      {error ? <div>{error}</div> : null}
    </FollowButtonWrapper>
  );
};

export default FollowButton;
