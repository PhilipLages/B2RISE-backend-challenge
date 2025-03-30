type OperationType = "add" | "subtract" | "multiply" | "divide";

function calculate(
  operation: OperationType,
  firstValue: number,
  secondValue: number
): number {
  if (operation === "divide" && secondValue === 0) {
    throw new Error("Division by zero");
  }

  const operationsMap: Record<OperationType, () => number> = {
    add: () => firstValue + secondValue,
    subtract: () => firstValue - secondValue,
    multiply: () => firstValue * secondValue,
    divide: () => firstValue / secondValue,
  };

  return operationsMap[operation]();
}

// Exemplo:
console.log(calculate("add", 5, 2));
