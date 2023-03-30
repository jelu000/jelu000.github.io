
let siffra = 0;

function plusClick(){
    //console.log("Click").innerHTML("Click")

    siffra = siffra + 1;
    document.getElementById("svar").innerHTML = siffra;
    
}

const minusknapp = document.getElementById("minusclick");
minusknapp.addEventListener("click", minusClick);

function minusClick(){
    
    siffra = siffra-1;
    document.getElementById("svar").innerHTML = siffra
}