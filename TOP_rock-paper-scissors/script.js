let playerScore = 0;
let computerScore = 0;
let playerAction = "";
let computerAction = "";

function getComputerAction() {
    let randNum = Math.random();
    let action = "";
    if (randNum <= 0.3) {
        action = "Rock";
    }
    else if (randNum <= 0.6) {
        action = "Paper";
    }
    else {
        action = "Scissor";
    }
    return action;
}

function getPlayerAction() {
    let btns = document.querySelector(".btns");
    btns.addEventListener("click", function (e) {
        switch (e.target.id) {
            case "paper":
                playerAction = "Paper";
                break;
            case "rock":
                playerAction = "Rock";
                break;
            case "scissor":
                playerAction = "Scissor";
                break;
        }
        if (playerAction) {
            start();
        }
    });
}

function displayComputerAction(action) {
    let currentAction = document.querySelector(".c-action");
    currentAction.textContent = action;
}

function displayPlayerAction(action) {
    let currentAction = document.querySelector(".p-action");
    currentAction.textContent = action;
}

function calculateResult(pAction , cAction) {
    if (cAction == "Press a Button" || pAction == "Press a Button") {
        return "Press a Button"
    } else if (cAction == pAction) {
        return "Its A Draw";
    } else {
        switch (pAction) {
            case "Rock":
                if (cAction == "Scissor") {
                    playerScore++;
                    return "You Won , Rock beats Scissors !!";
                } else {
                    computerScore++;
                    return "You Lose , Paper beats Rock !!";
                }
            case "Paper":
                if (cAction == "Rock") {
                    playerScore++;
                    return "You Won , Paper beats Rock !!";
                } else {
                    computerScore++;
                    return "You Lose , Scissors beats Paper !!";
                }
            case "Scissor":
                if (cAction == "Paper") {
                    playerScore++;
                    return "You Won , Scissors beats Paper !!";
                } else {
                    computerScore++;
                    return "You Lose , Rock beats Scissors !!";
                }
        }
    }
}

function displayResult(result){
    let currentResult = document.querySelector(".res");
    currentResult.textContent = result;
}

function displayComputerScore(score) {
    let currentScore = document.querySelector(".c-score");
    currentScore.textContent = score;
}

function displayPlayerScore(score) {
    let currentScore = document.querySelector(".p-score");
    currentScore.textContent = score;
}

function start(){
    computerAction = getComputerAction();
    displayComputerAction(computerAction);
    displayPlayerAction(playerAction);
    let result = calculateResult(playerAction,computerAction);
    displayResult(result);
    displayComputerScore(computerScore);
    displayPlayerScore(playerScore);
}

getPlayerAction();




