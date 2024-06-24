import { ResponseGetProduct, UserReview } from 'redux/types';

export type PublicProfileInfoType = {
  fullName?: string;
  userRole?: string;
  userReviews?: UserReview[];
  products?: ResponseGetProduct[];
  cardSize?: string;
  gapSize?: string;
};
