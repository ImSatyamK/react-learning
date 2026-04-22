# Assembly: Endgame

A Wordle-inspired word guessing game where you fight to save programming from Assembly language. Guess the hidden word before you run out of lives — or every programming language gets wiped out one by one.

🔗 **Live Demo**: [https://react-learning-lydd.vercel.app/](https://react-learning-lydd.vercel.app/)

---

## How to Play

- A secret programming-related word is chosen at random
- Guess letters using the on-screen keyboard
- You have **8 lives** — each wrong guess eliminates a programming language
- Reveal the full word before all languages are gone to win
- If you lose, Assembly takes over... and the word is revealed

---

## Features

- Random word selected on every new game
- On-screen keyboard with color feedback — green for correct, red for wrong
- Language cards that get eliminated as you lose lives
- Win/lose result card shown at the end
- New Game button to reset and play again

---

## Tech Stack

- **React** — UI and state management
- **CSS** — custom styling with no UI libraries
- **Vite** — development and build tool

---

## Project Structure

```
src/
├── components/
│   └── Main.jsx        # core game component
├── data/
│   ├── languages.js    # programming language cards data
│   └── words.js        # word list
├── utils/
│   └── getRandomWord.js
├── App.jsx
└── main.jsx
```

---

## Getting Started

```bash
# clone the repo
git clone https://github.com/your-username/assembly-endgame.git

# install dependencies
cd assembly-endgame
npm install

# start the dev server
npm run dev
```

---

## What I Learned

Built this project to practice core React concepts including:

- `useState` for managing game state
- Derived state instead of redundant state variables
- Lifting state up and passing props
- Conditional rendering in JSX
- Immutable state updates with array spread
- Component structure and separation of concerns