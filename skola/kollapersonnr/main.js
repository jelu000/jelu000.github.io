function kollaString(tpersonummer){
    let length_ok = false;

    if (tpersonummer.length === 10){
        length_ok = true;
    }
    return length_ok;
}
//pnrToNumber-----------------------------------------------------------------
function pnrToNumber(tpersonr){
    //casta string till array med chars
    const arr_pnr = tpersonr.split('');
    
    //Funktionell programmering med en arrow funktion
    const newPnrArr = arr_pnr.map((textsiffra) => {
        const  num_siffra = parseInt(textsiffra);
        return num_siffra;
    } )

    return newPnrArr;
}

//addSiffrorAndCheck------------------------------------------------------------
function addSiffrorAndCheck(t_multiplicerade_sifror){

    const arr_siffror = t_multiplicerade_sifror.split('');
    let summa = 0;
    let kontrollsiffra =0;
    let substractfrom = 0;

    for (i=0; i< t_multiplicerade_sifror.length; i++){
        summa += Number(arr_siffror[i]);
    }

    if (summa % 10 !== 0){
        substractfrom = (Math.floor(summa/10))*10
        substractfrom = substractfrom + 10;
        kontrollsiffra = substractfrom - summa
    }

    return kontrollsiffra;
}

//multiplicera personummer----------------------------------------------------------
function multipliceraPnr(t_arr_med_pnr_num){

    let = str_multiplecerade_siffror = ""

    for (let i=0; i<9; i++ ){

        if((i+1)%2 === 0){
            const num_siffra = Number(t_arr_med_pnr_num[i])*1;
            str_multiplecerade_siffror += num_siffra; 
        }

        else {
            const num_siffra = Number(t_arr_med_pnr_num[i])*2;
            str_multiplecerade_siffror += num_siffra;
        }
    }

    return str_multiplecerade_siffror;

}

function grabControllSiffra(t_pnr){
    let ksiffra = t_pnr[t_pnr.length-1];

    return ksiffra;
}




function checkButtClick(){
//console.log("Klick");

let textfelt = document.getElementById("prsnr_input").value;
let psvar = document.getElementById("svar");
let len_ok = kollaString(textfelt);

if (len_ok){

    const arr_pnr_siffror = pnrToNumber(textfelt);
    const multiplicerade_siffror = multipliceraPnr(arr_pnr_siffror);
    kalkylerad_kontrolsiffran = addSiffrorAndCheck(multiplicerade_siffror);
    console.log("kontrollsiffran  " + kalkylerad_kontrolsiffran );

    const kontrolls = grabControllSiffra(textfelt);

    console.log("ksiffra = " + kontrolls);

    if (kalkylerad_kontrolsiffran == Number(kontrolls) ){
        console.log("Sant")
        psvar.innerHTML = "Kontroll siffran " + kontrolls + " Stämmer!"
    }
    else{
        console.log("falskt")
        psvar.innerHTML = "Kontroll siffran  Stämmer inte!"
    }






}
else {
    alert("Obs, de måste vara 10 st siffror!")


}

//console.log("textfelt= " + textfelt);


}