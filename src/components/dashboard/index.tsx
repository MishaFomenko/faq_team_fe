import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';

import {
  useDashboardData,
  useResponsiveCharts,
  useResponsiveXLabel,
} from './dashBoardHooks';
import {
  Chart,
  ColorBox,
  DashHeader,
  FuturePageContainer,
  getChartParams,
  getPieParams,
  GraphsContainer,
  NoRecentOrders,
  Pie,
  PieDataContainer,
  PieDataRow,
  PieDataTitle,
  PieTableSource,
  RecentElement,
  RecentElementsContainer,
  RecentOrders,
  RecentTitle,
  RelativeValue,
  StatsContainer,
  TotalDiv,
  TotalNumbers,
  TotalsContainer,
  TotalTitle,
  TotalValue,
} from './styles';
import { getLast12Months } from './utils';

const Dashboard = ({ userId }: { userId: string }) => {
  const { t } = useTranslation();
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const pieContainerRef = useRef<HTMLDivElement | null>(null);

  const { perMonth, perCategoryPie, perCategoryTable, lastOrders, totals } =
    useDashboardData(userId);
  const { chartWidth, pieWidth } = useResponsiveCharts(
    chartContainerRef,
    pieContainerRef,
  );

  const { tickLabelStyle } = useResponsiveXLabel();

  const last12Months = getLast12Months();

  const chartData = perMonth;
  const pieData = perCategoryPie;
  const pieDataTable = perCategoryTable;

  const chartParams = getChartParams(
    chartData,
    chartWidth,
    last12Months,
    tickLabelStyle,
  );
  const pieParams = getPieParams(pieData, pieWidth);

  const totalTitles = [
    t('dashboard.totalTitle'),
    t('dashboard.averTitle'),
    t('dashboard.numberTitle'),
  ];

  return (
    <FuturePageContainer>
      <StatsContainer>
        <DashHeader>
          <p>{t('dashboard.dashboardHeader')}</p>
        </DashHeader>
        <TotalsContainer>
          {Object.keys(totals).length &&
            totals.map((element, index) => (
              <TotalDiv key={index}>
                <TotalTitle>{totalTitles[index]}</TotalTitle>
                <TotalNumbers>
                  <TotalValue>
                    {index < 2 && '$'}
                    {element?.totValue}
                  </TotalValue>
                  <RelativeValue val={element?.relValue}>
                    {element?.relValue}%
                  </RelativeValue>
                </TotalNumbers>
              </TotalDiv>
            ))}
        </TotalsContainer>
        <GraphsContainer>
          <Chart ref={chartContainerRef}>
            <TotalTitle>{t('dashboard.totalSalesTitle')}</TotalTitle>
            <BarChart {...chartParams} />
          </Chart>
          <Pie ref={pieContainerRef}>
            <TotalTitle>{t('dashboard.salesPerCategoryTitle')}</TotalTitle>
            <PieChart {...pieParams} />
            <PieDataContainer>
              <PieDataTitle>
                <p>{t('dashboard.source')}</p>
                <p className="transient">{t('dashboard.orders')}</p>
                <p>{t('dashboard.amount')}</p>
              </PieDataTitle>
              {pieDataTable.map((element, index) => (
                <PieDataRow key={index}>
                  <PieTableSource>
                    {' '}
                    <ColorBox index={index}></ColorBox>
                    <p>{element.source}</p>
                  </PieTableSource>
                  <p className="transient">{element.orders}</p>
                  <p>${element.amount}</p>
                </PieDataRow>
              ))}
            </PieDataContainer>
          </Pie>
        </GraphsContainer>
        <DashHeader>
          <p>{t('dashboard.recentOrdersHeader')}</p>
        </DashHeader>
        <RecentOrders>
          <RecentTitle>
            <p className="recent-transient-laptop">{t('dashboard.recentId')}</p>
            <p>{t('dashboard.recentProduct')}</p>
            <p className="recent-transient-laptop">
              {t('dashboard.recentPrice')}
            </p>
            <p className="recent-transient-mobile">
              {t('dashboard.recentStatus')}
            </p>
            <p>{t('dashboard.recentAction')}</p>
          </RecentTitle>
          <RecentElementsContainer>
            {lastOrders.length ? (
              lastOrders.map((element, index) => (
                <RecentElement key={index}>
                  <p className="recent-transient-laptop">#{index + 1}</p>
                  <p>{element.product}</p>
                  <p className="recent-transient-laptop">${element.price}</p>
                  <p className="recent-transient-mobile status">
                    {element.status}
                  </p>
                  <a>{t('dashboard.recentOpenOrder')}</a>
                </RecentElement>
              ))
            ) : (
              <NoRecentOrders>{t('dashboard.recentNoOrders')}</NoRecentOrders>
            )}
          </RecentElementsContainer>
        </RecentOrders>
      </StatsContainer>
    </FuturePageContainer>
  );
};

export default Dashboard;
