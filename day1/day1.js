const inputData = require("./input.txt");
const fs = require("fs").promises;

let readInput = async () => {
  let res = await fs.readFile("./input.txt");
  return res
    .toString()
    .split("\n")
    .map(Number);
};

const getFuel = mass => {
  return Math.floor(mass / 3) - 2;
};

const reduceWhileFuel = mass => {
  let acc = 0;
  let curr = mass;
  while (curr > 0) {
    curr = getFuel(curr);
    console.log(acc, "+", curr);
    if (curr > 0) {
      acc = acc + curr;
    }
  }
  console.log("total: ", acc);
  return acc;
};

const solve1 = async () => {
  const input = await readInput();
  return input.reduce((a, b) => a + getFuel(b), 0);
};

const solve2 = async () => {
  const input = await readInput();
  return input.reduce((a, b) => a + reduceWhileFuel(b), 0);
};

solve2().then(answer => console.log(answer));
