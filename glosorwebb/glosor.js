
class Glosa{

    constructor(swe, eng){
        this.swe = swe;
        this.eng = eng
    }
}

let gloslista = [];
const sweglosa = document.getElementById("svensk_glosa");
const englosa = document.getElementById("engelsk_glosa");
const addbutt = document.getElementById("add_button");
addbutt.addEventListener("click", addGlosa);
const show_glosor = document.getElementById("show_glosor");

function addGlosa(){

    console.log(`swe=${sweglosa.value}, eng=${englosa.value} `);

    let t_glosa = new Glosa(sweglosa.value, englosa.value);
    gloslista.push(t_glosa);

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