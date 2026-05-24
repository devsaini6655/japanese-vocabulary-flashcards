const state = {
  lessonId: 1,
  view: "cards",
  query: "",
  flashcardIndex: 0,
  flashcardFlipped: false,
  flashcardOrder: {},
  quizWord: null,
  quizAnswered: false,
  known: JSON.parse(localStorage.getItem("knownVocabulary") || "{}")
};

const lessonList = document.querySelector("#lessonList");
const lessonTag = document.querySelector("#lessonTag");
const lessonTitle = document.querySelector("#lessonTitle");
const lessonDescription = document.querySelector("#lessonDescription");
const wordCount = document.querySelector("#wordCount");
const knownCount = document.querySelector("#knownCount");
const wordGrid = document.querySelector("#wordGrid");
const searchInput = document.querySelector("#searchInput");
const progressList = document.querySelector("#progressList");
const flashcard = document.querySelector("#flashcard");
const flashcardProgress = document.querySelector("#flashcardProgress");
const flashcardSide = document.querySelector("#flashcardSide");
const flashcardMain = document.querySelector("#flashcardMain");
const flashcardSub = document.querySelector("#flashcardSub");
const previousCard = document.querySelector("#previousCard");
const nextCard = document.querySelector("#nextCard");
const markKnownCard = document.querySelector("#markKnownCard");
const shuffleCards = document.querySelector("#shuffleCards");
const resetCards = document.querySelector("#resetCards");
const quizPrompt = document.querySelector("#quizPrompt");
const quizRomaji = document.querySelector("#quizRomaji");
const quizOptions = document.querySelector("#quizOptions");
const quizFeedback = document.querySelector("#quizFeedback");
const nextQuestion = document.querySelector("#nextQuestion");

function getCurrentLesson() {
  return lessons.find((lesson) => lesson.id === state.lessonId) || lessons[0];
}

function getLessonOrder(lesson) {
  if (!state.flashcardOrder[lesson.id]) {
    state.flashcardOrder[lesson.id] = lesson.words.map((_, index) => index);
  }

  return state.flashcardOrder[lesson.id];
}

function wordKey(lessonId, word) {
  return `L${lessonId}:${word.kana}:${word.meaning}`;
}

function saveKnown() {
  localStorage.setItem("knownVocabulary", JSON.stringify(state.known));
}

function getFilteredWords(lesson) {
  const query = state.query.trim().toLowerCase();
  if (!query) return lesson.words;

  return lesson.words.filter((word) => {
    return [word.kana, word.romaji, word.meaning, word.type]
      .join(" ")
      .toLowerCase()
      .includes(query);
  });
}

function renderLessons() {
  lessonList.innerHTML = lessons.map((lesson) => {
    const knownWords = lesson.words.filter((word) => state.known[wordKey(lesson.id, word)]).length;
    const activeClass = lesson.id === state.lessonId ? " is-active" : "";

    return `
      <button class="lesson-button${activeClass}" type="button" data-lesson="${lesson.id}">
        <span class="lesson-number">L${lesson.id}</span>
        <span>
          <span class="lesson-name">${lesson.title}</span>
          <span class="lesson-meta">${knownWords}/${lesson.words.length} known</span>
        </span>
        <span class="lesson-meta">${lesson.words.length}</span>
      </button>
    `;
  }).join("");
}

function renderLessonHeader(lesson) {
  const knownWords = lesson.words.filter((word) => state.known[wordKey(lesson.id, word)]).length;

  lessonTag.textContent = `Lesson ${lesson.id}`;
  lessonTitle.textContent = lesson.title;
  lessonDescription.textContent = lesson.description;
  wordCount.textContent = lesson.words.length;
  knownCount.textContent = knownWords;
}

function renderCards(lesson) {
  const words = getFilteredWords(lesson);

  if (!words.length) {
    wordGrid.innerHTML = `<div class="empty-state">No vocabulary matches your search.</div>`;
    return;
  }

  wordGrid.innerHTML = words.map((word) => {
    const key = wordKey(lesson.id, word);
    const isKnown = Boolean(state.known[key]);

    return `
      <article class="word-card${isKnown ? " is-known" : ""}">
        <div class="word-top">
          <div>
            <div class="japanese">${word.kana}</div>
            <div class="romaji">${word.romaji}</div>
          </div>
          <button class="known-toggle${isKnown ? " is-known" : ""}" type="button" title="Mark known" data-word-key="${key}">
            ${isKnown ? "OK" : "+"}
          </button>
        </div>
        <p class="meaning">${word.meaning}</p>
        <div class="tag-row">
          <span class="tag">${word.type}</span>
          <span class="tag">L${lesson.id}</span>
        </div>
      </article>
    `;
  }).join("");
}

