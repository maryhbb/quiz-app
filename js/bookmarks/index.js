import { appendCard } from "../card/index.js";
import { cards } from "../card/data.js";
import { flipCard } from "../flipCard.js";

const container = document.querySelector("main");

cards
  .filter((card) => card.bookmarked)
  .forEach((card) => appendCard(card, container));
flipCard();
