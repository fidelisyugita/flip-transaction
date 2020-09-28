/* eslint-disable curly */
export default (amount = 0, currency = 'Rp') => {
  if (isNaN(amount)) return 0;

  let res = amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&.');
  res = res.substring(0, res.length - 3);

  return `${currency}${res}`;
};
