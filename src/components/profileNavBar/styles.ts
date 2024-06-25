import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

import { Theme } from 'styles/theme';

export const MobTitle = styled.p<{ theme?: Theme }>`
  margin-bottom: 16px;
  font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  font-size: ${({ theme }) => theme.fontSize.semiLg};
  line-height: 1.85;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.black};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    display: none;
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  margin-bottom: 12px;
  margin: 0 auto;
  width: 120px;
  height: 120px;
`;

export const UserName = styled.p<{ theme?: Theme }>`
  margin-bottom: 16px;
  font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  font-size: ${({ theme }) => theme.fontSize.semiLg};
  line-height: 1.85;
  text-align: center;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.black};
`;

export const ModeList = styled.ul<{ theme?: Theme }>`
  margin-bottom: 16px;
  min-width: 312px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  li {
    p {
      font-weight: ${({ theme }) => theme.fontWeight.semibold};
      font-size: ${({ theme }) => theme.fontSize.md};
      line-height: 2.31;
      letter-spacing: -0.01em;
      color: ${({ theme }) => theme.colors.secondary_black};
    }

    button {
      border: none;
      border-radius: 12px;
      padding: 8px 24px;
      width: 140px;
      background-color: ${({ theme }) => theme.colors.black};

      font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
      font-weight: ${({ theme }) => theme.fontWeight.regular};
      font-size: ${({ theme }) => theme.fontSize.extraSm};
      color: ${({ theme }) => theme.colors.white};
      transition: ${({ theme }) => theme.transition.main};

      @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
        min-width: 108px;
      }

      &:is(:hover, :focus) {
        background-color: ${({ theme }) => theme.colors.gray};
      }
    }
  }
`;

export const StyledNavLink = styled(NavLink)<{ theme?: Theme }>`
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.md};
  line-height: 2.31;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.thirdary_black};
  cursor: pointer;
  transition: ${({ theme }) => theme.transition.main};
`;

export const OddNavLink = styled(StyledNavLink)<{ theme?: Theme }>`
  &:is(:hover, :focus, :active) {
    background-color: ${({ theme }) => theme.colors.pastel_green};
  }
`;

export const EvenNavLink = styled(StyledNavLink)<{ theme?: Theme }>`
  &:is(:hover, :focus, :active) {
    background-color: ${({ theme }) => theme.colors.greyish_red};
  }
`;

export const NavList = styled.ul<{ theme?: Theme }>`
  margin-bottom: 26px;
  min-width: 312px;
  padding: 12px;
  border-radius: 16px;
  box-shadow: 0 6px 20px 0 ${({ theme }) => theme.colors.box_shadow};

  li {
    &::after {
      margin-top: 12px;
      content: '';
      display: block;
      width: 100%;
      border: 1px solid ${({ theme }) => theme.colors.greyish_red};
    }
  }

  li:not(:last-child) {
    margin-bottom: 26px;
  }
`;

export const DeleteAccBtn = styled.button<{ theme?: Theme }>`
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 12px;
  padding: 8px 24px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};

  font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.black};
  transition:
    background-color,
    color,
    border ${({ theme }) => theme.transition.main};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 150px;
  }

  &:is(:hover, :focus) {
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.error_red};
  }
`;
