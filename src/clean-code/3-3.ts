const isNumberEven = (number: number): boolean => {
  return number % 2 === 0;
};

function doubleEvens(numbers: number[]): number[] {
  return numbers
    .filter((number) => isNumberEven(number))
    .map((number) => number * 2);
}

// Exemplo:
const numbersArray = [1, 2, 3, 4, 5];
const doubledEvens = doubleEvens(numbersArray);
console.log(doubledEvens);
