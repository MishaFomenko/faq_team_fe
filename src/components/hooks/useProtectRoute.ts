import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const UseProtectRoute = () => {
  const access_token = Cookies.get('access_token');

  const navigate = useNavigate();

  const isLoggedIn = async () => {
    if (access_token) {
      navigate(-1);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return isLoggedIn;
};

export default UseProtectRoute;
