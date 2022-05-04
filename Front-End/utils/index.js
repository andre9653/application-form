function calcPercent(total, num) {
  return (num * 100) / total;
}

function sum(...args) {
  return args.reduce((acc, crr) => acc + crr);
}

export {
  calcPercent,
  sum,
};
