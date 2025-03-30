function extractValues<Type, Key extends keyof Type>(
  data: Type[],
  key: Key
): Type[Key][] {
  const values = data.map((item) => item[key]);

  return values.filter((value) => Boolean(value));
}

// Exemplo:
const data = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

console.log(extractValues(data, "name"));
