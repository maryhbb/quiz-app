import { registerThemeToggle } from "../darkMode.js";
import { getAllCards } from "../card/index.js";
registerThemeToggle();

/**
 * Updates the question and bookmarked count functionality on the profile page.
 */
const cards = getAllCards();

document.querySelector('[data-js="quation-count"]').textContent = cards.length;
document.querySelector('[data-js="bookmarks-count"]').textContent =
  cards.filter((card) => card.bookmarked).length;
