const antal_vinster = document.getElementById("antal_input")

let vinst_array = [
    "En hundvalp",
    "En kattunge",
    "Snowboard",
    "En röd Ferrari",
    "Wingfoil set",
    "Armada skidor",
    "Kawasaki KLX 230",
    "Resa till Afrika",
    "Biljett till Coldplay",
    "Gott och Blandat"]

function getVinster() {

    let int_antal_vinster = Number(antal_vinster.value)
    antal_vinster.value = ""
    const div_priser = document.getElementById("div_priser")

    if (int_antal_vinster < 4) {
        let str_pris_element = "<h3>Dina Priser:</h3>"

        for (i = 0; i < int_antal_vinster; i++) {
            let slumptal = Math.floor(Math.random() * vinst_array.length);
            //console.log(`slump= ${slumptal} array length = ${vinst_array.length} Vinst = ${vinst_array[slumptal]}`)
            str_pris_element += `${vinst_array[slumptal]}<br>`
        }
        div_priser.innerHTML = `${str_pris_element}`
        //console.log(`Vinster antal = ${int_antal_vinster}`)
    }
    else
        alert("Du har valt för många lotter!")


    antal_vinster.focus()
}