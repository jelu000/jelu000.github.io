//function isNumeric(str) {
//  return /^\d+$/.test(str);
//}

function checkButtClick() {

    let textfelt = document.getElementById("textinput").value;
    let psvar = document.getElementById("svar");
    let len_ok = kollaStringLength(textfelt)

    //checkstr = isNumeric(textfelt)
    //console.log(`svaret= ${checkstr}`)

    if (len_ok) {
        //console.log(`Click ${textfelt}`)
        let arr_pnr_siffror = pnrToNumber(textfelt);
        let multiplicerade_siffror = multipliceraPnr(arr_pnr_siffror)
        let kalkylerad_kontrollsiffra = addSiffrorAndCheck(multiplicerade_siffror)

        let kontrollsoffran = getKontrollSiffra(textfelt);
        
        let svar = ""

        if (kalkylerad_kontrollsiffra == kontrollsoffran){
            svar = "Kontollsiffran stämmer!"
        }
        else{
            svar = "Kontrollsiffran stämmer inte!"
        }
        
        console.log(`kalksiffra ${kalkylerad_kontrollsiffra}  riktig siffra ${kontrollsoffran}`)
        psvar.innerHTML = svar;
    }
    else {
        console.log("Personnummret måste vara 10 siffror");
    }
}


//KollaStrinLength---------------------------------------------------------------
function kollaStringLength(tpersonnr) {
    let length_ok = false;

    if (tpersonnr.length === 10) {
        length_ok = true;
        
    }
    return length_ok;
}

//pnrToNumber------------------------------------------------------
function pnrToNumber(tpersonnr) {
    //casta string till array med chars
    const arr_pnr = tpersonnr.split('');
    const newPnrArr = arr_pnr.map((textsiffra) => {
        const num_siffra = parseInt(textsiffra);
        return num_siffra;
    })

    return newPnrArr;
}

/*function multipliceraPnr()
In: personnumer som array med numbers
Ut:strinng med multiplicerade siffror i personnummer*/
//Multiplicerar varannan siffra i personnumret med 1 sen 2 osv
function multipliceraPnr(arr_med_pnr_siffro){
    let = str_multiplicerade_siffror = "";

    //Gammal hederli forloop istället .map() funktion
    for (let i = 0; i < 9; i++) {
        
        if ((i+1)%2 === 0){//Om index i array udda, multiplicera med 1
            const num_siffra = Number(arr_med_pnr_siffro[i]) * 1;
            //console.log(` :${num_siffra}: `)
            str_multiplicerade_siffror += num_siffra;
        }
        else{//om index är jämnt multiplicera med 2
            const num_siffra = Number(arr_med_pnr_siffro[i]) * 2;
            //console.log(` :${num_siffra}: `)
            str_multiplicerade_siffror += num_siffra;
        }
      }
      
      return str_multiplicerade_siffror;
}//End of multiplicerPnr()

/*function addSiffrorAndCheck
in: string med multiplicerade siffror 
ut: kontrollsiffra som i typ Number*/
function addSiffrorAndCheck(multipsiffror_str){
    const arr_siffror = multipsiffror_str.split('');
    let summa = 0; //summan av alla siffror i de spitatde personummret
    let kontrollsiffra = 0;
    let substractfrom = 0;

    for (i = 0; i < arr_siffror.length; i++) {
        summa += Number(arr_siffror[i]);
      }     

    if (summa % 10 !== 0){//talet är inte jämnt delbart med 10
        substractfrom = (Math.floor(summa /10))*10;
        substractfrom += 10;
        kontrollsiffra = substractfrom - summa;
    }    
    //console.log(`summa: ${summa}`)
    //console.log(`Kontrollsiffra= ${kontrollsiffra}`)
    return kontrollsiffra;
}

//getKontrollSiffra()------------------
function getKontrollSiffra(tpersonnummret){

    let kontrollsiffran = tpersonnummret[tpersonnummret.length-1];

    return kontrollsiffran;
}