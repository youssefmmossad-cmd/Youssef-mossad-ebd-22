
/**
 * Takes the name out of every product.
 */
export function productNames(products) {
  return products.map(product => product.name);
}

/**
 * Keeps only products that cost less than maxPrice.
 */
export function cheaperThan(products, maxPrice) {
  return products.filter(product => product.price < maxPrice);
}

/**
 * Looks up one product by its id.
 */
export function findById(products, id) {
  return products.find(product => product.id === id);
}

/**
 * Adds up the price of every product.
 */
export function totalPrice(products) {
  return products.reduce((total, product) => total + product.price, 0);
}

/**
 * Returns the names of products that are in stock.
 */
export function inStockNames(products) {
  return products.filter(product => product.inStock).map(product => product.name);
}
