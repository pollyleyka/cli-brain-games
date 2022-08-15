export default (minNumber = 0, maxNumber = 100) => {
  const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
  return randomNumber;
};
