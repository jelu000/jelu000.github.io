class Bil {

    constructor(brand, color, bid){
        this.brand = brand
        this.color = color
        this.bid = bid
    }
}

let billista = [];

const addbutton = document.getElementById("addbutton")
addbutton.addEventListener("click", addButtonClick)
const brand = document.getElementById("brand")
const color = document.getElementById("color")
const lista_bilar_div = document.getElementById("listabilarDiv")

//------------------------------------------------------------
// addButtonClick()
function addButtonClick(){

    //console.log(`fabrikat: ${brand.value} Färg: ${color.value}`)
    const now = Date.now()
    const id = now.toString()
    let brandname = brand.value
    
    if (brandname != ""){
        //Lägg till bil
        let car = new Bil(brand.value, color.value, id) 
        billista.push(car) 
        
        localStorage.setItem("bilarlistan", JSON.stringify(billista))
        brand.value=""
        color.value=""

        lista_bilar_div.innerHTML= "";

        billista.forEach(createHtmlBilLista)
    }
    else
        alert("Måste fylla i fabrikat!")

    brand.focus()

}

//------------------------------------------------------------
// createHtmlBilLista() som arrowfunction

const createHtmlBilLista = (bil) => {
    //skapar element
    const bildiv = document.createElement('div')
    bildiv.className = "bil_div_element"

    const bilH2 = document.createElement('H3')
    const bilPcolor = document.createElement('p')
    const bilDelButton = document.createElement('button')

    bilH2.innerText = `${bil.brand}`
    bilPcolor.innerText = `Färg: ${bil.color}`
    bilDelButton.innerText = "Delete"
    bilDelButton.id = bil.bid

    bildiv.append(bilH2, bilPcolor, bilDelButton)
    lista_bilar_div.appendChild(bildiv)
}




