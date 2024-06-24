import styled from '@emotion/styled';

import { Theme } from 'styles/theme.ts';

export const ProductFeedContainer = styled.div`
  display: flex;

  padding: 0 15px;
`;
export const FilterSection = styled.div`
  width: 23%;

  padding: 24px;
`;
export const ProductsSection = styled.div`
  width: 75%;
`;
export const AppliedFiltersWrapper = styled.div<{ theme?: Theme }>`
  display: flex;
  justify-content: space-between;

  p {
    font-family: ${({ theme }) => theme.fontNames.inter};
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    line-height: 26px;
  }
`;
export const SortSelect = styled.div``;

export const LoadMoreBtnWrapper = styled.div`
  text-align: center;
`;

export const LoadMoreBtn = styled.button<{ theme?: Theme }>`
  background-color: ${({ theme }) => theme.colors.thirdary_black};
  color: ${({ theme }) => theme.colors.greyish_red};
  padding: 12px 26px;
  border-radius: 6px;
  margin: 80px auto 130px;
`;
