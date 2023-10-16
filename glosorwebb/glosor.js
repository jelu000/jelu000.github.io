
class Glosa{

    constructor(swe, eng){
        this.swe = swe;
        this.eng = eng
    }
}

let test_time=false;
let gloslista = [];
const add_glosor_div = document.getElementById("add_glosor");
const sweglosa = document.getElementById("svensk_glosa");
const englosa = document.getElementById("engelsk_glosa");
const addbutt = document.getElementById("add_button");
addbutt.addEventListener("click", addGlosa);
const show_glosor = document.getElementById("show_glosor");
let input_glos_svar = document.getElementById("glos_svar");
let button_starta_glostest = document.getElementById("start_glostest");
button_starta_glostest.addEventListener("click", startaGlosTest);

function addGlosa(){

    console.log(`swe=${sweglosa.value}, eng=${englosa.value} `);
    let t_glosa = new Glosa(sweglosa.value, englosa.value);
    gloslista.push(t_glosa);

    sweglosa.value = "";
    englosa.value = "";

    sweglosa.focus();
    printGlosor();

}

function printGlosor(){

    show_glosor.innerHTML = "";
    let html_string = "";
    gloslista.forEach(element => {
        html_string += `${element.swe} = ${element.eng} <br>`
        
    });

    show_glosor.innerHTML = html_string;

}

function startaGlosTest(){

    add_glosor_div.innerHTML = ""

}

input_glos_svar.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        // Enter key was pressed
        // Add your code to handle the Enter key press here
        console.log("Enter key pressed");
    }
});