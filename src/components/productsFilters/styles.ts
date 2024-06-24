import styled from '@emotion/styled';

import { Theme } from 'styles/theme';

export const FilterWrapper = styled.div<{ theme?: Theme }>`
  // width: 310px;
  // height: 712px;
  padding: 16px;
  box-sizing: border-box;
`;

export const Section = styled.div`
  margin-bottom: 16px;

  .price-range {
    margin-top: 22px;
  }
`;

export const SectionTitle = styled.h3<{ theme?: Theme }>`
  margin: 0 0 8px 0;
  font-size: ${({ theme }) => theme.fontSize.md};
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

export const CheckboxInput = styled.input`
  cursor: pointer;
`;

export const Actions = styled.div<{ theme?: Theme }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 22px;

  button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.black};
    &:hover {
      background-color: ${({ theme }) => theme.colors.overlay_black};
    }
  }
`;
