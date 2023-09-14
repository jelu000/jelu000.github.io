let array_namn = [];


//Hämtar knapp
const addknapp = document.getElementById("add_butt");
const namntext = document.getElementById("tf_namn");

addknapp.addEventListener("click", addPerson)

function addPerson(){

    alert(`namn= ${namntext.value}`)

}