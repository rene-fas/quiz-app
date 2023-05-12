const questionForm = document.querySelector('[data-js="addQuestionForm"]');

questionForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Read form data
  const yourQuestion = document.querySelector('[data-js="yourQuestion"]').value;
  const yourAnswer = document.querySelector('[data-js="yourAnswer"]').value;
  const tags = document.querySelector('[data-js="tags"]').value.split(",");

  // Generate new card element
  const cardElement = document.createElement("section");
  cardElement.classList.add("card");
  cardElement.setAttribute("data-js", "card");
  cardElement.setAttribute("id", "card");

  const bookmarkElement = document.createElement("img");
  bookmarkElement.classList.add("card__bookmark");
  bookmarkElement.setAttribute("data-js", "card__bookmark");
  bookmarkElement.setAttribute("src", "./images/bookmark.svg");
  bookmarkElement.setAttribute("alt", "bookmark");
  cardElement.appendChild(bookmarkElement);

  const innerContentElement = document.createElement("section");
  innerContentElement.classList.add("card__innercontent");

  const questionElement = document.createElement("p");
  questionElement.classList.add("questionText");
  questionElement.setAttribute("data-js", "questionText");
  questionElement.textContent = yourQuestion;
  innerContentElement.appendChild(questionElement);

  const answerButtonElement = document.createElement("button");
  answerButtonElement.classList.add("card__buttonanswer");
  answerButtonElement.setAttribute("data-js", "card__buttonanswer");
  answerButtonElement.textContent = "Show answer";
  answerButtonElement.addEventListener("click", () => {
    answerTextElement.removeAttribute("hidden");
  });
  innerContentElement.appendChild(answerButtonElement);

  const answerTextElement = document.createElement("p");
  answerTextElement.classList.add("card__answertext");
  answerTextElement.setAttribute("data-js", "card__answertext");
  answerTextElement.setAttribute("hidden", "");
  answerTextElement.textContent = yourAnswer;
  innerContentElement.appendChild(answerTextElement);

  cardElement.appendChild(innerContentElement);

  const tagsElement = document.createElement("ul");
  tagsElement.classList.add("tags");
  tagsElement.setAttribute("data-js", "tags");
  for (const tag of tags) {
    const tagElement = document.createElement("li");
    tagElement.classList.add("li_tags");
    tagElement.textContent = "#" + tag.trim();
    tagsElement.appendChild(tagElement);
  }
  cardElement.appendChild(tagsElement);

  // Append the new card to the page
  const containerForm = document.querySelector(".containerform");
  containerForm.insertAdjacentElement("afterend", cardElement);

  // Reset the form
  questionForm.reset();
});
