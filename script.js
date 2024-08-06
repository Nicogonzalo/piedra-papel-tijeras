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



function getHumanChoice(){
    let humanNum = prompt("Elija piedra papel o tijeras");

    if(humanNum === "piedra"){
        return "piedra";
    } else if (humanNum === "papel"){
        return "papel";
    } else {
        return "tijeras";
    }
}

console.log(getHumanChoice());