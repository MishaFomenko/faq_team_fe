import styled from '@emotion/styled';

import { Theme } from 'styles/theme.ts';


export const ProductsWrapper = styled.div<{
  theme?: Theme;
  cardSize: string;
  gapSize: string;
}>`

  width: 100%;
  list-style: none;

  overflow: scroll;

  ul {
    display: flex;
    gap: ${({ gapSize }) => gapSize};
    flex-wrap: wrap;

    li {
      width: ${({ cardSize }) => cardSize};
    }
  }
`;
