let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const results_p = document.querySelector(".results > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function winner(userChoice, computerChoice) {
    console.log("User Wins.");
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore; 
    results_p.innerHTML = userChoice + " beats " + computerChoice +"... you win!";
}

function loser(userChoice, computerChoice) {
    console.log("User Loses.")
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore; 
    results_p.innerHTML = computerChoice + " beats " + userChoice +"... you lose human!";
}

function draw(userChoice, computerChoice) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore; 
    results_p.innerHTML = "draw...booooo!!!!";
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    console.log("Computer Choice " + computerChoice);
    
    switch (userChoice + computerChoice) {
        case "paperrock":
        case "rockscissors":
        case "scissorspaper":
            winner(userChoice, computerChoice);
            break;

        case "rockpaper":
        case "scissorsrock":
        case "paperscissors":
            loser(userChoice, computerChoice);
            break;

        case "paperpaper":
        case "scissorsscissors":
        case "rockrock":
            draw(userChoice, computerChoice);
            console.log("Draw.");
            break;
        
    
    }
    
}

function main() {

    rock_div.addEventListener('click', function() {
        console.log("hey you clicked on rock");
        game("rock");
    })

    paper_div.addEventListener('click', function() {
        console.log("hey you clicked on paper");
        game("paper");
    })

    scissors_div.addEventListener('click', function() {
        console.log("hey you clicked on scissors");
        game("scissors");
    })
}

main()