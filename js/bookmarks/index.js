import { appendCard, getAllCards } from "../card/index.js";
import { flipCard } from "../flipCard.js";

const container = document.querySelector("main");

getAllCards()
  .filter((card) => card.bookmarked)
  .forEach((card) => appendCard(card, container));
flipCard();
