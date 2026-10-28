// 12-dom-write — your work goes in this file.
//
// The lesson is example.js:   npm run open 12
// See your own page with:     npm run open 12 exercise
// Check your work with:       npm test 12

/**
 * Adds one product card to the end of the list.
 * addProduct("Pen", 15) adds:
 *   <li class="card"><h3>Pen</h3><p class="price">15 EGP</p></li>
 *
 * @param {string} name
 * @param {number} price in EGP
 * @returns {void}
 */
export function addProduct(name, price) {
  const card = document.createElement("li");
  card.classList.add("card");

  const h3 = document.createElement("h3");
  h3.textContent = name;

  const p = document.createElement("p");
  p.classList.add("price");
  p.textContent = price + " EGP";

  card.append(h3, p);
  document.querySelector("#list").append(card);
}

/**
 * Removes the card with that name, if there is one.
 *
 * @param {string} name
 * @returns {void}
 */
export function removeProduct(name) {
  const card = findCard(name);
  if (card) card.remove();
}

/**
 * Marks the card with that name as sold out.
 *
 * @param {string} name
 * @returns {void}
 */
export function markSoldOut(name) {
  const card = findCard(name);
  if (card) card.classList.add("sold-out");
}

/**
 * Removes every card from the list, leaving it empty.
 *
 * @returns {void}
 */
export function clearProducts() {
  for (const card of document.querySelectorAll("#list .card")) {
    card.remove();
  }
}

/**
 * #add adds a "Notebook" priced 45; #reset empties the list.
 *
 * @returns {void}
 */
export function wireButtons() {
  document.querySelector("#add").addEventListener("click", () => {
    addProduct("Notebook", 45);
  });
  document.querySelector("#reset").addEventListener("click", () => {
    clearProducts();
  });
}

// Finds the card whose h3 says `name`. Can return undefined.
function findCard(name) {
  return Array.from(document.querySelectorAll("#list .card")).find(
    (card) => card.querySelector("h3").textContent === name
  );
}