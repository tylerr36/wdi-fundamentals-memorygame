
var cards = ["queen", "queen", "king", "king"];
var cardInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[2];

cardInPlay.push(cardOne);
cardInPlay.push(cardTwo);

if (cardInPlay.length === 2) {
	if (cardInPlay[0] === cardInPlay[1])
		{alert("You found a match.")}
	else {alert("Sorry, try again.")}
}

console.log("User flipped" + " " + cardOne);
console.log("User flipped" + " " + cardTwo);
