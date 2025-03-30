const BASE_PRICE = 100;
const PREMIUM_DISCOUNT = 0.8;
const REGULAR_DISCOUNT = 0.9;

function applyDiscount(price: number, discount: number): number {
  return price * discount;
}

function getFinalPrice(price: number, isPremium: boolean): number {
  const isValidForDiscount = price > BASE_PRICE;

  if (isPremium) {
    return isValidForDiscount
      ? applyDiscount(price, PREMIUM_DISCOUNT)
      : applyDiscount(price, REGULAR_DISCOUNT);
  }

  return isValidForDiscount ? applyDiscount(price, REGULAR_DISCOUNT) : price;
}

// Exemplo:
const price = 120;
const isPremium = true;

const finalPrice = getFinalPrice(price, isPremium);
console.log(`Final price: ${finalPrice}`);
