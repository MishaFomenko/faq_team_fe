import styled from '@emotion/styled';

import { Theme } from 'styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const SizeList = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const SizeButton = styled.button<{ selected: boolean; theme?: Theme }>`
  width: 40px;
  height: 40px;
  border: 1px solid
    ${({ selected, theme }) =>
      selected ? theme.colors.black : theme.colors.style_border};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: ${({ theme }) => theme.colors.black};
  }
`;
