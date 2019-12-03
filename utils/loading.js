const fs = require("fs")

const loadInputNewline = (filePath) => {
    const res = fs.readFileSync(filePath)
    return res
      .toString()
      .split("\n")
      .map(Number);
  };

  const loadInputComma = (filePath) => {
    const res = fs.readFileSync(filePath)
    return res
      .toString()
      .split(",")
      .map(Number);
  };

  module.exports = {loadInputComma, loadInputComma}