export function appendCard(card, container) {
  const template = `
<div class="card">
  <button
    class="card__bookmark ${card.bookmarked ? "card__bookmark--active" : ""}"
    aria-label="Bookmark this question"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      height="35px"
      width="35px"
      fill="currentColor"
      role="img"
    >
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
    </svg>
  </button>
  <p class="card__text">${card.question}</p>
  <button class="card__button">Show answer</button>
  <ul class="card__tags">
    <li class="card__tag">#html</li>
    <li class="card__tag">#css</li>
    <li class="card__tag">#flexbox</li>
  </ul>
</div>

<div class="card card__answer--back">
  <p class="card__text">
    ${card.answer}
  </p>
  <button class="card__button">Hide answer</button>
</div>`;
  const cardElement = document.createElement("section");
  cardElement.classList.add("card__container");
  cardElement.setAttribute("data-card-id", card.id);
  cardElement.innerHTML = template;

  container.appendChild(cardElement);
}

export function getAllCards() {
  return JSON.parse(localStorage.getItem("cards")) ?? [];
}

export function setAllCards(cards) {
  localStorage.setItem("cards", JSON.stringify(cards));
}

/**
 * Handles bookmark toggle functionality for a card.
 *
 * @param {Event} event - The event object triggered by the bookmark toggle.
 * @param {boolean} removeCard - A flag indicating whether to remove the card container from the DOM after the bookmark toggle.
 */
export function handleBookmarkToggle(event, removeCard) {
  const toggleBtn = event.currentTarget;

  // Find the button element and its closest card container
  toggleBtn.classList.toggle("card__bookmark--active");
  const cardContainerElement = toggleBtn.closest("[data-card-id]");

  // Get the card ID
  const cardId = cardContainerElement.getAttribute("data-card-id");

  // Find and update the corresponding card from localStorage
  const allCards = getAllCards();
  const updatedCards = allCards.map((card) => {
    if (card.id === cardId) {
      card.bookmarked = !card.bookmarked;
    }
    return card;
  });

  // Save the updated cards to localStorage
  setAllCards(updatedCards);

  // If removeCard is true, remove the card container element from the DOM
  if (removeCard) {
    cardContainerElement.remove();
  }
}
