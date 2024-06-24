import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Button } from 'components/button';
import { Theme } from 'styles/theme';

export const StyledForm = styled.form<{ theme?: Theme }>`
  width: 335px;
  margin-bottom: 32px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    min-width: 0;
    width: 100%;
  }

  div {
    height: 66px;
    position: relative;
    margin-bottom: 20px;

    label {
      margin-bottom: 8px;
      font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
      font-weight: ${({ theme }) => theme.fontWeight.semibold};
      font-size: ${({ theme }) => theme.fontSize.sm};
      line-height: 1.43;
      letter-spacing: -0.01em;
      color: ${({ theme }) => theme.colors.black};

      @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        color: ${({ theme }) => theme.colors.white};
      }

      @media screen and (min-width: ${({ theme }) =>
          theme.breakpoint.desktop}) {
        color: ${({ theme }) => theme.colors.black};
      }
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
      color: ${({ theme }) => theme.colors.gray};
      transition: border-color ${({ theme }) => theme.transition.main};

      &:hover,
      &:focus {
        border-color: ${({ theme }) => theme.colors.black};
      }
    }

    .error-input {
      border: 1px solid ${({ theme }) => theme.colors.error_red};

      &:focus {
        border-color: ${({ theme }) => theme.colors.error_red};
        color: ${({ theme }) => theme.colors.error_red};
      }
    }

    button {
      position: absolute;
      top: 60%;
      right: 16px;
      background-color: transparent;
      padding: 0;
      width: 24px;
      height: 24px;

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export const SubmitBtn = styled(Button)<{ theme?: Theme }>`
  width: 100%;

  font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
  border: none;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSize.md};
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.transition.main};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
  }

  &:is(:hover, :focus) {
    background-color: ${({ theme }) => theme.colors.gray};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.greyish_red};
    color: ${({ theme }) => theme.colors.gray};
    cursor: not-allowed;
  }
`;

export const PasswordLink = styled(Link)<{ theme?: Theme }>`
  display: block;
  margin-bottom: 20px;
  font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: 1.43;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.black};

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    color: ${({ theme }) => theme.colors.white};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const ErrorMsg = styled.p<{ theme?: Theme }>`
  height: 20px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: 1.43;
  color: ${({ theme }) => theme.colors.error_red};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    color: ${({ theme }) => theme.colors.error_tablet};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    color: ${({ theme }) => theme.colors.error_red};
  }
`;

export const FormSection = styled.div<{ theme?: Theme }>`
  height: 100vh;
  display: flex;
`;

export const FormContainer = styled.div<{ theme?: Theme }>`
  width: 40%;

  z-index: 100;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    min-width: 450px;
    margin: 0 auto;
    padding: 30px;
    background-color: ${({ theme }) => theme.colors.overlay_black};
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    min-width: 250px;
    width: 100%;
    margin: 0 auto;
    padding: 30px;
    background-color: ${({ theme }) => theme.colors.overlay_black};
  }
`;

export const LogoContainer = styled.div<{ img: string; theme?: Theme }>`
  ${({ img }) => css`
    background-image: url(${img});
  `}
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top left;

  width: 60%;
  height: 100%;
  @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 100%;
    position: absolute;
    z-index: 0;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: none;
  }
`;

export const FormHeader = styled.div<{ theme?: Theme }>`
  width: 335px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 100%;
  }
`;

export const ListContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 150px;
  margin-top: 20px;
`;

export const PolicyLink = styled(Link)<{ theme?: Theme }>`
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: 1.43;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.black};

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    color: ${({ theme }) => theme.colors.white};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const Title = styled.h1<{ theme?: Theme }>`
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
  font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  font-size: ${({ theme }) => theme.fontSize.extraLg};
  line-height: 1.32;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.black};

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    color: ${({ theme }) => theme.colors.white};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const SubTitle = styled.h2<{ theme?: Theme }>`
  margin-bottom: 20px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: 1.43;
  color: ${({ theme }) => theme.colors.gray};

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    color: ${({ theme }) => theme.colors.white};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const FormLink = styled(Link)<{ theme?: Theme }>`
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 4px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: 1.43;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.gray};

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    color: ${({ theme }) => theme.colors.white};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    color: ${({ theme }) => theme.colors.gray};
  }

  span {
    font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    font-size: ${({ theme }) => theme.fontSize.sm};
    line-height: 1.43;
    letter-spacing: -0.01em;
    color: ${({ theme }) => theme.colors.black};

    @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
      color: ${({ theme }) => theme.colors.white};
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;

export const Google = styled.button<{ theme?: Theme }>`
  margin-bottom: 20px;
  width: 335px;
  padding: 16px 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
  border: none;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSize.md};
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.transition.main};

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 100%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
  }

  &:is(:hover, :focus) {
    background-color: ${({ theme }) => theme.colors.gray};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const Text = styled.p<{ theme?: Theme }>`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.extraSm};
  line-height: 1.33;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.black};

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    color: ${({ theme }) => theme.colors.white};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    color: ${({ theme }) => theme.colors.black};
  }

  ::before {
    content: '';
    display: block;
    width: 45%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.border};

    @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
      background-color: ${({ theme }) => theme.colors.white};
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
      background-color: ${({ theme }) => theme.colors.border};
    }
  }

  ::after {
    content: '';
    display: block;
    width: 45%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.border};

    @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
      background-color: ${({ theme }) => theme.colors.white};
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
      background-color: ${({ theme }) => theme.colors.border};
    }
  }
`;

export const LogoWrap = styled.div<{ theme?: Theme }>`
  margin: 50px 0 0 50px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    display: none;
  }
`;
