let arrayTeste = ['caue', 'caio', 'otton'];

console.log(arrayTeste[2]); //sempre começa do 0

let arrayTeste1 = ['caue', 'caio', 'otton']; //normal

console.log(arrayTeste1); // jeito mais facil
    arrayTeste1.forEach((elemento) =>{
        console.log(elemento)
    });

    arrayTeste1.forEach((elemento, index) =>{ // coloca posicao equivalente 
        console.log(index + '=' + elemento)
    });