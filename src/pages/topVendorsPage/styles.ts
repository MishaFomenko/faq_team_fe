import styled from '@emotion/styled';

import { Section } from 'components/section';
import { Theme } from 'styles/theme';

export const TopVendorsTitleSection = styled(Section)<{ theme?: Theme }>`
  p {
    font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: ${({ theme }) => theme.fontSize.xxl};
    line-height: 1.45;
    letter-spacing: -0.03em;
    text-align: center;
    color: ${({ theme }) => theme.colors.black};
  }

  padding-top: 12px;
  padding-bottom: 12px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding-top: 32px;
    padding-bottom: 32px;
    background-color: ${({ theme }) => theme.colors.greyish_red};
  }

  button {
    width: 24px;
    height: 24px;
    background-color: transparent;

    svg {
      width: 100%;
      height: 100%;
      stroke: ${({ theme }) => theme.colors.black};
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
      display: none;
    }
  }

  .mobile-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
      justify-content: center;
    }
  }
`;

export const TopVendorsSection = styled(Section)`
  padding-top: 55px;
  padding-bottom: 49px;
`;

export const FiltersWrap = styled.div<{ theme?: Theme }>`
  margin-bottom: 20px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    margin-bottom: 0px;
    width: 216px;
  }
`;

export const TopVendorsSectionWrap = styled.div<{ theme?: Theme }>`
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    display: flex;
    gap: 30px;
    /* flex-basis: calc(100% - 30px / 2); */
  }
`;

export const VendorsListtWrap = styled.div<{ theme?: Theme }>`
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    flex-grow: 1;
    overflow: hidden;
  }
`;
