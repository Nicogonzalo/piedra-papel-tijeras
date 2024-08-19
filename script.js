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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();

    if(humanChoice === computerChoice){
        humanScore++ & computerScore++;
        console.log("Puntuación: ", humanScore, computerScore);
        return "Empate";
    } else if (
        (humanChoice === "piedra" && computerChoice === "tijeras") || 
        (humanChoice === "papel" && computerChoice === "piedra") || 
        (humanChoice === "tijeras" && computerChoice === "papel")){
        humanScore++;
        console.log("Puntuación de la persona: ", humanScore);    
        return "Ganas!";
    } else {
        computerScore++;
        console.log("Puntuación de la computadora: ", computerScore);
        return "Pierdes!";
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(playRound(humanSelection, computerSelection));