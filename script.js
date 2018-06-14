//Coding challenge 1

/*John and a friend invented a simple game where the player with the highest value of his height (in cm) plus 5 times his age wins
1. Create variables for the heights and ages of 2 friends and assign them some values
2. Caluculate their scores
3. Detect who wins and print the winner to the console. Include the store in the string that you output to the console. Dont forget that there can be a draw.
4.EXTRA: add a third player and now decide who wins. Hint: you will need the && operator to take the decision.
*/

var h1 = prompt("what is your height?");
var a1 = prompt("how old are you?");
var height1 = parseInt(h1);
var age1 = parseInt(a1);

var h2 = prompt("what is your height??");
var a2 = prompt("how old are you??");
var height2 = parseInt(h2);
var age2 = parseInt(a2);

var height3 = 160;
var age3 = 30;

var score1 = height1 + 5 * age1;
var score2 = height2 + 5 * age2;
var score3 = height3 + 5 * age3;

if (score1 > score2 && score1 > score3) {
    console.log("user 1 wins with " + score1);
} else if (score2 > score1 && score2 > score3) {
    console.log("user 2 wins " + score2);
} else if (score3 > score2 && score3 > score1){
    console.log("user 3 wins " + score3);
}
else {
    console.log("draw!");
}