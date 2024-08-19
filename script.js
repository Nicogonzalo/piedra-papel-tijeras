//Función para obtener un valor aleatorio de la pc.
function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 3);
    
    if(randomNum === 0){
        return "piedra";
    }else if (randomNum === 1){
        return "papel";
    }else {
        return "tijeras";
    }
}

//Función para obtener un valor del usuario.

function getHumanChoice(){
    let humanNum = prompt("Elija piedra papel o tijeras");


    while (humanNum === null || (humanNum !== "piedra" && humanNum !== "papel" && humanNum !== "tijeras")){
        alert("Valor incorrecto, por favor ingrese un valor aceptado");
        humanNum = prompt("Elija piedra, papel o tijeras");
    }

    if(humanNum === "piedra"){
        return "piedra";
    } else if (humanNum === "papel"){
        return "papel";
    } else {
        return "tijeras";
    }
}



//Declaración de variables para la puntuación de los jugadores


function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();

    if(humanChoice === computerChoice){
        return "Empate";
    } else if (
        (humanChoice === "piedra" && computerChoice === "tijeras") || 
        (humanChoice === "papel" && computerChoice === "piedra") || 
        (humanChoice === "tijeras" && computerChoice === "papel")){   
        return "Ganas!";
    } else {
        return "Pierdes!";
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


// Desarrollando la lógica para todo el juego.

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    for(let round = 0; round < 5; round++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(`Selección del jugador: ${humanSelection}`);
        console.log(`Selección de la computadora: ${computerSelection}`);

        const result = playRound(humanSelection, computerSelection);
        
        
        if (result === "Ganas!") {
            humanScore++;
        }else if (result === "Pierdes!"){
            computerScore++;
        }

        console.log(`Ronda ${round + 1}: ${result}`);
        console.log(`Puntuación actual - Persona: ${humanScore}, Computadora: ${computerScore}`);
    }

    

    if(humanScore > computerScore){
        console.log("Ganaste el juego!");
    }else if (humanScore < computerScore){
        console.log("Perdiste el juego!");
    }else {
        console.log("Empataste");
    }
}

playGame();