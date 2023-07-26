const form = document.querySelector("form");

form.onsubmit = (event) => {
  event.preventDefault();

  // az tooye form yek Card Object dorost mikonim

  const formData = new FormData(form);
  const cardData = {
    id: 666,
    ...Object.fromEntries(formData),
    bookmarked: false,
  };

  // avalan az localstorage miporim card ha chi hastan va oona ro bede be ma
  // age hichi nabood (null) mikonimesh ye array khali
  // agar chizi pas dada, midoonim ke yek array hast (ama dar shekle string) va bayad ba JSON.parse parsesh mikonim be array ghabele khoondan
  const cards = JSON.parse(localStorage.getItem("cards")) ?? [];

  // alan be oon array ino ezafe mikonim
  cards.push(cardData);
  console.log(cards);
  // result ro ba JSON.stringify be string tabdil va sepas dar lokal storage save mikonim
  localStorage.setItem("cards", JSON.stringify(cards));

  form.reset();
};

//character limit functionality
const textareas = document.querySelectorAll('[data-js="textarea"]');
const outputCharacters = document.querySelectorAll(
  '[data-js="output-characters"]'
);

// Loop through each textarea element
textareas.forEach((textarea, index) => {
  textarea.addEventListener("input", () => {
    // Calculate the number of remaining characters allowed (limit of 30 characters for testing during development)
    const remainingChars = 30 - textarea.value.length;

    if (remainingChars >= 0) {
      outputCharacters[index].textContent =
        remainingChars + " characters remaining";
    } else {
      outputCharacters[index].textContent =
        "Not possible to write, character limit exceeded";

      // Trim the textarea value to the character limit (30 characters)
      textarea.value = textarea.value.slice(0, 30);
    }
  });
});
