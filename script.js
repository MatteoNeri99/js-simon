const divContainer=document.querySelector("div.container");



let pEl;

const numeriRandom=[];

const arrayNumeriUtente=[];

const numeriIndovinati=[];

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


}, 30000)





setTimeout(function(){
    9

    while (arrayNumeriUtente.length < 5 ) {

        let numeroUtente=Number.parseInt(prompt("inserisci un numero che ricordi"),10);
    
        arrayNumeriUtente.push(numeroUtente);
    
        if (arrayNumeriUtente.includes(NaN)){
    
            arrayNumeriUtente.pop(numeroUtente);
        }
        
    }

    for (let i=0; i<numeriRandom.length; i++){

        for (let index=0; index<arrayNumeriUtente.length; index++){
    
            if (numeriRandom[i] === arrayNumeriUtente[index]){
        
                numeriIndovinati.push(numeriRandom[i]);
        
            }
        }
    }

    console.log("hai indovinato: " + numeriIndovinati.length)

    console.log("i numeri che hai indovinato sono: " + numeriIndovinati)
    
    

}, 31000)








