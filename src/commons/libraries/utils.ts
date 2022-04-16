// 자주 쓰는 함수 모아 놓는 곳

// 날짜변환
export const getDate = (date) => {
  const newdate = new Date(date);
  const yyyy = newdate.getFullYear();
  const mm = newdate.getMonth() + 1;
  const dd = newdate.getDate();
  return `${yyyy}-${mm}-${dd}`;
};
