import { appendCard, getAllCards, setAllCards } from "../card/index.js";
import { flipCard } from "../flipCard.js";

const cards = getAllCards();
function renderCard() {
  const container = document.querySelector("main");
  container.innerHTML = "";
  cards.forEach((card) => appendCard(card, container));
  flipCard();
}

renderCard();

function toggleBookmark(event) {
  const toggleBtn = event.currentTarget;

  // add active class to selected bookmark
  toggleBtn.classList.toggle("card__bookmark--active");

  //find card ID
  const cardContainerElement = toggleBtn.closest("[data-card-id]");
  const cardId = cardContainerElement.getAttribute("data-card-id");

  //find corresponding card from localStorage
  const updatedCards = getAllCards().map((card) => {
    if (card.id === cardId) {
      card.bookmarked = !card.bookmarked;
    }
    return card;
  });

  setAllCards(updatedCards);
}

const cardBookmarks = document.querySelectorAll(".card__bookmark");
for (const cardBookmark of cardBookmarks) {
  cardBookmark.onclick = toggleBookmark;
}
