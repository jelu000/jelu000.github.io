class Pengar {
    constructor(antal, pengsort){
        this.antal = antal
        this.pengsort = pengsort
    }
}

/**
 * exChange 
 * in: belop som ska växlas, valör på sedel
 * out: antal sedlaar eller mint
 */
function exChange(belopp, sedel){
    return Math.floor(belopp / sedel)
}

/**
 * getExchangeArray()
 * in inbetalt beloop
 * out: array innehåller antal mynt i varje valör
 */
function getExchangeArray(inbetalning, priset){

    let antal_mynt = 0
    let pengar_tillbaka = 0

    sedlar_mynt_array = []

    //500---------------------------------
    pengar_tillbaka = inbetalning - priset
    antal_mynt = exChange(pengar_tillbaka, 500)
    pengar_tillbaka = pengar_tillbaka % 500

    

    let t_pengar =  new Pengar(0, 500)
    
    if (antal_mynt > 0){ 
        t_pengar.antal = antal_mynt
    }

    sedlar_mynt_array.push(t_pengar)

    console.log(`t_pengar= ${antal_mynt}`)


     //100---------------------------------
     antal_mynt = exChange(pengar_tillbaka, 100)
     pengar_tillbaka = pengar_tillbaka % 100
 
     
 
     t_pengar =  new Pengar(0, 100)
     
     if (antal_mynt > 0){ 
         t_pengar.antal = antal_mynt
     }
 
     sedlar_mynt_array.push(t_pengar)
 
     console.log(`t_pengar= ${antal_mynt}`)

     //50---------------------------------
     antal_mynt = exChange(pengar_tillbaka, 50)
     pengar_tillbaka = pengar_tillbaka % 50
 
     
 
     t_pengar =  new Pengar(0, 50)
     
     if (antal_mynt > 0){ 
         t_pengar.antal = antal_mynt
     }
 
     sedlar_mynt_array.push(t_pengar)
 
     console.log(`t_pengar= ${antal_mynt}`)

     //20---------------------------------
     antal_mynt = exChange(pengar_tillbaka, 20)
     pengar_tillbaka = pengar_tillbaka % 20
 
     
 
     t_pengar =  new Pengar(0, 20)
     
     if (antal_mynt > 0){ 
         t_pengar.antal = antal_mynt
     }
 
     sedlar_mynt_array.push(t_pengar)
 
     console.log(`t_pengar= ${antal_mynt}`)

     //10---------------------------------
     antal_mynt = exChange(pengar_tillbaka, 10)
     pengar_tillbaka = pengar_tillbaka % 10
 
     
 
     t_pengar =  new Pengar(0, 10)
     
     if (antal_mynt > 0){ 
         t_pengar.antal = antal_mynt
     }
 
     sedlar_mynt_array.push(t_pengar)
 
     console.log(`t_pengar= ${antal_mynt}`)

     //5---------------------------------
     antal_mynt = exChange(pengar_tillbaka, 5)
     pengar_tillbaka = pengar_tillbaka % 25
 
     
 
     t_pengar =  new Pengar(0, 5)
     
     if (antal_mynt > 0){ 
         t_pengar.antal = antal_mynt
     }
 
     sedlar_mynt_array.push(t_pengar)
 
     console.log(`t_pengar= ${antal_mynt}`)

     //1---------------------------------
     antal_mynt = exChange(pengar_tillbaka, 1)
     pengar_tillbaka = pengar_tillbaka % 21
 
     
 
     t_pengar =  new Pengar(0, 1)
     
     if (antal_mynt > 0){ 
         t_pengar.antal = antal_mynt
     }
 
     sedlar_mynt_array.push(t_pengar)
 
     console.log(`t_pengar= ${antal_mynt}`)

     return sedlar_mynt_array

}





const input_pris = document.getElementById("pris")
const input_inbet = document.getElementById("inbet")

const svardiv = document.getElementById("svar_div")

const kalkyleraknapp = document.getElementById("kalk_knapp")
kalkyleraknapp.addEventListener("click", kalkyleraClick)

function kalkyleraClick(e){
    
    let t_pris = parseInt(input_pris.value)
    let t_inbet = parseInt(input_inbet.value)
    
    if (t_pris > t_inbet){
        alert("Varan kostar mer än du betalat!")
    }
    else{
        let  exchange_array = getExchangeArray(t_inbet, t_pris)

        svardiv.innerHTML =  `<br><hr><h3>Växel tillbaka</h3>
        Femmhundringar = ${exchange_array[0].antal} st <br>
        100 lappar = ${exchange_array[1].antal} st <br>
        50 lappar = ${exchange_array[2].antal} st <br>
        20 lappar = ${exchange_array[3].antal} st <br>
        10 kronor = ${exchange_array[4].antal} st <br>
        5 kronor = ${exchange_array[5].antal} st <br>
        1 kronor = ${exchange_array[6].antal} st <br>`

    }
    
    
    
    
    //console.log(`klick`)
}