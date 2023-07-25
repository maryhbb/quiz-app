import { appendCard } from "../card/index.js";
// import { cards } from "../card/data.js";
import { flipCard } from "../flipCard.js";

const cards = JSON.parse(localStorage.getItem("cards")) ?? [];
function renderCard() {
  const container = document.querySelector("main");
  container.innerHTML = "";
  cards.forEach((card) => appendCard(card, container));
  flipCard();
}

renderCard();

// for (let node of document.querySelectorAll(".card__bookmark")) {
//   console.log(node);
//   node.onclick = (event) => event.currentTarget.classList.toggle("card__bookmark--active");
// }


const cardBookmarks = document.querySelectorAll(".card__bookmark");

function toggleBookmark(event) {
  event.currentTarget.classList.toggle("card__bookmark--active");
}

for (let i = 0; i < cardBookmarks.length; i++) {
  cardBookmarks[i].addEventListener("click", toggleBookmark);
}
