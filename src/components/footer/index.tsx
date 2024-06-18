import { useTranslation } from 'react-i18next';
import logo from 'src/assets/images/logo.png';

import EmailIcon from 'assets/icons/iconEmail';
import FacebookIcon from 'assets/icons/iconFacebook';
import InstagramIcon from 'assets/icons/iconInstagram';
import { Container } from 'components/section/styles';

import {
  Credentials,
  FooterIcon,
  FooterInner,
  FooterLeft,
  FooterLink,
  FooterLogo,
  FooterMenu,
  FooterMenuItem,
  FooterMenuList,
  FooterRight,
  FooterSocials,
  FooterText,
  FooterTitle,
  StyledFooter,
} from './styles';

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <StyledFooter>
      <Container>
        <FooterInner>
          <FooterLeft>
            <FooterLogo>
              <img src={logo} />
            </FooterLogo>
            <FooterText>{t('footer.text')}</FooterText>
            <FooterSocials>
              <FooterIcon>
                <FooterLink to="#">
                  <InstagramIcon />
                </FooterLink>
              </FooterIcon>
              <FooterIcon>
                <FooterLink to="#">
                  <FacebookIcon />
                </FooterLink>
              </FooterIcon>
              <FooterIcon>
                <FooterLink to="#">
                  <EmailIcon />
                </FooterLink>
              </FooterIcon>
            </FooterSocials>
          </FooterLeft>
          <FooterRight>
            <FooterMenu>
              <FooterTitle>{t('footer.shop')}</FooterTitle>
              <FooterMenuList>
                <FooterMenuItem>
                  <FooterLink to="#">{t('footer.login')}</FooterLink>
                </FooterMenuItem>
                <FooterMenuItem>
                  <FooterLink to="#">{t('footer.wishlist')}</FooterLink>
                </FooterMenuItem>
                <FooterMenuItem>
                  <FooterLink to="#">{t('footer.cart')}</FooterLink>
                </FooterMenuItem>
              </FooterMenuList>
            </FooterMenu>
            <FooterMenu>
              <FooterTitle>{t('footer.company')}</FooterTitle>
              <FooterMenuList>
                <FooterMenuItem>
                  <FooterLink to="#">{t('footer.about')}</FooterLink>
                </FooterMenuItem>
                <FooterMenuItem>
                  <FooterLink to="#">{t('footer.terms')}</FooterLink>
                </FooterMenuItem>
                <FooterMenuItem>
                  <FooterLink to="#">{t('footer.privacy')}</FooterLink>
                </FooterMenuItem>
                <FooterMenuItem>
                  <FooterLink to="#">{t('footer.contact')}</FooterLink>
                </FooterMenuItem>
              </FooterMenuList>
            </FooterMenu>
            <FooterMenu>
              <FooterTitle>{t('footer.help')}</FooterTitle>
              <FooterMenuList>
                <FooterMenuItem>
                  <FooterLink to="#">{t('footer.faq')}</FooterLink>
                </FooterMenuItem>
                <FooterMenuItem>
                  <FooterLink to="#">{t('footer.wishlist')}</FooterLink>
                </FooterMenuItem>
                <FooterMenuItem>
                  <FooterLink to="#">{t('footer.delivery')}</FooterLink>
                </FooterMenuItem>
                <FooterMenuItem>
                  <FooterLink to="#">{t('footer.rent')}</FooterLink>
                </FooterMenuItem>
                <FooterMenuItem>
                  <FooterLink to="#">{t('footer.resell')}</FooterLink>
                </FooterMenuItem>
              </FooterMenuList>
            </FooterMenu>
          </FooterRight>
        </FooterInner>
        <Credentials>{t('footer.copyright')}</Credentials>
      </Container>
    </StyledFooter>
  );
};
