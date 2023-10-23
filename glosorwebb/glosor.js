
class Glosa {

    constructor(swe, eng) {
        this.swe = swe;
        this.eng = eng
    }
}

let test_time = false;
let gloslista = [];
int_glosnr = 0
const add_glosor_div = document.getElementById("add_glosor");
const sweglosa = document.getElementById("svensk_glosa");
const englosa = document.getElementById("engelsk_glosa");
const addbutt = document.getElementById("add_button");
addbutt.addEventListener("click", addGlosa);
const show_glosor = document.getElementById("show_glosor");
let input_glos_svar = document.getElementById("glos_svar");
let button_starta_glostest = document.getElementById("start_glostest");
button_starta_glostest.addEventListener("click", startaGlosTest);

//let id_print_glosa_div = document.getElementById("id_print_glosa_div")

let glos_test_div = document.getElementById("glos_test_div")
glos_test_div.style.display = "none"
b_id_sweglosa = document.getElementById("b_id_sweglosa")

function addGlosa() {

    console.log(`swe=${sweglosa.value}, eng=${englosa.value} `);
    let t_glosa = new Glosa(sweglosa.value, englosa.value);
    gloslista.push(t_glosa);

    sweglosa.value = "";
    englosa.value = "";

    sweglosa.focus();
    printGlosor();

}

function printGlosor() {

    show_glosor.innerHTML = "";
    let html_string = "";
    gloslista.forEach(element => {
        html_string += `${element.swe} = ${element.eng} <br>`

    });

    show_glosor.innerHTML = html_string;

}

function startaGlosTest() {

    //Tömmer allt i add_glosor div
    add_glosor_div.innerHTML = ""

    //skriver ut första glosan
    //gloslista.forEach(element => {
    //printGlosaForhor(element.swe, element.eng)

    if (gloslista.length > 0)
        visaGlosa()


    //});


    glos_test_div.style.display = "block"

}

function visaGlosa() {
    //om glosnr är mindre än antal glosor

    //let html_str = `<b id='p_id_sweglosa'>${gloslista[int_glosnr].swe}</b><b>:</b><input id='glos_svar' type='text' width='10' maxlength='50'></input>` 
    //id_print_glosa_div.innerHTML = html_str
    input_glos_svar.value = ""
    console.log(`Glosan= ${gloslista[int_glosnr].swe}`)
    b_id_sweglosa.innerHTML = gloslista[int_glosnr].swe


}

function printGlosaForhor(t_sweglosa, t_engglosa) {

    let html_str = `<b id='p_id_sweglosa'>${t_sweglosa}</b><b>:</b><input id='glos_svar' type='text' width='10' maxlength='50'></input>`
    id_print_glosa_div.innerHTML = html_str

    const t_input_svaret = document.getElementById("glos_svar")


    console.log(`Glosa=${t_sweglosa}, EngGlosa=${t_engglosa} och user_svaret=${t_input_svaret.value} `)

}

input_glos_svar.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        // Enter key was pressed
        // Add your code to handle the Enter key press here
        console.log(`glosNr: ${int_glosnr}`)
        int_glosnr++

        if (int_glosnr < gloslista.length) {
            visaGlosa()
        }
        else {
            console.log("slut på glosförhör")
        }
    }
});