import { useTranslation } from 'react-i18next';

import BagIcon from 'assets/icons/iconBag';
import BellIcon from 'assets/icons/iconBell';
import UserIcon from 'assets/icons/iconUser';
import logo from 'assets/images/logo.png';
import { Button } from 'components/button';
import { ButtonVariant } from 'components/button/types';
import useProtectRoute from 'components/hooks/useProtectRoute.ts';
import { Container } from 'components/section/styles';

import {
  Circle,
  Icon,
  IconBag,
  IconsContainer,
  InnerContainer,
  Logo,
  MenuNav,
  MenuNavItem,
  Nav,
  NavLink,
  StyledHeader,
} from './styles';

// TODO add cart functionality

const productsNum = 2;
export const Header = () => {
  const { t } = useTranslation();
  const { access_token } = useProtectRoute();

  return (
    <StyledHeader>
      <Container>
        <InnerContainer>
          <Logo>
            <img src={logo} />
          </Logo>
          <Nav>
            <MenuNav>
              <MenuNavItem>
                <NavLink to={'#'}>{t('header.text')}</NavLink>
              </MenuNavItem>
              <MenuNavItem>
                <NavLink to={'#'}>{t('header.vendor')}</NavLink>
              </MenuNavItem>
              <MenuNavItem>
                <NavLink to={'#'}>{t('header.messages')}</NavLink>
              </MenuNavItem>
            </MenuNav>
          </Nav>
          <IconsContainer>
            {access_token ? (
              <>
                <Icon>
                  <BellIcon />
                </Icon>
                <Icon>
                  <UserIcon />
                </Icon>
                <IconBag>
                  <BagIcon />
                  <Circle>{productsNum}</Circle>
                </IconBag>
              </>
            ) : (
              <>
                <Button variant={ButtonVariant.Black}>
                  {t('signIn.submitBtn')}
                </Button>
                <Button variant={ButtonVariant.White}>
                  {t('signUp.submitBtn')}
                </Button>
              </>
            )}
          </IconsContainer>
        </InnerContainer>
      </Container>
    </StyledHeader>
  );
};
