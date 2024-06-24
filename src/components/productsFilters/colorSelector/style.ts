import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const ColorList = styled.div`
  display: flex;
  gap: 10px;
  margin-left: 10px;
  flex-wrap: wrap;
`;

export const ColorButton = styled.button<{ color: string; selected: boolean }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: ${({ selected }) => (selected ? '2px solid white' : 'none')};
  box-shadow: ${({ selected, color }) =>
    selected ? `0 0 0 2px ${color}` : 'none'};
  background-color: ${({ color }) => color};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
