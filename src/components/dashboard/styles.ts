import styled from '@emotion/styled';

import { Theme, theme } from 'styles/theme';

export const FuturePageContainer = styled.div<{ theme?: Theme }>`
  width: 100vw;
  height: 100vh;
  min-height: 690px;
  background-color: ${({ theme }) => theme.colors.for_card_bg};

  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
    height: auto;
  }
`;

export const DashHeader = styled.div<{ theme?: Theme }>`
  width: 100%;
  height: 5%;
  display: flex;
  align-items: center;
  font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const StatsContainer = styled.div<{ theme?: Theme }>`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.for_card_bg};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TotalsContainer = styled.div<{ theme?: Theme }>`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    flex-direction: column;
    height: auto;
    gap: 10px;
  }
`;

export const TotalDiv = styled.div<{ theme?: Theme }>`
  padding: 10px;
  width: 32%;
  background-color: red;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 100%;
  }
`;

export const TotalTitle = styled.p<{ theme?: Theme }>`
  margin-bottom: 10px;
  width: 100%;
  font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

export const TotalNumbers = styled.div<{ theme?: Theme }>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const TotalValue = styled.p<{ theme?: Theme }>`
  font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const RelativeValue = styled.p<{ theme?: Theme; val: number }>`
  padding-top: 5px;
  color: ${({ theme, val }) =>
    val <= 0 ? theme.colors.error_red : theme.colors.green_success};
  font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const GraphsContainer = styled.div<{ theme?: Theme }>`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    height: auto;
    flex-direction: column;
    gap: 10px;
  }
`;

export const Chart = styled.div<{ theme?: Theme }>`
  padding: 10px;
  width: 66%;
  background-color: red;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 100%;
  }
`;

export const Pie = styled.div<{ theme?: Theme }>`
  padding: 10px;
  width: 32%;
  background-color: red;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 100%;
  }
`;

export const PieDataContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PieDataTitle = styled.div<{ theme?: Theme }>`
  width: 100%;
  height: 15px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fontNames.dmSans};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.regular};

  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
    gap: 8%;
    font-size: ${({ theme }) => theme.fontSize.sm};

    p {
      width: 60px;
    }
  }

  .transient {
    @media (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
      display: none;
    }
  }
`;

export const PieDataRow = styled.div<{ theme?: Theme }>`
  width: 100%;
  height: 15px;
  display: flex;
  flex-direction: row;
  gap: 20%;
  align-items: center;
  font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};

  p {
    width: 100px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
    gap: 0%;
    font-size: ${({ theme }) => theme.fontSize.sm};

    justify-content: space-between;

    p {
      width: 60px;
      min-width: 50px;
    }
  }

  .transient {
    @media (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
      display: none;
    }
  }
`;

export const PieTableSource = styled.div`
  width: 100px;
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 2px;
`;

export const ColorBox = styled.div<{ index: number; theme?: Theme }>`
  height: 10px;
  width: 10px;
  background-color: ${({ theme, index }) => theme.colors.dashboard_pie[index]};
  margin-top: 5px;
  margin-right: 3px;
`;

export const RecentOrders = styled.div<{ theme?: Theme }>`
  padding: 10px;
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const RecentTitle = styled.div<{ theme?: Theme }>`
  padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10%;
  align-items: center;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.for_card_bg};

  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
    justify-content: space-between;
  }

  p {
    width: 120px;
    font-family: ${({ theme }) => theme.fontNames.playfairDisplay};
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};

    @media (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
      font-size: ${({ theme }) => theme.fontSize.sm};
    }
  }

  .recent-transient-laptop {
    @media (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
      display: none;
    }
  }

  .recent-transient-mobile {
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
      display: none;
    }
  }
`;

export const RecentElementsContainer = styled.div<{ theme?: Theme }>`
  width: 100%;
  height: 100%;
  padding-top: 5px;
  padding-bottom: 10px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;

  & > *:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.greyish_red};
    padding-bottom: 10px;
  }
`;

export const RecentElement = styled.div<{ theme?: Theme }>`
  padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10%;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
    justify-content: space-between;
  }

  p {
    width: 120px;
    min-height: 20px;
    font-family: ${({ theme }) => theme.fontNames.dmSans};
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: ${({ theme }) => theme.fontWeight.regular};

    @media (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
      font-size: ${({ theme }) => theme.fontSize.sm};
    }
  }

  a {
    width: 120px;
    text-decoration: underline;
  }

  .status {
    padding: 3px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.error_light_red};
    color: ${({ theme }) => theme.colors.error_red};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    display: flex;
    justify-content: center;
  }

  .recent-transient-laptop {
    @media (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
      display: none;
    }
  }

  .recent-transient-mobile {
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
      display: none;
    }
  }
`;

export const NoRecentOrders = styled.div<{ theme?: Theme }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.lg}'
`;

export const getChartParams = (
  data: number[],
  chartWidth: number,
  last12Months: string[],
  tickLabelStyle: object,
) => {
  const chartParams = {
    margin: { left: 60, top: 10, bottom: 40, right: 30 },
    borderRadius: 5,
    height: 240,
    width: chartWidth,
    grid: { horizontal: true },
    xAxis: [
      {
        data: last12Months,
        scaleType: 'band' as const,
        tickLabelStyle: tickLabelStyle,
      },
    ],
    yAxis: [
      {
        tickInterval: 'auto' as const,
        valueFormatter: (value: number) => `$${value}`,
        tickMaxStep: 100000,
        tickMinStep: 1,
      },
    ],
    series: [
      {
        data,
        color: theme.colors.black,
      },
    ],
  };
  return chartParams;
};

export const pieColors = theme.colors.dashboard_pie;

export const getPieParams = (
  data: { id: number; value: number }[],
  pieWidth: number,
) => {
  const pieParams = {
    height: 150,
    margin: { right: 0, left: 0 },
    width: pieWidth,
    series: [
      {
        data,
        innerRadius: 30,
      },
    ],
    colors: pieColors,
  };
  return pieParams;
};
