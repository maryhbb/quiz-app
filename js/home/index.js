import { appendCard, getAllCards } from "../card/index.js";
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
  event.currentTarget.classList.toggle("card__bookmark--active");
}

const cardBookmarks = document.querySelectorAll(".card__bookmark");
for (const cardBookmark of cardBookmarks) {
  cardBookmark.onclick = toggleBookmark;
}
