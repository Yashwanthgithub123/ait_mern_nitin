const first = [2, 4, 6];
const second = [3, 5, 7];

const allNumbers1 = first.concat(second) // Old way of doing
const allNumbers2 = [...first, ...second]
const allNumbers3 = [...first, [2, 4], ...second];
console.log(allNumbers1);
console.log(allNumbers2);
console.log(allNumbers3);
const allNumbers4 = [...first, ...[2, 4], ...second];
console.log(allNumbers4);