function renderFlashcard(lesson) {
  const order = getLessonOrder(lesson);
  if (!order.length) return;

  if (state.flashcardIndex >= order.length) {
    state.flashcardIndex = 0;
  }

  const word = lesson.words[order[state.flashcardIndex]];
  const key = wordKey(lesson.id, word);
  const isKnown = Boolean(state.known[key]);

  flashcard.classList.toggle("is-flipped", state.flashcardFlipped);
  flashcard.classList.toggle("is-known", isKnown);
  flashcardProgress.textContent = `Card ${state.flashcardIndex + 1} of ${order.length}`;
  flashcardSide.textContent = state.flashcardFlipped ? "Meaning" : "Japanese";
  flashcardMain.textContent = state.flashcardFlipped ? word.meaning : word.kana;
  flashcardSub.textContent = state.flashcardFlipped
    ? `${word.romaji} | ${word.type}`
    : "Tap to reveal meaning";
  markKnownCard.textContent = isKnown ? "Known" : "Mark Known";
  markKnownCard.classList.toggle("is-known", isKnown);
}

function renderProgress() {
  progressList.innerHTML = lessons.map((lesson) => {
    const knownWords = lesson.words.filter((word) => state.known[wordKey(lesson.id, word)]).length;
    const percent = Math.round((knownWords / lesson.words.length) * 100);

    return `
      <div class="progress-item">
        <strong>L${lesson.id} ${lesson.title}</strong>
        <div class="progress-track" aria-label="Lesson ${lesson.id} progress">
          <div class="progress-fill" style="width: ${percent}%"></div>
        </div>
        <span>${percent}%</span>
      </div>
    `;
  }).join("");
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function buildQuiz() {
  const lesson = getCurrentLesson();
  state.quizAnswered = false;
  state.quizWord = lesson.words[Math.floor(Math.random() * lesson.words.length)];

  const wrongOptions = shuffle(
    lessons
      .flatMap((item) => item.words)
      .filter((word) => word.meaning !== state.quizWord.meaning)
  ).slice(0, 3);

  const options = shuffle([state.quizWord, ...wrongOptions]);

  quizPrompt.textContent = state.quizWord.kana;
  quizRomaji.textContent = state.quizWord.romaji;
  quizFeedback.textContent = "Pick the correct meaning.";
  quizOptions.innerHTML = options.map((word) => {
    return `<button class="quiz-option" type="button" data-answer="${word.meaning}">${word.meaning}</button>`;
  }).join("");
}

function setView(view) {
  state.view = view;
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.view === view);
  });
  document.querySelectorAll(".view").forEach((panel) => {
    panel.classList.toggle("is-active", panel.id === `${view}View`);
  });

  if (view === "quiz") buildQuiz();
}

function render() {
  const lesson = getCurrentLesson();
  renderLessons();
  renderLessonHeader(lesson);
  renderFlashcard(lesson);
  renderCards(lesson);
  renderProgress();
}

function moveFlashcard(direction) {
  const lesson = getCurrentLesson();
  const order = getLessonOrder(lesson);
  state.flashcardIndex = (state.flashcardIndex + direction + order.length) % order.length;
  state.flashcardFlipped = false;
  renderFlashcard(lesson);
}

function toggleCurrentFlashcardKnown() {
  const lesson = getCurrentLesson();
  const order = getLessonOrder(lesson);
  const word = lesson.words[order[state.flashcardIndex]];
  const key = wordKey(lesson.id, word);

  state.known[key] = !state.known[key];
  if (!state.known[key]) delete state.known[key];
  saveKnown();
  render();
}

function resetFlashcards(shuffleDeck = false) {
  const lesson = getCurrentLesson();
  state.flashcardOrder[lesson.id] = shuffleDeck
    ? shuffle(lesson.words.map((_, index) => index))
    : lesson.words.map((_, index) => index);
  state.flashcardIndex = 0;
  state.flashcardFlipped = false;
  renderFlashcard(lesson);
}

lessonList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-lesson]");
  if (!button) return;

  state.lessonId = Number(button.dataset.lesson);
  state.flashcardIndex = 0;
  state.flashcardFlipped = false;
  render();
  if (state.view === "quiz") buildQuiz();
});

wordGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-word-key]");
  if (!button) return;

  const key = button.dataset.wordKey;
  state.known[key] = !state.known[key];
  if (!state.known[key]) delete state.known[key];
  saveKnown();
  render();
});

flashcard.addEventListener("click", () => {
  state.flashcardFlipped = !state.flashcardFlipped;
  renderFlashcard(getCurrentLesson());
});

previousCard.addEventListener("click", () => moveFlashcard(-1));
nextCard.addEventListener("click", () => moveFlashcard(1));
markKnownCard.addEventListener("click", toggleCurrentFlashcardKnown);
shuffleCards.addEventListener("click", () => resetFlashcards(true));
resetCards.addEventListener("click", () => resetFlashcards(false));

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderCards(getCurrentLesson());
});

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => setView(tab.dataset.view));
});

quizOptions.addEventListener("click", (event) => {
  const button = event.target.closest("[data-answer]");
  if (!button || state.quizAnswered) return;

  state.quizAnswered = true;
  const isCorrect = button.dataset.answer === state.quizWord.meaning;

  document.querySelectorAll(".quiz-option").forEach((option) => {
    if (option.dataset.answer === state.quizWord.meaning) {
      option.classList.add("is-correct");
    }
  });

  if (!isCorrect) button.classList.add("is-wrong");
  quizFeedback.textContent = isCorrect
    ? "Correct. Nice recall."
    : `Not this one. The answer is ${state.quizWord.meaning}.`;
});

nextQuestion.addEventListener("click", buildQuiz);

render();
