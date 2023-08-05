const colorGen = () => {
  const value = Math.round(Math.random() * 360 + 0);
  const colorData = {
    backgroundColor: `hsl(${value},100%,70%)`,
    color: `hsl(${value},80%,50%)`,
  };
  return colorData;
};

export default colorGen;
