	//set array for list of potential letters

	//assign varibale for comp. score & user score 
		var compScore = 0;
		var userScore = 0;
	
	// list of letters the game "knows"

		var vocab = ["a","b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x","y", "z"];
//testing with console.log
	//console.log(vocab.length);
	//console.log(vocab[0])

//the alerts are redundant they've been commented out
    var computerGuess = vocab[Math.floor(Math.random() * vocab.length)];
     document.onkeyup = function(event) {
     		var userGuess = event.key;
					//console.log(computerGuess);
     		for (var i = 0; i < computerGuess.length; i++) {
     					console.log(" the correct guess..." +computerGuess[i]); 
     				if (userGuess === computerGuess[i]) {
     					alert("you've guessed correctly!")
     					userScore++;
                              computerGuess = vocab[Math.floor(Math.random() * vocab.length)];
     // document.getElementById("cguesses").innerHTML = "correct answer:  "+ computerGuess[i];
     								//alert("computer wins"+ compScore);
     								//alert("user score" + userScore);
     					document.getElementById("score").innerHTML = ""+ userScore;
     				} 
     				else if (userGuess !== computerGuess[i]) {
     							alert("sorry, try again")
     							compScore++;
     							   // alert("computer wins"+ compScore);
     								//alert("user wins" + userScore);
     				}
     				else{

     				}
     document.getElementById("score").innerHTML = "your Score: "+ userScore;
     document.getElementById("cscore").innerHTML = "computer Score: "+ compScore;
     document.getElementById("guesses").innerHTML = "you've guessed:  "+ userGuess;
     var guessDiv = document.createElement("div");
     guessDiv.innerHTML = "you've guessed: " + userGuess;
     document.getElementById("guessedLetters").appendChild(guessDiv);
     								//console.log(compScore);
     								//console.log(computerGuess);
     								//console.log(userGuess);

     		} //end of for loop		
     		          		//update score at the end of the loop
     						//document.write(compScore);
    						//document.write(userScore);
     };// end of event


