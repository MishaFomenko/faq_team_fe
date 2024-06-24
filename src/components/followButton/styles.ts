import styled from '@emotion/styled';

import { Theme } from 'styles/theme.ts';

export const FollowButtonWrapper = styled.div<{ theme?: Theme }>`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 32px;
  padding: 14px 0;

  border: 1px solid ${({ theme }) => theme.colors.greyish_red};
  border-radius: 12px;
`;

export const FollowBtn = styled.button<{ theme?: Theme }>`
  width: 61%;

  font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 21.33px;

  padding: 16px 0;

  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.black_hover};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.black_hover};
    cursor: default;
  }
`;
