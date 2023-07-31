import { appendCard, getAllCards, setAllCards } from "../card/index.js";
import { flipCard } from "../flipCard.js";

const container = document.querySelector("main");

getAllCards()
  .filter((card) => card.bookmarked)
  .forEach((card) => appendCard(card, container));
flipCard();

function removeBookmark(event) {
  // find button element
  const toggleBtn = event.currentTarget;
  console.log(toggleBtn);

  //find card ID
  const cardContainerElement = toggleBtn.closest("[data-card-id]");
  console.log(cardContainerElement);

  const cardId = cardContainerElement.getAttribute("data-card-id");
  console.log(cardId);

  //find corresponding card from localStorage
  const updatedCards = getAllCards().map((card) => {
    if (card.id === cardId) {
      card.bookmarked = !card.bookmarked;
    }
    return card;
  });

  setAllCards(updatedCards);
  cardContainerElement.remove();
}
const cardBookmarks = document.querySelectorAll(".card__bookmark");
for (const cardBookmark of cardBookmarks) {
  cardBookmark.onclick = removeBookmark;
}
