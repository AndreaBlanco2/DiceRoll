const btn = document.querySelector('.btn');
const output = document.querySelector('.output');
const py1 = document.querySelector('#player1');
const py2 = document.querySelector('#player2');

//Event for button 
btn.addEventListener('click', () => {


    const rolls = [rollDice(6), rollDice(6)];
    console.log(rolls);

    //Show pic of dice - call fucntion 
    displayDice(rolls[0], py1);
    displayDice(rolls[1], py2);
    //result
    if (rolls[0] === rolls[1]) {
        result = "Draw";

    } else if (rolls[0] > rolls[1]) {
        result = "Player 1 wins";
    } else {
        result = "Player 2 wins";
    }
    output.innerHTML = result;


});

//function for random value of dice 
function rollDice(num) {
    const rollValue = Math.floor(Math.random() * num + 1);
    return rollValue;
}

// Show dice 
function displayDice(score,element) {

    switch (score) {
        case 1:
            diceImg = "one";
            break;
        case 2:
            diceImg = "two";
            break;
        case 3:
            diceImg = "three";
            break;
        case 4:
            diceImg = "four";
            break;
        case 5:
            diceImg = "five";
            break;
        case 6:
            diceImg = "six";
            break;
    }

    var diceHTML = '<img src="./img/' + diceImg + '.png" alt="Dice image"></img>';
    element.innerHTML = diceHTML;
}


