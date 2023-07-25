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
