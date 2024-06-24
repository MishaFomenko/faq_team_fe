import styled from '@emotion/styled';

import { Theme } from 'styles/theme.ts';

export const ReviewsWrapper = styled.div<{ theme?: Theme }>`
  width: 100%;
  height: 80vh;

  overflow: scroll;

  h2 {
    margin: 24px 0;

    font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
    font-size: ${({ theme }) => theme.fontSize.midLq};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    line-height: 37px;
  }

  ul {
    li {
      border: 1px solid rgba(0, 0, 0, 0.24);
      border-radius: 12px;
      padding: 16px;
      margin-bottom: 24px;
    }
  }
`;
