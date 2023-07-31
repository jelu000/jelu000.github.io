
const svar_div = document.getElementById("svar_div")
const antal_vinster = document.getElementById("input_antal_vinster")

const vinster = [
    "Solstol",
    "Röd Porche",
    "Handduk",
    "Ockelbo 500",
    "10 liter tvål",
    "BMX cykel",
    "Surf Bräda ",
    "Burton Snowboard",
    "Kawasaki KLX 230 Cross",
    "ett paket Bregott",
    "Hawai resa",
    "en biltvätt på OK",
    "Kaffe och bulle",
    "Lyx yatch",
    "Iphone",
    "JBL hörlurar",
    "Makitat skruvdragare",
    "parfume från Hugo Boss",
    "konsertbiljett till The Killers",
    "ett kilo kattmat",
    "ett marsvin"
]

function slumpaClick() {

    let vinst = `<h3>Dina vinster</h3>`
    let antalv = antal_vinster.value;
    let int_antalv = parseInt(antalv);

    if (int_antalv <= 3) {

        for (i = 0; i < int_antalv; i++) {
            let slumptal = Math.floor(Math.random() * 20);
            let t_vinst = vinster[slumptal];
            vinst += `<p>${t_vinst}</p>`;
        }
        //console.log(`VINSTER: ${vinst}`);
        svar_div.innerHTML = vinst;
    }
    else {
        alert("För många lotter valda!")
    }
}