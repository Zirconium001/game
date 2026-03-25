        let numberToGuess = Math.floor(Math.random() * 100) + 1;
        let attempts = 0;

        function checkGuess() {
            let userGuess = document.getElementById("userGuess").value;
            attempts++;
            document.getElementById("attempts").textContent = attempts;
            let feedback = '';

            if (userGuess < numberToGuess) {
                feedback = "Oops! Too low, try again.";
            } else if (userGuess > numberToGuess) {
                feedback = "Oops! Too high, try again.";
            } else {
                feedback = `🎉 Congratulations! You've guessed the number in ${attempts} attempts.`;
            }

            document.getElementById("feedback").textContent = feedback;
        }
