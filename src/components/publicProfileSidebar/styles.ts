import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Theme } from 'styles/theme.ts';

export const SideBarWrapper = styled.div`
  width: 31%;
`;

export const SideBarInfo = styled.div``;

export const UserInfo = styled.div<{ theme?: Theme }>`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding-top: 32px;
`;

export const ProfileAvatar = styled.div<{ img: string; theme?: Theme }>`
  ${({ img }) => css`
    background-image: url(${img});
  `}

  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-size: cover;
`;

export const UserName = styled.p<{ theme?: Theme }>`
  font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
  font-size: ${({ theme }) => theme.fontSize.midLq};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  line-height: 37px;

  margin: 12px 0;
`;

export const UserRating = styled.p<{ theme?: Theme }>`
  display: flex;
  gap: 5px;

  max-height: 21px;

  span {
    align-self: flex-end;
    font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
  }
`;
