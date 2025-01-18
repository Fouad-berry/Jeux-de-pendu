const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const hangmanImage = document.querySelector(".hangman-box img");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = gameModal.querySelector("button");

let currentWord, correctLetters, wrongGuessCount;
const maxGuesses = 6;

const resetGame = () => {
  correctLetters = [];
  wrongGuessCount = 0;
  hangmanImage.src = "images/hangman-0.svg";
  guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

  wordDisplay.innerHTML = currentWord
    .split("")
    .map(() => `<li class="letter"></li>`)
    .join("");

  keyboardDiv
    .querySelectorAll("button")
    .forEach((btn) => (btn.disabled = false));

  gameModal.classList.remove("show");
};

const getRandomWord = () => {
  let randomEntry = wordList[Math.floor(Math.random() * wordList.length)];
  currentWord = randomEntry.word || randomEntry.mot;
  if (!currentWord) {
    console.error("Le mot est indéfini. Vérifiez votre wordList.");
    return;
  }
  document.querySelector(".hint-text b").innerText = randomEntry.hint;
  resetGame();
};

const gameOver = (isVictory) => {
  const modalText = isVictory ? `Vous avez trouvé le mot :` : "Le mot correct était :";

  gameModal.querySelector("img").src = `images/${isVictory ? "victory" : "lost"}.gif`;
  gameModal.querySelector("h4").innerText = isVictory ? "Félicitations!" : "Jeu terminé!";
  gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
  gameModal.classList.add("show");
};

const initGame = (button, clickedLetter) => {
  const normalizeLetter = letter =>
    letter.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  const lowerClickedLetter = normalizeLetter(clickedLetter);
  let letterFound = false;
  let letterElems = wordDisplay.querySelectorAll("li");

  for (let i = 0; i < currentWord.length; i++) {
    if (currentWord[i] === " ") {
      letterElems[i].innerText = " ";
      letterElems[i].classList.add("guessed");
      continue;
    }

    const normalizedCurrentLetter = normalizeLetter(currentWord[i]);
    if (
      normalizedCurrentLetter === lowerClickedLetter &&
      !letterElems[i].classList.contains("guessed")
    ) {
      letterElems[i].innerText = currentWord[i];
      letterElems[i].classList.add("guessed");
      correctLetters.push(currentWord[i]);

      letterFound = true;
      break;
    }
  }

  if (letterFound) {
    button.classList.add("correct");

    let stillHidden = false;
    for (let i = 0; i < currentWord.length; i++) {
      if (currentWord[i] === " ") {
        continue;
      }
      const normalizedCurrentLetter = normalizeLetter(currentWord[i]);
      if (
        normalizedCurrentLetter === lowerClickedLetter &&
        !letterElems[i].classList.contains("guessed")
      ) {
        stillHidden = true;
        break;
      }
    }
    if (!stillHidden) {
      button.disabled = true;
    }
  } else {
    button.classList.add("wrong");
    button.disabled = true;
    wrongGuessCount++;
    hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`;
  }

  guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

  if (wrongGuessCount === maxGuesses) return gameOver(false);

  let revealedLettersCount = document.querySelectorAll(".word-display .guessed").length;
  if (revealedLettersCount === currentWord.length) {
    return gameOver(true);
  }
};

for (let i = 97; i <= 122; i++) {
  const button = document.createElement("button");
  button.innerText = String.fromCharCode(i);
  keyboardDiv.appendChild(button);
  button.addEventListener("click", (e) =>
    initGame(e.target, String.fromCharCode(i))
  );
}

playAgainBtn.addEventListener("click", () => {
  gameModal.classList.remove("show");
  getRandomWord();
});

getRandomWord();
