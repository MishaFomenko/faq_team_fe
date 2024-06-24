import { PublicProfileInfoType } from 'components/publicProfileInfo/types.ts';
import ReviewCard from 'components/reviewCard';
import { ReviewsWrapper } from 'components/reviewsList/styles.ts';

const ReviewsList = ({ userReviews }: Partial<PublicProfileInfoType>) => {
  return (
    <ReviewsWrapper>
      <ul>
        {userReviews &&
          userReviews.map(review => (
            <ReviewCard key={review.id} review={review} />
          ))}
      </ul>
    </ReviewsWrapper>
  );
};

export default ReviewsList;
