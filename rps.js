const options = ['rock', 'paper', 'scissors'];
//declaring options
function getComputerChoice() {
    //creating a function named getComputerChoice
    const choice = options[Math.floor(Math.random() * options.length)];
         // math.random returns a number between zero and one, but we have three elements, so we multiply by the number of elements
        // IE, math.random returns 0.5, then multiplies that number by 3, which will return 1.5 
        //but we don't have an element 1.5, so we need to use math.floor
        //math.floor rounds a number down to the nearest integer
    return choice;
    //this will return the computerchoice when it is called on
}

function playRound(playerSelection, computerSelection)

getComputerChoice();
//calling "getComputerChoice" 







