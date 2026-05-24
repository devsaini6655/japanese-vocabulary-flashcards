# Japanese Vocabulary Lessons L1-L25

A static vocabulary study website inspired by the lesson structure of *Minna no Nihongo* beginner lessons 1-25.

Open `index.html` in a browser to use it.

## Edit the vocabulary

Vocabulary lives in `vocabulary.js`. Each lesson has this shape:

```js
{
  id: 1,
  title: "Introductions",
  description: "Core words for first meetings and classroom basics.",
  words: [
    { kana: "わたし", romaji: "watashi", meaning: "I / me", type: "pronoun" }
  ]
}
```

You can add more words to any lesson by adding more objects to that lesson's `words` array.

## Features

- Lesson navigation from L1 to L25
- Lesson-wise flashcard revision with flip, previous, next, shuffle, and reset
- Add your own lesson vocabulary in the browser using pasted rows
- Search by Japanese, romaji, English meaning, or word type
- Vocabulary cards with known-word tracking
- Browser-saved progress
- Multiple-choice quiz mode per lesson

## Add your own vocabulary

Open a lesson and paste rows into the "Add more vocabulary" box:

```text
ことば, kotoba, word / language, noun
べんきょうします, benkyou shimasu, study, verb
```

Added words are saved in the browser and immediately appear in flashcards, quiz, search, and progress.
