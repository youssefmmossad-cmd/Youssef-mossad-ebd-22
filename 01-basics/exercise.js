
/**
 * Says what type a value is.
 */
export function describeValue(value) {
  return `${value} is a ${typeof value}`;
}

/**
 * Builds a price label.
 */
export function priceLabel(product, amount) {
  return `${product} costs ${amount} EGP`;
}

/**
 * Is this price over 100 EGP?
 */
export function isExpensive(amount) {
  return amount > 100;
}

/**
 * What shipping costs on an order.
 */
export function shippingCost(orderTotal) {
  if (orderTotal > 500) {
    return 0;
  } else {
    return 50;
  }
}

/**
 * Describes how much of something is left.
 */
export function stockLabel(count) {
  if (count === 0) {
    return "Out of stock";
  } else if (count < 10) {
    return "Low stock";
  } else {
    return "In stock";
  }
}
