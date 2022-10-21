import moment from 'moment';

const getDateLastMonth = () => {
  const lastDate = moment().subtract(1, 'months').format('YYYY-MM-DD');
  return lastDate;
};

const getCurrentDate = () => {
  const currentDate = moment().format('YYYY-MM-DD');
  return currentDate;
};

const getCurrentYear = () => {
  const currentYear = moment().format('YYYY');
  return currentYear;
};

export { getDateLastMonth, getCurrentDate, getCurrentYear };
