import PublicBuyerTab from 'components/publicByuerTab';
import { PublicProfileInfoWrapper } from 'components/publicProfileInfo/styles.ts';
import { PublicProfileInfoType } from 'components/publicProfileInfo/types.ts';
import PublicVendorTab from 'components/publicVendorTab';
import { userRoles } from 'const/constants.ts';

const PublicProfileInfo = ({
  fullName,
  userRole,
  userReviews,
  products,
}: PublicProfileInfoType) => {
  return (
    <PublicProfileInfoWrapper>
      {userRole === userRoles.buyer ? (
        <PublicBuyerTab userReviews={userReviews} />
      ) : (
        <PublicVendorTab
          fullName={fullName}
          userReviews={userReviews}
          products={products}
        />
      )}
    </PublicProfileInfoWrapper>
  );
};

export default PublicProfileInfo;
