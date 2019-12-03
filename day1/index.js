const { loadInputNewline } = require('../utils/loading');
const inputPath = "./day1/input.txt"

const getFuel = mass => {
  return Math.floor(mass / 3) - 2;
};

const reduceWhileFuel = mass => {
  let acc = 0;
  let curr = mass;
  while (curr > 0) {
    curr = getFuel(curr);
    if (curr > 0) {
      acc = acc + curr;
    }
  }
  return acc;
};

const solve1 = () => {
  const input = loadInputNewline(inputPath);
  return input.reduce((a, b) => a + getFuel(b), 0);
};

const solve2 =  () => {
  const input = loadInputNewline(inputPath)
  return input.reduce((a, b) => a + reduceWhileFuel(b), 0);
};

console.log('Solution 1 =', solve1())
console.log('Solution 2 =', solve2())
