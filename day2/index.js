const { loadInputComma } = require('../utils/loading');
const inputPath = './day2/input.txt';

const handle1 = (opcodeIndex, intcode) => {
  // read input values from two given positions
  const val1 = intcode[intcode[opcodeIndex + 1]];
  const val2 = intcode[intcode[opcodeIndex + 2]];
  // Add values
  const output = val1 + val2;
  // return output at third given position
  intcode[intcode[opcodeIndex + 3]] = output;
};

const handle2 = (opcodeIndex, intcode) => {
  // read input values from two given positions
  const val1 = intcode[intcode[opcodeIndex + 1]];
  const val2 = intcode[intcode[opcodeIndex + 2]];
  // Multiply values
  const output = val1 * val2;
  // return output at third given position
  intcode[intcode[opcodeIndex + 3]] = output;
};

const prerun = (intcode, noun, verb) => {
  intcode[1] = noun;
  intcode[2] = verb;
};

const run = intcode => {
  for (let i = 0; i < intcode.length; i += 4) {
    const int = intcode[i];
    switch (int) {
      case 1:
        handle1(i, intcode);
        break;
      case 2:
        handle2(i, intcode);
        break;
      case 99:
        return;
      default:
        throw new Error('Did not encounter opcode');
    }
  }
};

const solve1 = () => {
  const input = loadInputComma(inputPath);
  prerun(input, 12, 2);
  run(input);
  return input[0];
};

const solve2 = () => {
  const input = loadInputComma(inputPath);
  const DESIRED_OUTPUT = 19690720;

  let noun = 0;
  let verb = 0;
  while (true) {
    // Create a copy of the original input to mutate
    const testInput = input.slice();
    prerun(testInput, noun, verb);
    run(testInput);

    // Brute force increment noun and verb
    if (testInput[0] === DESIRED_OUTPUT) {
      console.log('Complete!');
      return 100 * noun + verb;
    }

    if (verb > 99) {
      console.log('Somethings gone wrong');
      return;
    }
    if (noun >= 99) {
      noun = 0;
      verb++;
    } else {
      noun++;
    }
  }
};

// const test = [1, 1, 1, 4, 99, 5, 6, 0, 99];
// run(test);
// console.log(test);

// console.log('Solution 1 =', solve1());
console.log('Solution 2 =', solve2());
