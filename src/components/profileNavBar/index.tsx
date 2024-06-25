import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';

import LogoutIcon from 'assets/icons/logoutIcon';
import OrdersIcon from 'assets/icons/ordersIcon';
import SupportIcon from 'assets/icons/supportIcon';
import UserIcon from 'assets/icons/userIcon';
import WishListIcon from 'assets/icons/wishListIcon';
import defaultAvatar from 'assets/images/default-avatar.png';
import { paths } from 'const/paths';

import {
  Avatar,
  DeleteAccBtn,
  EvenNavLink,
  MobTitle,
  ModeList,
  NavList,
  OddNavLink,
  UserName,
} from './styles';
import { ProfileNavBarProps } from './types';

const iconsSize: number = 32;

export const ProfileNavBar = ({
  toggleModal,
  avatar,
  name,
}: {
  toggleModal: ProfileNavBarProps;
  avatar: string;
  name: string;
}) => {
  const { t } = useTranslation();
  const [isVendor, setIsVendor] = useState<boolean>(false);

  const handleUserMode = () => {
    setIsVendor(!isVendor);
  };

  const handleLogOut = () => {
    Cookies.remove('access_token');
  };

  return (
    <>
      <MobTitle>{t('profileNav.mobTitle')}</MobTitle>
      <Avatar src={avatar || defaultAvatar} alt="user-avatar" />
      <UserName>{name}</UserName>
      <ModeList>
        <li>
          <p>
            {isVendor
              ? t('profileNav.mode.vendor')
              : t('profileNav.mode.buyer')}
          </p>
        </li>
        <li>
          <button type="button" onClick={handleUserMode}>
            {isVendor
              ? t('profileNav.button.vendor')
              : t('profileNav.button.buyer')}
          </button>
        </li>
      </ModeList>
      <NavList>
        <li>
          <OddNavLink to={paths.personalInfo}>
            <UserIcon width={iconsSize} height={iconsSize} />
            <span>{t('profileNav.navLinks.info')}</span>
          </OddNavLink>
        </li>
        {isVendor ? null : (
          <li>
            <EvenNavLink to={paths.orders}>
              <OrdersIcon width={iconsSize} height={iconsSize} />
              <span>{t('profileNav.navLinks.orders')}</span>
            </EvenNavLink>
          </li>
        )}
        {isVendor ? null : (
          <li>
            <OddNavLink to={paths.wishlist}>
              <WishListIcon width={iconsSize} height={iconsSize} />
              <span>{t('profileNav.navLinks.wishlist')}</span>
            </OddNavLink>
          </li>
        )}
        <li>
          <EvenNavLink to={paths.support}>
            <SupportIcon width={iconsSize} height={iconsSize} />
            <span>{t('profileNav.navLinks.support')}</span>
          </EvenNavLink>
        </li>
        <li>
          <OddNavLink to={paths.signIn} onClick={handleLogOut}>
            <LogoutIcon width={iconsSize} height={iconsSize} />
            <span>{t('profileNav.navLinks.logout')}</span>
          </OddNavLink>
        </li>
      </NavList>
      <DeleteAccBtn type="button" onClick={toggleModal}>
        {t('deleteAccount.button')}
      </DeleteAccBtn>
    </>
  );
};
