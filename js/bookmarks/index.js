import {
  appendCard,
  getAllCards,
  handleBookmarkToggle,
} from "../card/index.js";
import { flipCard } from "../flipCard.js";

const container = document.querySelector("main");
getAllCards()
  .filter((card) => card.bookmarked)
  .forEach((card) => appendCard(card, container));
flipCard();

// Attach event listeners to card bookmarks for removing unbookmarked cards in localStorage through handleBookmarkToggle
const removeCardBookmarks = document.querySelectorAll(".card__bookmark");
removeCardBookmarks.forEach((cardBookmark) => {
  cardBookmark.addEventListener("click", (event) =>
    handleBookmarkToggle(event, true)
  );
});
