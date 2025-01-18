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
  const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
  currentWord = word;
  document.querySelector(".hint-text b").innerText = hint;
  resetGame();
};

const gameOver = (isVictory) => {
  const modalText = isVictory ? `Vous avez trouvé le mot :` : "Le mot correct était :";

  gameModal.querySelector("img").src = `images/${
    isVictory ? "victory" : "lost"
  }.gif`;
  
  gameModal.querySelector("h4").innerText = isVictory
    ? "Félicitations!"
    : "Jeu terminé!";

  gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
  gameModal.classList.add("show");
};

const initGame = (button, clickedLetter) => {
    // Fonction utilitaire pour normaliser une lettre (sans accents) et la mettre en minuscule
    const normalizeLetter = letter =>
      letter.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  
    // On normalise la lettre cliquée
    const lowerClickedLetter = normalizeLetter(clickedLetter);
    let letterFound = false;
    let letterElems = wordDisplay.querySelectorAll("li");
  
    // Parcours du mot à deviner
    for (let i = 0; i < currentWord.length; i++) {
      // Si le caractère est un espace, on l'affiche et on le marque comme déjà révélé
      if (currentWord[i] === " ") {
        letterElems[i].innerText = " ";
        letterElems[i].classList.add("guessed");
        continue;
      }
  
      // Normalisation de la lettre actuelle du mot (pour ignorer les accents)
      const normalizedCurrentLetter = normalizeLetter(currentWord[i]);
  
      // Vérification : si la lettre (normalisée) correspond à celle cliquée
      // et que l'élément correspondant n'est pas déjà révélé
      if (
        normalizedCurrentLetter === lowerClickedLetter &&
        !letterElems[i].classList.contains("guessed")
      ) {
        // On réaffiche la lettre originale (avec accent si besoin)
        letterElems[i].innerText = currentWord[i];
        letterElems[i].classList.add("guessed");
        correctLetters.push(currentWord[i]);
  
        letterFound = true;
        break; // On s'arrête après la première occurrence non dévoilée trouvée
      }
    }
  
    if (letterFound) {
      button.classList.add("correct");
  
      let stillHidden = false;
      for (let i = 0; i < currentWord.length; i++) {
        // On ignore de nouveau les espaces
        if (currentWord[i] === " ") {
          continue;
        }
        // Normalisation de la lettre du mot
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
      // Si aucune occurrence n'a été trouvée, c'est une erreur
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

getRandomWord();
playAgainBtn.addEventListener("click", getRandomWord);