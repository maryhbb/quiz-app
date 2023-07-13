// Filip Card
export function flipCard() {
  const flipButton = document.querySelectorAll(".card__button");

  flipButton.forEach((btn) => {
    btn.addEventListener("click", () => {
      // const container = btn.parentElement.parentElement;
      const container = btn.closest(".card__container");
      container.classList.toggle("flipped");
    });
  });
}
