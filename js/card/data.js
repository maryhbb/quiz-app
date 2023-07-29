import { v4 as uuidv4 } from "https://jspm.dev/uuid";

export const cards = [
  {
    question: "What is HTML?",
    answer: "HyperText Markup Language for web page structure.",
    tags: ["css", "html", "js"],
    bookmarked: false,
  },
  {
    question: "What is CSS?",
    answer: "Cascading Style Sheets for web page design.",
    tags: ["sql", "grid", "flexbox"],
    bookmarked: true,
  },
  {
    question:
      "What is the difference between frontend and backend development?",
    answer:
      "Frontend - User interface development. Backend - Server-side development.",
    tags: ["css", "html", "js"],
    bookmarked: false,
  },
  {
    question: "What is responsive web design?",
    answer: "Design adapting to different devices and screen sizes.",
    tags: ["sql", "grid", "flexbox"],
    bookmarked: true,
  },
  {
    question: "What are JavaScript frameworks?",
    answer: "Pre-written libraries for easier web app development.",
    tags: ["sql", "grid", "flexbox"],
    bookmarked: true,
  },
];

cards.forEach((card) => {
  card.id = uuidv4();
});
