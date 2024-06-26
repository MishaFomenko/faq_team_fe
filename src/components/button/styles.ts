import styled from '@emotion/styled';

import { Theme } from 'styles/theme';

import { buttonProps, ButtonVariant } from './types';

export const StyledButton = styled.button<{ theme?: Theme } & buttonProps>`
  background-color: ${props =>
    props.variant === ButtonVariant.Black
      ? props.theme.colors.black
      : props.theme.colors.white};
  color: ${props =>
    props.variant === ButtonVariant.Black
      ? props.theme.colors.white
      : props.theme.colors.black};
  border: 2px solid ${({ theme }) => theme.colors.black};
  padding: 16px;
  font-size: ${({ theme }) => theme.fontSize.md};
  cursor: pointer;
  border-radius: 12px;
`;
