const buildCount = (i) => {
  let count = i;
  const displayCount = () => {
    console.log(count++);
  };
  return displayCount;
};

const myCount = buildCount(5);
myCount();

const myCount2 = buildCount(15);
myCount2();
