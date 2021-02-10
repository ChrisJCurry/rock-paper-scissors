let rockWins = 0
let paperWins = 0
let scissorWins = 0

let currentGamesPlayed = 0
let totalWins = 0
let totalLosses = 0
let totalTies = 0


function startGame() {
    document.getElementById("game-content").classList.remove("hidden")
    document.getElementById("play-btn-row").classList.add("hidden")
    document.getElementById("stop-game-btn").classList.remove("hidden")
}

function stopGame() {
    document.getElementById("game-content").classList.add("hidden")
    document.getElementById("play-btn-row").classList.remove("hidden")
    document.getElementById("stop-game-btn").classList.add("hidden")
    resetStats()
}

function resetStats() {
    rockWins = 0
    paperWins = 0
    scissorWins = 0
    currentGamesPlayed = 0
    totalWins = 0
    totalLosses = 0
    totalTies = 0
    drawResults("")
    drawComputerPick()
    drawUserPick()
}

function userChoice() {
    let userNum
    let target = event.target
    //console.log("test")
    if(target != null) {
        //@ts-ignore
        if(target.id == "rock-btn") {
            userNum = 1
            //@ts-ignore
        } else if(target.id == "paper-btn") {
            userNum = 2
            //@ts-ignore
        } else if(target.id == "scissors-btn") {
            userNum = 3
        }
    }
    
    calculateWinner(userNum, getComputerPick())
    //document.getElementById("")
}

function calculateWinner(userPick, compPick) {
    let uPick = userPick
    drawUserPick(uPick)
    let cPick = compPick
    drawComputerPick(cPick)
    let currentWin = 0
    let results = ""
    if(uPick == cPick) {
        results = "Tie!"
        totalTies++
    } else if(uPick == 1 && cPick == 2) {
        results = "You Win!"
        rockWins++
        totalWins++
    } else if (uPick == 1 && cPick == 3) {
        results = "You Lose!"
        totalLosses++
    } else if(uPick == 2 && cPick == 1) {
        results = "You Lose!"
        totalLosses++
    } else if(uPick == 2 && cPick == 3) {
        results = "You Win!"
        paperWins++
        totalWins++
    } else if(uPick == 3 && cPick == 1) {
        results = "You Lose!"
        totalLosses++
    } else if(uPick == 3 && cPick == 2) {
        results = "You Win!"
        scissorWins++
        totalWins++
    }
    currentGamesPlayed++
    drawResults(results)
}

function getComputerPick() {
    return (Math.floor(Math.random() * 3) + 1)
}

function drawComputerPick(compPick) {
    let compPickText = document.getElementById("compPick")
    switch(compPick) {
        case 1:
            compPickText.innerText = "Rock"
            break;
        case 2:
            compPickText.innerText = "Paper"
            break;
        case 3:
            compPickText.innerText = "Scissors"
            break;
        default:
            compPickText.innerText = "-"
    }
}

function drawUserPick(userPick) {
    let userPickText = document.getElementById("userPick")
    switch(userPick) {
        case 1:
            userPickText.innerText = "Rock"
            break;
        case 2:
            userPickText.innerText = "Paper"
            break;
        case 3:
            userPickText.innerText = "Scissors"
            break;
        default:
            userPickText.innerText = "-"
    }
}
function drawResults(results) {
    let resultText = document.getElementById("results")
    resultText.innerText = results

    let gamesPlayedText = document.getElementById("current-games-played")
    gamesPlayedText.innerText = `${currentGamesPlayed}`

    let rockWinsText = document.getElementById("rock-wins")
    rockWinsText.innerText = `${rockWins}`
    let paperWinsText = document.getElementById("paper-wins")
    paperWinsText.innerText = `${paperWins}`
    let scissorWinsText = document.getElementById("scissor-wins")
    scissorWinsText.innerText = `${scissorWins}`

    let totalWinsText = document.getElementById("total-wins")
    totalWinsText.innerText = `${totalWins}`
    let totalLossesText = document.getElementById("total-losses")
    totalLossesText.innerText = `${totalLosses}`
    let totalTiesText = document.getElementById("total-ties")
    totalTiesText.innerText = `${totalTies}`
}