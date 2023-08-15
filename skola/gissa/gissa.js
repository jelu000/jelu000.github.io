const slumptal = Math.floor(Math.random() * 9) + 1;
let antalgissningar = 0;

console.log("Slumptalet: " + slumptal)

function gissaTal(){
    console.log("click")

    let textfelt_gissa = document.getElementById("gissa").value;
    let gissa_int = Number(textfelt_gissa);
    let vinn = false;
    let p_svar = document.getElementById("p_svar");


    if (antalgissningar < 3){

        if (slumptal === gissa_int){
            console.log("Rätt svar!");
            vinn = true;
            p_svar.innerHTML = "YOU ARE A WINNER!";
            antalgissningar = 3;
        }
        else {
            console.log("Fel svar!");

            if (antalgissningar === 2)
                p_svar.innerHTML= "Looser!"
            else
                p_svar.innerHTML=`Fel svar! ${textfelt_gissa}`

            document.getElementById("gissa").value="";
            document.getElementById("gissa").focus();

        }
        antalgissningar++;

    }
    else{
         p_svar.innerHTML=`Looser!`
    }

    console.log("textfelt=" + textfelt_gissa)

}


function myRelode(){

    document.getElementById("gissa").value="";
    location.reload();
}