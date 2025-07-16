const game = {
    secretNumber: Math.floor(Math.random() * 100) + 1,
    maxGuesses: 3,
    currentGuesses: 0,
  
    makeGuess(guess) {
      console.log(`Guess: ${guess}, Secret: ${this.secretNumber}, Attempt: ${this.currentGuesses + 1}`);
      if (this.currentGuesses >= this.maxGuesses) {
        return " No more guesses left! Game over.";
      }
  
      this.currentGuesses++;
  
      if (guess === this.secretNumber) {
        return "🎉 Congratulations! You guessed the secret number.";
      } else if (guess > this.secretNumber) {
        return "Too high! Try again.";
      } else {
        return "Too low! Try again.";
      }
    },
  
    resetGame() {
      this.secretNumber = Math.floor(Math.random() * 100) + 1;
      this.currentGuesses = 0;
      console.log("Game reset. New number:", this.secretNumber);
    }
  };
  
  const guessInput = document.getElementById('guessInput');
  const guessBtn = document.getElementById('guessBtn');
  const feedback = document.getElementById('feedback');
  const attemptsLeft = document.getElementById('attemptsLeft');
  const restartBtn = document.getElementById('restartBtn');
  
  guessBtn.addEventListener('click', () => {
    const guess = parseInt(guessInput.value);
    if (isNaN(guess) || guess < 1 || guess > 100) {
      feedback.textContent = "❗ Please enter a number between 1 and 100.";
      feedback.classList.add("text-danger");
      return;
    }
  
    const result = game.makeGuess(guess);
    feedback.textContent = result;
    feedback.classList.remove("text-danger");
  
    const remaining = game.maxGuesses - game.currentGuesses;
    attemptsLeft.textContent = `Attempts left: ${remaining}`;
  
    if (result.includes("Congratulations") || game.currentGuesses >= game.maxGuesses) {
      guessBtn.disabled = true;
      guessInput.disabled = true;
      restartBtn.classList.remove("d-none");
    }
  });
  
  restartBtn.addEventListener('click', () => {
    game.resetGame();
    feedback.textContent = "";
    attemptsLeft.textContent = "";
    guessInput.value = "";
    guessInput.disabled = false;
    guessBtn.disabled = false;
    restartBtn.classList.add("d-none");
  });
  