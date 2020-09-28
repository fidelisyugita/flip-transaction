/* eslint-disable curly */
export default (dateString = '2020-09-29') => {
  const date = new Date(dateString.substring(0, 10));

  let res = date.getDate() + ' ';

  switch (date.getMonth()) {
    case 1:
      res += 'Februari ';
      break;
    case 2:
      res += 'Maret ';
      break;
    case 3:
      res += 'April ';
      break;
    case 4:
      res += 'Mei ';
      break;
    case 5:
      res += 'Juni ';
      break;
    case 6:
      res += 'Juli ';
      break;
    case 7:
      res += 'Agustus ';
      break;
    case 8:
      res += 'September ';
      break;
    case 9:
      res += 'Oktober ';
      break;
    case 10:
      res += 'November ';
      break;
    case 11:
      res += 'Desember ';
      break;
    default:
      res += 'Januari';
      break;
  }

  res += date.getFullYear();

  return res;
};
