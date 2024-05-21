const divContainer=document.querySelector("div.container");

console.log(divContainer);

let pEl;

const numeriRandom=[];

function numeroRandomicoEl (elemento,container, array){

    while (array.length < 5){

        let numeroRandom=Math.floor(Math.random() * 10);

        elemento=document.createElement("p");
       
        container.appendChild(elemento);

        if (array.includes(numeroRandom) === false ){

            elemento.append(numeroRandom);

            array.push(numeroRandom);
        }
    }

};

numeroRandomicoEl(pEl,divContainer,numeriRandom)

setTimeout (function (){

    divContainer.innerHTML="";


},30000)

const arrayNumeriUtente=[];



while (arrayNumeriUtente.length < 5 ) {

    let numeroUtente=Number.parseInt(prompt("inserisci un numero che ricordi"),10);

    arrayNumeriUtente.push(numeroUtente);

    if (arrayNumeriUtente.includes(NaN)){

        arrayNumeriUtente.pop(numeroUtente);
    }
    
}

console.log(arrayNumeriUtente)

