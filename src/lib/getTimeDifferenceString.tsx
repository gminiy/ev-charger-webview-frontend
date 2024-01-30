export const getTimeDifferenceString = (timestamp: number) => {
  if (!timestamp) return "";

  const now = Date.now();
  const differenceInSeconds = Math.floor((now - timestamp * 1000) / 1000);
  const minutes = Math.floor(differenceInSeconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days}일 전`;
  } else if (hours > 0) {
    return `${hours}시간 ${minutes % 60}분 전`;
  } else {
    return `${minutes}분 전`;
  }
};
