function kollaString(tpersonummer){
    let length_ok = false;

    if (tpersonummer.length === 10){
        length_ok = true;
    }
    return length_ok;
}




function checkButtClick(){
//console.log("Klick");

let textfelt = document.getElementById("prsnr_input").value;
let psvar = document.getElementById("svar");
let len_ok = kollaString(textfelt);

if (len_ok){


}
else {
    alert("Obs, de måste vara 10 st siffror!")
}

//console.log("textfelt= " + textfelt);


}