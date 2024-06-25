import styled from '@emotion/styled';

import { Theme } from 'styles/theme';

export const StyledForm = styled.div<{ theme?: Theme }>`
  width: 30vw;
  min-width: 200px;
  width: 100%;
  align-self: center;
  box-shadow:
    0px 0px 0px 0.5px ${({ theme }) => theme.colors.pastel_green},
    0px 2px 5px 0px ${({ theme }) => theme.colors.pastel_green},
    0px 1px 1.5px 0px ${({ theme }) => theme.colors.pastel_green};
  border-radius: 7px;
  padding: 40px;
  margin-left: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-left: 0px;
  }
`;

export const StyledFormWrapper = styled.div<{ theme?: Theme }>`
  font-size: ${({ theme }) => theme.fontSize.md};
  -webkit-font-smoothing: antialiased;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`;

export const CardInfo = styled.div<{ theme?: Theme }>`
  padding: 10px;
  font-family: ${({ theme }) => theme.fontNames.playfairDisplay};

  p {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;
