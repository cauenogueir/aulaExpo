let pivo = true 

if(pivo){

    console.log("ola pessoal");
} else{

    console.log("bye bye bye");
}

/////////////////////////////////////////

let nome = "hetero top"                   // se tirar a variavel vira falso

if(nome){

    console.log("hetero top na area");
} else{

    console.log("hetero top nos deixou");
}

function testezinho (entrada) {

    if(entrada) {
        return console.log("sua entrada foi", entrada);
 
    }
    console.log("nada entrou");
}

testezinho(true)
testezinho(false)

/////////////////////////////////////////

,
function testezinho (entrada) {

    if(entrada) {
        return console.log("sua entrada foi", entrada);
 
    }
    if(entrada === "1"){
    return console.log("sua entrada foi", entrada);
} 
    console.log("nada entrou");
}

testezinho("João")
testezinho("")

////////////////////////////////////////////

let num = 1;         
let msg;

num === 1 ? msg = "O numero é 1" : msg = "O numero não é 1 ";

console.log(msg);

/////////////////////////////////////////////