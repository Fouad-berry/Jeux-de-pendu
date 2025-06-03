// Cache des sélecteurs DOM
const elements = {
  wordDisplay: document.querySelector(".word-display"),
  guessesText: document.querySelector(".guesses-text b"),
  keyboardDiv: document.querySelector(".keyboard"),
  hangmanImage: document.querySelector(".hangman-box img"),
  gameModal: document.querySelector(".game-modal"),
  hintText: document.querySelector(".hint-text b"),
  playAgainBtn: document.querySelector(".game-modal button"),
  modalImage: document.querySelector(".game-modal img"),
  modalTitle: document.querySelector(".game-modal h4"),
  modalText: document.querySelector(".game-modal p")
};

// Configuration du jeu
const gameConfig = {
  maxGuesses: 6,
  keyboard: {
    start: 97, // Code ASCII pour 'a'
    end: 122   // Code ASCII pour 'z'
  }
};

// État du jeu
let gameState = {
  currentWord: '',
  correctLetters: new Set(),
  wrongGuessCount: 0
};

// Fonction utilitaire pour normaliser les lettres (enlever les accents)
const normalizeLetter = letter => letter.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

const resetGame = () => {
  gameState.correctLetters.clear();
  gameState.wrongGuessCount = 0;
  elements.hangmanImage.src = "images/hangman-0.svg";
  elements.guessesText.innerText = `${gameState.wrongGuessCount} / ${gameConfig.maxGuesses}`;

  elements.wordDisplay.innerHTML = gameState.currentWord
    .split("")
    .map(char => `<li class="letter">${char === ' ' ? ' ' : ''}</li>`)
    .join("");

  elements.keyboardDiv
    .querySelectorAll("button")
    .forEach(btn => {
      btn.disabled = false;
      btn.className = '';
    });

  elements.gameModal.classList.remove("show");
};

const getRandomWord = () => {
  const randomEntry = wordList[Math.floor(Math.random() * wordList.length)];
  gameState.currentWord = randomEntry.word || randomEntry.mot;
  
  if (!gameState.currentWord) {
    console.error("Le mot est indéfini. Vérifiez votre wordList.");
    return;
  }
  
  elements.hintText.innerText = randomEntry.hint;
  resetGame();
};

const gameOver = (isVictory) => {
  const modalText = isVictory ? "Vous avez trouvé le mot :" : "Le mot correct était :";
  
  elements.modalImage.src = `images/${isVictory ? "victory" : "lost"}.gif`;
  elements.modalTitle.innerText = isVictory ? "Félicitations!" : "Jeu terminé!";
  elements.modalText.innerHTML = `${modalText} <b>${gameState.currentWord}</b>`;
  elements.gameModal.classList.add("show");
};

const checkWinCondition = () => {
  const letterElems = elements.wordDisplay.querySelectorAll("li");
  return Array.from(letterElems).every(elem => 
    elem.classList.contains("guessed") || elem.textContent === " "
  );
};

const initGame = (button, clickedLetter) => {
  const normalizedClickedLetter = normalizeLetter(clickedLetter);
  const letterElems = elements.wordDisplay.querySelectorAll("li");
  let letterFound = false;

  // Vérifier toutes les occurrences de la lettre dans le mot
  gameState.currentWord.split('').forEach((currentLetter, index) => {
    if (currentLetter === " ") {
      letterElems[index].innerText = " ";
      letterElems[index].classList.add("guessed");
      return;
    }

    if (normalizeLetter(currentLetter) === normalizedClickedLetter) {
      letterElems[index].innerText = currentLetter;
      letterElems[index].classList.add("guessed");
      letterFound = true;
    }
  });

  if (letterFound) {
    button.classList.add("correct");
    gameState.correctLetters.add(normalizedClickedLetter);
  } else {
    button.classList.add("wrong");
    button.disabled = true;
    gameState.wrongGuessCount++;
    elements.hangmanImage.src = `images/hangman-${gameState.wrongGuessCount}.svg`;
  }

  elements.guessesText.innerText = `${gameState.wrongGuessCount} / ${gameConfig.maxGuesses}`;

  if (gameState.wrongGuessCount === gameConfig.maxGuesses) {
    return gameOver(false);
  }

  if (checkWinCondition()) {
    return gameOver(true);
  }
};

// Création du clavier
const createKeyboard = () => {
  const fragment = document.createDocumentFragment();
  
  for (let i = gameConfig.keyboard.start; i <= gameConfig.keyboard.end; i++) {
    const button = document.createElement("button");
    const letter = String.fromCharCode(i);
    button.innerText = letter;
    button.addEventListener("click", e => initGame(e.target, letter));
    fragment.appendChild(button);
  }
  
  elements.keyboardDiv.appendChild(fragment);
};

// Initialisation des événements
elements.playAgainBtn.addEventListener("click", getRandomWord);

// Démarrage du jeu
createKeyboard();
getRandomWord();
