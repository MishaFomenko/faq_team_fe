import styled from '@emotion/styled';
import { Theme } from 'src/styles/Theme';

export const ExampleForm = styled.form<{ theme?: Theme }>`
  width: 300px;

  input {
    width: 100%;
    outline: ${({ theme }) => theme.colors.border};
    border-color: ${({ theme }) => theme.colors.border};
    color: blue;
  }
`;
