
class Glosa {

    constructor(swe, eng) {
        this.swe = swe;
        this.eng = eng;
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

let button_starta_glostest = document.getElementById("start_glostest");
button_starta_glostest.addEventListener("click", startaGlosTest);

//let id_print_glosa_div = document.getElementById("id_print_glosa_div")

let glos_test_div = document.getElementById("glos_test_div");
glos_test_div.style.display = "none";
let input_glos_svar = document.getElementById("glos_svar");
let b_id_sweglosa = document.getElementById("b_id_sweglosa");
const button_svara = document.getElementById("button_svara");
button_svara.addEventListener("click", rattaGlosa);


const gloslistatest = [new Glosa("katt", "cat"),new Glosa("hund", "dog"),new Glosa("bil", "car")];

console.log(gloslistatest)

/*------------------------------------------------------------------
Dessa är för att lägga till glosor
---------------------------------------------------------------------*/
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
    gloslistatest.forEach(element => {
        html_string += `${element.swe} = ${element.eng} <br>`

    });

    show_glosor.innerHTML = html_string;

}


/*-------------------------------------------------------------------------
Startar glosförhöret
------------------------------------------------------------------------------*/

function startaGlosTest() {

    //Tömmer allt i add_glosor div
    add_glosor_div.innerHTML = ""

    //skriver ut första glosan
    //gloslista.forEach(element => {
    //printGlosaForhor(element.swe, element.eng)

    if (gloslistatest.length > 0)
        visaGlosa()


    //});


    glos_test_div.style.display = "block"

}

function visaGlosa() {
    //om glosnr är mindre än antal glosor

    //let html_str = `<b id='p_id_sweglosa'>${gloslista[int_glosnr].swe}</b><b>:</b><input id='glos_svar' type='text' width='10' maxlength='50'></input>` 
    //id_print_glosa_div.innerHTML = html_str
    input_glos_svar.value = ""
    //console.log(`Glosan= ${gloslistatest[int_glosnr].swe}`)
    b_id_sweglosa.innerHTML = gloslistatest[int_glosnr].swe


}

function printGlosaForhor(t_sweglosa, t_engglosa) {

    let html_str = `<b id='p_id_sweglosa'>${t_sweglosa}</b><b>:</b><input id='glos_svar' type='text' width='10' maxlength='50'></input>`
    id_print_glosa_div.innerHTML = html_str

    const t_input_svaret = document.getElementById("glos_svar")


    console.log(`Glosa=${t_sweglosa}, EngGlosa=${t_engglosa} och user_svaret=${t_input_svaret.value} `)

}

function rattaGlosa(){
    
    user_svar = input_glos_svar.value;
    console.log(`index: ${int_glosnr} usersvat= ${user_svar} och rätt svar= ${gloslistatest[int_glosnr].eng}`)
        

    int_glosnr++

        visaGlosa()

        if (int_glosnr < gloslistatest.length) {
            
            if (user_svar === gloslistatest[int_glosnr-1].eng)
                alert(`Rätt! Svaret är ${gloslistatest[int_glosnr-1].eng} `);
            
            else
                alert(`Fel! Svaret är ${gloslistatest[int_glosnr-1].eng} `);

            
        }
        else {
            console.log("slut på glosförhör")
        }


}

// Enter key was pressed
// Add your code to handle the Enter key press here
//NOT IN USE
/*input_glos_svar.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        
        user_svar = input_glos_svar.value;
        
        
        console.log(`index: ${int_glosnr} usersvat= ${user_svar} och rätt svar= ${gloslistatest[int_glosnr].eng}`)
        
        
        int_glosnr++

        visaGlosa()

        if (int_glosnr < gloslistatest.length) {
            
            if (user_svar === gloslistatest[int_glosnr-1].eng)
                alert(`Rätt! Svaret är ${gloslistatest[int_glosnr-1].eng} `);
            
            else
                alert(`Fel! Svaret är ${gloslistatest[int_glosnr-1].eng} `);

            
        }
        else {
            console.log("slut på glosförhör")
        }

        
    }
});*/