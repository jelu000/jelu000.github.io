const svar_div = document.getElementById("svar_div")
const antal_vinster = document.getElementById("input_antal_vinster")

const vinster = [
    "Slott i Ryssland",
    "Biljett till en konsert av artisten du hatar mest",
    "Eiffeltornet",
    "Massage av Putin L Bozo",
    "10 miljoner i skadestånd",
    "Bli Swat Raidad",
    "Skäggig man",
    "Markrättighet till hela Siberia",
    "Ett hus i artktis",
    "12 spänn",
    "Gifta dig med en estetare (cough diezel cough)",
    "Snowboard",
    "Egen Filippa"
]

function slumpaClick() {

    let vinst = `<h3> Dina Vinster</h3>`
    let antalv = antal_vinster.value;
    let int_antalv = parseInt(antalv);
    if (int_antalv < 4) {
        for (i = 0; i < int_antalv; i++) {
            let slumptal = Math.floor(Math.random() * 13)
            let tvinst = vinster[slumptal];
            vinst += `<p>${tvinst}</p>`

        }
    }
    else
        alert("Ingen fusk!")

    svar_div.innerHTML = vinst;
}