//Så här kommeterar man bort kod i en javascript fil, dvs .js fil

let siffra = 0; //Deklarerar en variabel
//const siffra 0; //Så deklarerar man en variabel som är konstant och inte kan ändras
//var siffra = 0; Använd ej var för bryter utanför blocken men let och const!
{
    var var_variabel = "block med var variabel som bryter utanför blocket";
    let let_variabel = "blocke med let variabel";    
}

//Function som körs när man trycker på plussknappen
function plusClick(){
    
    siffra = siffra + 1;
    //console.log(`klick ${siffra}`); //för felsökning
    document.getElementById("taltext").innerHTML = siffra;    
}

//Hämtar minusknapp element från html sidan 
//OBS! gör man på detta sätt måste <script> taggen ligga längst ner i html sidan
//eller måste man lägga till defer i taggen så här: <script src="knapp.js" defer>
const minusknapp = document.getElementById("minus");
minusknapp.addEventListener("click", minusClick);
//console.log(`minusknapp type off= ${typeof(minusknapp)}`)

//Function som körs när man trycker på minusknappen
function minusClick(){
    siffra--;
    //console.log(`siffra= ${siffra}`);//för felsökning
    document.getElementById("taltext").innerHTML = siffra;
}

//console.log(`var_variabel = ${var_variabel}`);//för felsökning


