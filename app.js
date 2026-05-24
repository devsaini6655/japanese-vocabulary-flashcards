const state = {
  lessonId: 1,
  view: "cards",
  query: "",
  flashcardIndex: 0,
  flashcardFlipped: false,
  flashcardOrder: {},
  quizWord: null,
  quizAnswered: false,
  known: JSON.parse(localStorage.getItem("knownVocabulary") || "{}"),
  customWords: JSON.parse(localStorage.getItem("customVocabulary") || "{}")
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
const customWordsInput = document.querySelector("#customWordsInput");
const addCustomWords = document.querySelector("#addCustomWords");
const clearCustomWords = document.querySelector("#clearCustomWords");
const customWordsStatus = document.querySelector("#customWordsStatus");
const bulkWordsInput = document.querySelector("#bulkWordsInput");
const bulkAddWords = document.querySelector("#bulkAddWords");
const bulkWordsStatus = document.querySelector("#bulkWordsStatus");
const quizPrompt = document.querySelector("#quizPrompt");
const quizRomaji = document.querySelector("#quizRomaji");
const quizOptions = document.querySelector("#quizOptions");
const quizFeedback = document.querySelector("#quizFeedback");
const nextQuestion = document.querySelector("#nextQuestion");

function getCurrentLesson() {
  return lessons.find((lesson) => lesson.id === state.lessonId) || lessons[0];
}

function getLessonWords(lesson) {
  return [...lesson.words, ...(state.customWords[lesson.id] || [])];
}

function getLessonOrder(lesson) {
  if (!state.flashcardOrder[lesson.id]) {
    state.flashcardOrder[lesson.id] = getLessonWords(lesson).map((_, index) => index);
  }

  return state.flashcardOrder[lesson.id];
}

function wordKey(lessonId, word) {
  return `L${lessonId}:${word.kana}:${word.meaning}`;
}

function saveKnown() {
  localStorage.setItem("knownVocabulary", JSON.stringify(state.known));
}

function saveCustomWords() {
  localStorage.setItem("customVocabulary", JSON.stringify(state.customWords));
}

function getFilteredWords(lesson) {
  const lessonWords = getLessonWords(lesson);
  const query = state.query.trim().toLowerCase();
  if (!query) return lessonWords;

  return lessonWords.filter((word) => {
    return [word.kana, word.romaji, word.meaning, word.type]
      .join(" ")
      .toLowerCase()
      .includes(query);
  });
}

function renderLessons() {
  lessonList.innerHTML = lessons.map((lesson) => {
    const lessonWords = getLessonWords(lesson);
    const knownWords = lessonWords.filter((word) => state.known[wordKey(lesson.id, word)]).length;
    const activeClass = lesson.id === state.lessonId ? " is-active" : "";

    return `
      <button class="lesson-button${activeClass}" type="button" data-lesson="${lesson.id}">
        <span class="lesson-number">L${lesson.id}</span>
        <span>
          <span class="lesson-name">${lesson.title}</span>
          <span class="lesson-meta">${knownWords}/${lessonWords.length} known</span>
        </span>
        <span class="lesson-meta">${lessonWords.length}</span>
      </button>
    `;
  }).join("");
}

function renderLessonHeader(lesson) {
  const lessonWords = getLessonWords(lesson);
  const knownWords = lessonWords.filter((word) => state.known[wordKey(lesson.id, word)]).length;

  lessonTag.textContent = `Lesson ${lesson.id}`;
  lessonTitle.textContent = lesson.title;
  lessonDescription.textContent = lesson.description;
  wordCount.textContent = lessonWords.length;
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
  const lessonWords = getLessonWords(lesson);

  if (state.flashcardIndex >= order.length) {
    state.flashcardIndex = 0;
  }

  const word = lessonWords[order[state.flashcardIndex]];
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
    const lessonWords = getLessonWords(lesson);
    const knownWords = lessonWords.filter((word) => state.known[wordKey(lesson.id, word)]).length;
    const percent = Math.round((knownWords / lessonWords.length) * 100);

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
  const lessonWords = getLessonWords(lesson);
  state.quizAnswered = false;
  state.quizWord = lessonWords[Math.floor(Math.random() * lessonWords.length)];

  const wrongOptions = shuffle(
    lessons
      .flatMap((item) => getLessonWords(item))
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
  const word = getLessonWords(lesson)[order[state.flashcardIndex]];
  const key = wordKey(lesson.id, word);

  state.known[key] = !state.known[key];
  if (!state.known[key]) delete state.known[key];
  saveKnown();
  render();
}

function resetFlashcards(shuffleDeck = false) {
  const lesson = getCurrentLesson();
  const lessonWords = getLessonWords(lesson);
  state.flashcardOrder[lesson.id] = shuffleDeck
    ? shuffle(lessonWords.map((_, index) => index))
    : lessonWords.map((_, index) => index);
  state.flashcardIndex = 0;
  state.flashcardFlipped = false;
  renderFlashcard(lesson);
}

function parseCustomWords(text) {
  return text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => line.split(/\t|,/).map((part) => part.trim()))
    .filter((parts) => parts.length >= 3)
    .map(([kana, romaji, meaning, type = "custom"]) => ({ kana, romaji, meaning, type }));
}

function parseBulkWords(text) {
  const grouped = {};
  let skipped = 0;

  text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .forEach((line) => {
      const parts = line.split(/\t|,/).map((part) => part.trim());
      const lessonId = Number(parts[0]?.replace(/^L/i, ""));

      if (!Number.isInteger(lessonId) || lessonId < 1 || lessonId > 25 || parts.length < 4) {
        skipped += 1;
        return;
      }

      const [, kana, romaji, meaning, type = "custom"] = parts;
      grouped[lessonId] = [...(grouped[lessonId] || []), { kana, romaji, meaning, type }];
    });

  return { grouped, skipped };
}

function refreshLessonOrder() {
  delete state.flashcardOrder[state.lessonId];
  state.flashcardIndex = 0;
  state.flashcardFlipped = false;
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

addCustomWords.addEventListener("click", () => {
  const words = parseCustomWords(customWordsInput.value);

  if (!words.length) {
    customWordsStatus.textContent = "No valid rows found. Use: Japanese, romaji, meaning, type.";
    return;
  }

  const lessonId = String(state.lessonId);
  state.customWords[lessonId] = [...(state.customWords[lessonId] || []), ...words];
  saveCustomWords();
  customWordsInput.value = "";
  customWordsStatus.textContent = `Added ${words.length} word${words.length === 1 ? "" : "s"} to Lesson ${state.lessonId}.`;
  refreshLessonOrder();
  render();
});

clearCustomWords.addEventListener("click", () => {
  const lessonId = String(state.lessonId);
  const count = (state.customWords[lessonId] || []).length;

  if (!count) {
    customWordsStatus.textContent = `Lesson ${state.lessonId} has no added words.`;
    return;
  }

  delete state.customWords[lessonId];
  saveCustomWords();
  customWordsStatus.textContent = `Cleared ${count} added word${count === 1 ? "" : "s"} from Lesson ${state.lessonId}.`;
  refreshLessonOrder();
  render();
});

bulkAddWords.addEventListener("click", () => {
  const { grouped, skipped } = parseBulkWords(bulkWordsInput.value);
  const lessonIds = Object.keys(grouped);
  const addedCount = lessonIds.reduce((sum, lessonId) => sum + grouped[lessonId].length, 0);

  if (!addedCount) {
    bulkWordsStatus.textContent = "No valid rows found. Use: lesson, Japanese, romaji, meaning, type.";
    return;
  }

  lessonIds.forEach((lessonId) => {
    state.customWords[lessonId] = [...(state.customWords[lessonId] || []), ...grouped[lessonId]];
    delete state.flashcardOrder[lessonId];
  });

  saveCustomWords();
  bulkWordsInput.value = "";
  refreshLessonOrder();
  bulkWordsStatus.textContent = `Imported ${addedCount} word${addedCount === 1 ? "" : "s"} across ${lessonIds.length} lesson${lessonIds.length === 1 ? "" : "s"}${skipped ? `; skipped ${skipped} invalid row${skipped === 1 ? "" : "s"}.` : "."}`;
  render();
});

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
