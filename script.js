/* 0) "strict mode" */
'use strict';

/* 1) Costanti DOM (riferimenti agli elementi HTML)*/
const genPswdBtn = document.getElementById("genpswd-btn")
const pswd1El = document.getElementById("pswd1-el");
const lenEl = document.getElementById("len-el");

/* 2) Stato (variabili che rappresentano i dati dell’app)*/
const characters = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
  "U","V","W","X","Y","Z",
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
  "u","v","w","x","y","z",
  "0","1","2","3","4","5","6","7","8","9",
  "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
  "{","[","]","}","\\","|",";",":","\"","'","<",">",",",".","?","/"
];

/* 3) Inizializzazione UI (sincronizzi la pagina con lo stato)*/
/*xxxXxxx.textContent = "yyy";*/

/* 4) Funzioni (logica riutilizzabile)*/

genPswdBtn.addEventListener("click",genPassword)

function getRandomChar() {
    let randomNumber = Math.floor(Math.random()*characters.length)
    return characters [randomNumber]
}

function genPassword(){
    const lenPswd = Number(lenEl.value);
    pswd1El.textContent=""
    for (let i = 0; i < lenPswd; i += 1) {
        pswd1El.textContent += getRandomChar()
    }
}

/* 5) Event listeners (collegano UI → funzioni)*/
/*zzzBtn.addEventListener("click", () => {
  xxx();
})*/


/* 6) Debug / log temporanei */
