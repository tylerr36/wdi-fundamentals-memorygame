
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
//THESE ARE ARRAYS

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
};
//this is god knows fucking what

function flipCard(cardId) 
//THIS IS A FUNCTION. cardID is the parameter that the flipCard function accepts
{
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
};
	
flipCard(0);
flipCard(2);
//these are calls. the 0 ties to the first "queen" way at the top. 
//the 2 ties to the 1st "king" way at the top
checkForMatch();
//this runs all that shit ("queen" and "king") back through the 
//"function checkForMatch" thing. 


