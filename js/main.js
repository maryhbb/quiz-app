import { applyTheme } from "./darkMode.js";
import { cards as defaultCards } from "./card/data.js";
import { setAllCards } from "./card/index.js";

// Dark moode with localStorage

applyTheme();

if (localStorage.getItem("cards") === null) {
  // initialize store with default cards
  setAllCards(defaultCards);
}
