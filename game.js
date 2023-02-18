function guessNumber(num) {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  const guesses = [];

  while (guesses.length < num) {
    const guess = prompt("Guess a number between 1 and 10");

    if (isNaN(guess)) {
      alert("Please enter a valid number.");
    } else if (guess < 1 || guess > 10) {
      alert("Please enter a number between 1 and 10.");
    } else if (guesses.includes(guess)) {
      alert("You already guessed that number. Please try again.");
    } else if (guess == randomNumber) {
      alert(
        `Congratulations! You guessed the number in ${
          guesses.length + 1
        } tries.`
      );
      return;
    } else {
      guesses.push(guess);
      alert(`Wrong! You have ${num - guesses.length} guesses left.`);
    }
  }

  alert(`Sorry, you ran out of guesses. The number was ${randomNumber}.`);
}

// Input and output statements for the first function call
const firstNum = 3;
console.log(`Guess a number between 1 and 10. You have ${firstNum} tries.`);
guessNumber(firstNum);

// Input and output statements for the second function call
const secondNum = 5;
console.log(`Guess a number between 1 and 10. You have ${secondNum} tries.`);
guessNumber(secondNum);

// Input and output statements for the third function call
const thirdNum = 2;
console.log(`Guess a number between 1 and 10. You have ${thirdNum} tries.`);
guessNumber(thirdNum);
