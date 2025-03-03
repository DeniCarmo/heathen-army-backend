const getExpirationTime = (milliseconds) => {
  const now = new Date();
  
  const expirationDate = new Date(now.getTime() + milliseconds);

  return Math.floor(expirationDate.getTime() / 1000);
};

export default getExpirationTime;