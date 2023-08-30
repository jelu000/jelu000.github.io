class Pengar{
    constructor(antal, pengsort){
        this.antal = antal;
        this.pengsort = pengsort;
    }
}

const input_pris = document.getElementById("pris");
const input_inbet = document.getElementById("inbet");

const svardiv = document.getElementById("svar_div");

const kalkyleraknapp = document.getElementById("kalk_knapp");
kalkyleraknapp.addEventListener("click", kalkyleraClick);




/*exhange
in: belopp som ska växlas, valör på sedel eller mynt
out: antal seda-mynt man får ut i valör
*/
function exChange(belopp, sedel){
    return Math.floor(belopp / sedel);
}
/*getExchangeArray
#in: inbetalt belopp, priset på varan
#out: dictonary inhåller antal mynt-sedlar i varje valör
*/
function getExchangeArray(inbetalning, priset){
        
    let antal_mynt = 0
    let pengar_tillbaka = 0

    sedlar_mynt_array = []

    //500----------------------------------------
    pengar_tillbaka = inbetalning - priset
    antal_mynt = exChange(pengar_tillbaka, 500)
    pengar_tillbaka = pengar_tillbaka % 500

    console.log(`antalmynt=${antal_mynt}  : pengarTillbaka=${pengar_tillbaka}`)
    
    let t_pengar = new Pengar(0, 500)
    
    if (antal_mynt > 0)
        t_pengar.antal = antal_mynt
    
    sedlar_mynt_array.push(t_pengar) 
    //print("Pengar tillbaka = " + str(pengar_tillbaka))
        
    //100----------------------------------------
    antal_mynt = exChange(pengar_tillbaka, 100)
    pengar_tillbaka = pengar_tillbaka % 100
    
    t_pengar = new Pengar(0, 100)
    
    if (antal_mynt > 0)
        t_pengar.antal = antal_mynt
    
    sedlar_mynt_array.push(t_pengar)  
                
    //50----------------------------------------
    antal_mynt = exChange(pengar_tillbaka, 50)
    pengar_tillbaka = pengar_tillbaka % 50
    
    t_pengar = new Pengar(0, 50)
    
    if (antal_mynt > 0)
        t_pengar.antal = antal_mynt
    
    sedlar_mynt_array.push(t_pengar)  
    
    //20----------------------------------------
    antal_mynt = exChange(pengar_tillbaka, 20)
    pengar_tillbaka = pengar_tillbaka % 20
    
    t_pengar = new Pengar(0, 20)
    
    if (antal_mynt > 0)
        t_pengar.antal = antal_mynt
    
    sedlar_mynt_array.push(t_pengar)  
        
    //10----------------------------------------
    antal_mynt = exChange(pengar_tillbaka, 10)
    pengar_tillbaka = pengar_tillbaka % 10
    
    t_pengar = new Pengar(0, 10)
    
    if (antal_mynt > 0)
        t_pengar.antal = antal_mynt
    
    sedlar_mynt_array.push(t_pengar)     
    
    //5----------------------------------------
    antal_mynt = exChange(pengar_tillbaka, 5)
    pengar_tillbaka = pengar_tillbaka % 5
    
    t_pengar = new Pengar(0, 5)
    
    if (antal_mynt > 0)
        t_pengar.antal = antal_mynt
    
    sedlar_mynt_array.push(t_pengar)   
        
    //1----------------------------------------
    antal_mynt = exChange(pengar_tillbaka, 1)
    pengar_tillbaka = pengar_tillbaka % 1
    
    t_pengar = new Pengar(0, 1)
    
    if (antal_mynt > 0)
        t_pengar.antal = antal_mynt
    
    sedlar_mynt_array.push(t_pengar)  
    
    
    return sedlar_mynt_array
}

function kalkyleraClick(e){
   
    let t_pris = parseInt(input_pris.value);
    let t_inbet = parseInt(input_inbet.value);
    
    if (t_pris > t_inbet){
        alert("Förlite pengar!")
    }
    else{
        const exchange_array = getExchangeArray(t_inbet, t_pris);
    
        svar_div.innerHTML =`<b>inbet= ${t_inbet} kr, pris= ${t_pris} kr</b>
        <br><h3>Växel Tillbaka:</h3>
        Femmhundringar: ${exchange_array[0].antal} st
        <br>Hundringar: ${exchange_array[1].antal} st
        <br>Femmtilappar: ${exchange_array[2].antal} st
        <br>Tjugolappar: ${exchange_array[3].antal} st
        <br>Tiokronor: ${exchange_array[4].antal} st
        <br>Femkronor: ${exchange_array[5].antal} st
        <br>Enkronor: ${exchange_array[6].antal} st`;
    }

    input_pris.value="";
    input_inbet.value="";

}