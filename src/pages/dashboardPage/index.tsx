import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetMeQuery } from 'redux/userApiSlice';

import Dashboard from 'components/dashboard';

const DashboardPage = () => {
  const { data } = useGetMeQuery();
  const navigate = useNavigate();
  useEffect(() => {
    data && data.user_role !== 'vendor' && navigate(-1);
  }, [data, navigate]);
  return (
    <>{data && data.user_role === 'vendor' && <Dashboard userId={data.id} />}</>
  );
};

export default DashboardPage;
