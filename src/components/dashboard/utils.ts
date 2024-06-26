export const getLast12Months = () => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const currentMonth = new Date().getMonth();
  const last12Months = [];

  for (let i = 0; i < 12; i++) {
    last12Months.unshift(months[(currentMonth - i + 12) % 12] as never);
  }

  return last12Months;
};
