import { useParams } from 'react-router-dom';
import { useGetPublicInfoQuery } from 'redux/userApiSlice.ts';


import PublicProfileInfo from 'components/publicProfileInfo';
import PublicProfileSidebar from 'components/publicProfileSidebar';
import { PublicProfileContainer } from 'pages/publicProfilePage/styles.ts';

const PublicProfilePage = () => {
  const { id: userTargetId } = useParams();
  const { data } = useGetPublicInfoQuery(userTargetId);

  return (
    <PublicProfileContainer>
      {data?.id && (
        <PublicProfileSidebar
          fullName={data?.full_name}
          avgRate={data?.avgRate}
          userId={data?.id}
        />
      )}
      <PublicProfileInfo
        fullName={data?.full_name}
        userReviews={data?.user_reviews}
        userRole={data?.user_role}
        products={data?.products}
      />
    </PublicProfileContainer>
  );
};

export default PublicProfilePage;
