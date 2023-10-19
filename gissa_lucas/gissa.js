const slumptal = Math.floor(Math.random() * 9) + 1
let antalgissningar = 0



//slump = Math.random()

console.log(`slump = ${slumptal}`)

function gissaTal() {
    
    let textfelt_gissa = document.getElementById("gissa").value
    let gissa_int = Number(textfelt_gissa)
    let vinn = false
    let p_svar = document.getElementById("p_svar")

    if (antalgissningar < 3) {

        if (slumptal === gissa_int){
            console.log(`Rätt svar`)
            vinn = true
            p_svar.innerHTML = "DU VANN!!!!"
        }
        else{
            console.log(`Fel svar!!!!`)

            if (antalgissningar === 2){
                p_svar.innerHTML = "Looser!!"
            }
            else{
                p_svar.innerHTML = `Fel svar!!! ${gissa_int}`
            }

            //Tömmer text fältet så använder sliupper sudda
            document.getElementById("gissa").value=""
            document.getElementById("gissa").focus()

        }

        antalgissningar++

    }

    else{

        p_svar.innerHTML=`Loser`
    }
}
