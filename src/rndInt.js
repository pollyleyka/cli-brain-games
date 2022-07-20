export default (min = 0, max = 100) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  return rndNum;
};
