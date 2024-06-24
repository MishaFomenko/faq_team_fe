import { useGetPublicInfoQuery } from 'redux/userApiSlice.ts';

import RatingStarIcon from 'assets/icons/iconRatingStar.tsx';
import bgImg from 'assets/images/default_profile_img.png';
import { UserRating } from 'components/publicProfileSidebar/styles.ts';
import ReadMore from 'components/readMore';
import { shownTextLimit } from 'const/constants.ts';

import {
  ReviewDate,
  ReviewerAvatar,
  ReviewerInfo,
  ReviewerName,
} from './styles.ts';

const ReviewCard = ({ review }) => {
  const { data } = useGetPublicInfoQuery(review.review_target_id);
  console.log(data);

  return (
    <li>
      <ReviewerInfo>
        <div>
          <ReviewerAvatar img={bgImg} />
          <div>
            <ReviewerName>{review?.review_target.full_name}</ReviewerName>{' '}
            <ReviewDate>
              {new Date(review.created_at).toLocaleDateString()}
            </ReviewDate>
          </div>
        </div>
        <UserRating>
          <RatingStarIcon />
          <span>{data?.avgRate}</span>
        </UserRating>
      </ReviewerInfo>
      <ReadMore text={review.review_text} amountOfWords={shownTextLimit} />
    </li>
  );
};

export default ReviewCard;
