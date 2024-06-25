import styled from '@emotion/styled';

import { Theme } from 'styles/theme';

export const VendorsListItem = styled.li<{ theme?: Theme }>`
  &:not(:last-child) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    &:not(:last-child) {
      margin-bottom: 42px;
    }
  }
`;

export const ImgWrap = styled.div<{ theme?: Theme }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    gap: 24px;
  }
`;
export const VendorImg = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
`;

export const VendorName = styled.p<{ theme?: Theme }>`
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.secondary_black};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    font-size: ${({ theme }) => theme.fontSize.semiLg};
    line-height: 1.85;
    letter-spacing: -0.01em;
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const ProductsList = styled.ul<{ theme?: Theme }>`
  width: 100%;
  margin-top: 20px;
  padding: 0;
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    margin-top: 36px;
  }

  li {
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.colors.greyish_red};
    border-radius: 8px;
    overflow: hidden;

    img {
      border-top-right-radius: 8px;
      border-top-left-radius: 8px;
      background-color: ${({ theme }) => theme.colors.greyish_red};
      width: 100%;
      height: auto;
    }

    button {
      width: 28px;
      height: 28px;
      background-color: transparent;
      @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
        width: 30px;
        height: 30px;
      }

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export const ProductCardBottom = styled.div<{ theme?: Theme }>`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  padding: 8px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding: 10px 8px;
    justify-content: space-between;
  }
`;

export const ProductName = styled.p<{ theme?: Theme }>`
  margin-bottom: 4px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    margin-bottom: 2px;
  }
  font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.black};
`;

export const ProductPrice = styled.p<{ theme?: Theme }>`
  margin-bottom: 4px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSize.sm};
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.gray};
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    margin-bottom: 2px;
  }
`;

export const VendorCardName = styled.p<{ theme?: Theme }>`
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.secondary_black};
`;
