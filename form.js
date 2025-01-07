const form = document.getElementById("question-form");
const newCard = document.getElementById("new-cards-section");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputQuestion = document.getElementById("question").value.trim();
  const inputAnswer = document.getElementById("answer").value.trim();
  const inputTag = document.getElementById("tag").value.trim();

  // Validate inputs to check if all fields are filled in
  if (inputQuestion === " " || inputAnswer === " " || inputTag === " ") {
    alert("Please fill in all fields!");
    return;
  }

  // Create new card - the card DOM Structure//

  const card = document.createElement("section");
  card.classList.add("card");

  // Create elements for the card //

  const iconDiv = document.createElement("section");
  iconDiv.classList.add("icon");

  const bookmarkImg = document.createElement("img");
  bookmarkImg.src = "./assets/bookmark.svg";
  bookmarkImg.alt = "Bookmark Icon";
  iconDiv.appendChild(bookmarkImg);

  // Add question //
  const questionParagraph = document.createElement("p");
  questionParagraph.textContent = inputQuestion;

  // Add answer toggle button //
  const answerButton = document.createElement("button");
  answerButton.textContent = "Show Answer";

  // Add answer which is default hidden //
  const answerParagraph = document.createElement("p");
  answerParagraph.textContent = inputAnswer;
  answerParagraph.classList.add("hidden"); // Initially hidden

  // Add a tag //

  const tagSpan = document.createElement("span");
  tagSpan.textContent = inputTag;
  tagSpan.classList.add("tag");

  // Add toggle functionality for the answer button Toggle answer visibility on button click //
  answerButton.addEventListener("click", () => {
    const isHidden = answerParagraph.classList.toggle("hidden");
    answerButton.textContent = isHidden ? "Show Answer" : "Hide Answer";
  });

  // Assemble the card
  card.appendChild(iconDiv);
  card.appendChild(questionParagraph);
  card.appendChild(answerButton);
  card.appendChild(answerParagraph);
  card.appendChild(tagSpan);

  // Append the card to the "new cards" section below the form
  newCard.appendChild(card);

  // Clear the form fields
  form.reset();
});

// Form Field Text Counter //

const maxLength = 150;
const fields = [
  {
    field: document.getElementById("question"),
    counter: document.getElementById("question-counter"),
  },
  {
    field: document.getElementById("answer"),
    counter: document.getElementById("answer-counter"),
  },
];

// Function to update character count
function updateCounter(field, counter) {
  const remaining = maxLength - field.value.length;
  counter.textContent = `${remaining} characters left`;
}

// Attach input event listener to both fields
fields.forEach(({ field, counter }) => {
  field.setAttribute("maxlength", maxLength); // Set maxlength attribute
  updateCounter(field, counter); // Initialize counter on page load

  field.addEventListener("input", () => {
    updateCounter(field, counter);
  });
});
