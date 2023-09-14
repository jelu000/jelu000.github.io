//skapar array för namn
let array_namn = [];

//Hämtar elemment
const addknapp = document.getElementById("add_butt");
const namntext = document.getElementById("tf_namn");
const namnlistan = document.getElementById("namn_lista");
const p_svar = document.getElementById("p_svar");
const slumpa_butt = document.getElementById("slump_butt");

addknapp.addEventListener("click", addPerson);
slumpa_butt.addEventListener("click", slumpaNamn);

function addPerson(){
     
    //Lägger till namn till arrayen
    array_namn.push(namntext.value);

    //Tömmer list elementet på namn
    namnlistan.innerHTML = "";
    //Skriver ut arrayen med namn
    for (let i in array_namn) {
        console.log(array_namn[i]);
        namnlistan.innerHTML += `<li>${array_namn[i]}</li>`
    }
    //Tömmer textfältet för namn
    namntext.value = "";
}

function slumpaNamn(){
    let array_langd = array_namn.length;
    const slumptal = Math.floor(Math.random() * array_langd);

    p_svar.innerHTML = `VALT NAMN BLEV: ${array_namn[slumptal]}`
}

function rensaSidan(){
    array_namn = [];
    namntext.value = "";
    namnlistan.innerHTML = "";
    p_svar.innerHTML = "";
}