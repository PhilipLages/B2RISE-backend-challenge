const PRICE_THRESHOLD = 100;

type ItemType = {
  name: string;
  price: number;
};

function processItems(items: ItemType[]) {
  items.forEach((item) => {
    if (item.price > PRICE_THRESHOLD) {
      console.log(`${item.name} is expensive`);
    }
  });
}

// Examplo:
const items = [
  { name: "Item 1", price: 150 },
  { name: "Item 2", price: 50 },
];

processItems(items);
