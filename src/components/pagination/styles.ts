import styled from '@emotion/styled';
import { Theme } from 'styles/theme';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
`;

export const PageNumber = styled.span<{ isActive?: boolean; theme?: Theme }>`
  margin: 0 5px;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  background-color: ${props =>
    props.isActive ? props.theme.colors.black : 'transparent'};
  color: ${props =>
    props.isActive ? props.theme.colors.white : props.theme.colors.black};
  font-weight: ${props =>
    props.isActive
      ? props.theme.fontWeight.bold
      : props.theme.fontWeight.regular};
`;

export const Arrow = styled.span`
  cursor: pointer;
  margin: 0 10px;
`;
