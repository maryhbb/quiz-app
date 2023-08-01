import {
  appendCard,
  getAllCards,
  handleBookmarkToggle,
} from "../card/index.js";
import { flipCard } from "../flipCard.js";

const container = document.querySelector("main");
getAllCards().forEach((card) => appendCard(card, container));
flipCard();

// Attach event listeners to card bookmarks to toggle and save bookmarked cards in localStorage through handleBookmarkToggle function
const toggleCardBookmarks = document.querySelectorAll(".card__bookmark");
toggleCardBookmarks.forEach((cardBookmark) => {
  cardBookmark.addEventListener("click", (event) =>
    handleBookmarkToggle(event, false)
  );
});
