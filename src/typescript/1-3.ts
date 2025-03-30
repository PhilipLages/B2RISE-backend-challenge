function makeAllPositive(numbers: number[]): number[] {
  return numbers.map((num) => Math.abs(num));
}

// Exemplo:
const numbers = [-1, 2, -3, 4];
console.log(makeAllPositive(numbers));
