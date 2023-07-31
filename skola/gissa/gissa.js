const slumptal = Math.floor(Math.random() * 9) + 1;
let antalgissningar = 0;

console.log("Slumptalet: " + slumptal)

function gissaTal(){
    console.log("click")

    let textfelt_gissa = document.getElementById("gissa").value;
    let gissa_int = Number(textfelt_gissa);
    let vinn = false;
    let p_svar = document.getElementById("p_svar");

    console.log("textfelt=" + textfelt_gissa)

}
