import { appendCard } from "../card/index.js";
import { cards } from "../card/data.js";
import { flipCard } from "../flipCard.js";

function renderCard() {
  const container = document.querySelector("main");
  container.innerHTML = "";
  cards.forEach((card) => appendCard(card, container));
  flipCard();
}

renderCard();
