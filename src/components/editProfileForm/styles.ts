import styled from '@emotion/styled';

import { SubmitBtn } from 'components/sharedUI/form/styles';
import { Theme } from 'styles/theme';

export const EditImgBtn = styled.label`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const ImgWrap = styled.div`
  margin-inline: auto;
  margin-bottom: 24px;
  width: 120px;
  height: 120px;
  position: relative;

  img {
    border-radius: 50%;
    width: 120px;
    height: 120px;
  }
`;

export const EditForm = styled.form<{ theme?: Theme }>`
  h2 {
    margin-bottom: 20px;
    font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    font-size: ${({ theme }) => theme.fontSize.md};
    line-height: 2.31;
    letter-spacing: -0.01em;
    color: ${({ theme }) => theme.colors.secondary_black};
  }
`;

export const InfoWrap = styled.div<{ theme?: Theme }>`
  margin-bottom: 24px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    margin-bottom: 0;
  }

  label {
    display: block;
    margin-bottom: 8px;
    font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    font-size: ${({ theme }) => theme.fontSize.sm};
    line-height: 1.43;
    letter-spacing: -0.01em;
    color: ${({ theme }) => theme.colors.black};
  }

  input {
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 6px;
    padding: 12px 16px;
    width: 100%;
    height: 44px;
    outline: none;

    font-size: ${({ theme }) => theme.fontSize.md};
    line-height: 1.25;
    letter-spacing: -0.01em;
    color: ${({ theme }) => theme.colors.black};
    transition: border-color ${({ theme }) => theme.transition.main};

    ::placeholder {
      color: ${({ theme }) => theme.colors.gray};
    }

    &:hover,
    &:focus {
      border-color: ${({ theme }) => theme.colors.black};
    }

    .error-input {
      border: 1px solid ${({ theme }) => theme.colors.error_red};

      &:focus {
        border-color: ${({ theme }) => theme.colors.error_red};
        color: ${({ theme }) => theme.colors.error_red};
      }
    }
  }
`;

export const InfoField = styled.div`
  height: 66px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const SizesWrap = styled.div<{ theme?: Theme }>`
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: 80%;
  }
  margin-bottom: 13px;

  label {
    display: block;
    margin-bottom: 8px;
    font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    font-size: ${({ theme }) => theme.fontSize.sm};
    line-height: 1.43;
    letter-spacing: -0.01em;
    color: ${({ theme }) => theme.colors.black};
  }

  a {
    display: flex;
    justify-content: end;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-size: ${({ theme }) => theme.fontSize.md};
    line-height: 1.5;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: ${({ theme }) => theme.colors.black};
    cursor: pointer;
  }
`;

export const SizeField = styled(InfoField)``;

export const StyledSelectWrapper = styled.div<{ theme?: Theme }>`
  .react-select__control {
    border: none;
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 6px;
    width: 100%;
    height: 44px;
    font-size: ${({ theme }) => theme.fontSize.md};
    line-height: 1.25;
    letter-spacing: -0.01em;
    color: ${({ theme }) => theme.colors.black};
    box-shadow: none;

    &:is(:hover, :focus) {
      border: 1px solid ${({ theme }) => theme.colors.black};
    }
  }

  .react-select__control--is-focused {
    border: 1px solid ${({ theme }) => theme.colors.black};
  }

  .react-select__menu {
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 6px;
    margin-top: 4px;
  }

  .react-select__option {
    padding: 12px 16px;
    font-size: ${({ theme }) => theme.fontSize.md};
    line-height: 1.25;
    letter-spacing: -0.01em;
    color: ${({ theme }) => theme.colors.black};
    border-radius: 6px;
  }

  .react-select__option--is-selected {
    background-color: ${({ theme }) => theme.colors.for_tables};
  }

  .react-select__option--is-focused {
    background-color: ${({ theme }) => theme.colors.for_tables};
  }
`;

export const DesktopWrap = styled.div<{ theme?: Theme }>`
  margin-bottom: 24px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    display: flex;
    gap: 30px;
  }
`;

export const SaveBtn = styled(SubmitBtn)`
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    margin-left: auto;
    width: 170px;
  }
`;

export const AddressWrap = styled.div<{ theme?: Theme }>`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 8px;
    font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    font-size: ${({ theme }) => theme.fontSize.sm};
    line-height: 1.43;
    letter-spacing: -0.01em;
    color: ${({ theme }) => theme.colors.black};
  }

  input {
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 6px;
    padding: 12px 16px;
    width: 100%;
    height: 44px;
    outline: none;

    font-size: ${({ theme }) => theme.fontSize.md};
    line-height: 1.25;
    letter-spacing: -0.01em;
    color: ${({ theme }) => theme.colors.black};
    transition: border-color ${({ theme }) => theme.transition.main};

    ::placeholder {
      color: ${({ theme }) => theme.colors.gray};
    }

    &:hover,
    &:focus {
      border-color: ${({ theme }) => theme.colors.black};
    }

    .error-input {
      border: 1px solid ${({ theme }) => theme.colors.error_red};

      &:focus {
        border-color: ${({ theme }) => theme.colors.error_red};
        color: ${({ theme }) => theme.colors.error_red};
      }
    }
  }
`;

export const LocationField = styled.div<{ theme?: Theme }>`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 8px;
    font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    font-size: ${({ theme }) => theme.fontSize.sm};
    line-height: 1.43;
    letter-spacing: -0.01em;
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const CardWrap = styled.div`
  width: 100%;
`;

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
