/*Detta script är gjort av jens lundeqvist vid studier till undersköterska hos KUI */

let low = "Sammanlagt 0-4 poäng: Låg klinisk risk, Avdelningsbaserade åtgärder"
let medium = "3 poäng i en parameter: Klinisk risk medium, rekomenderad nytt NEWS test om en timme." //3 poäng i en parameter
let medium_plus = "Sammanlagt 5-6 poäng: Medium klinisk risk, brådskande avdelningsbaserade åtgärder, bedömning av ansvarig läkare samt evetuellt team med kompetens i akut omhändertagande. Tänk sepsis!"
let highr =  "Sammanlagt 7 poäng eller mer: Hög klinisk risk, akuta åtgärder och omedelbar bedömning av ansvarig läkare och personal med intesivvårdskompetens, ex MIG team."


document.getElementById("butt_calc_points").addEventListener("click", beraknaNews)
const div_poeng_table = document.getElementById("poeng_table");
const div_rekomentation = document.getElementById("rekomendation")

function beraknaNews(){

    let param_arr = new Array(6).fill(0);
    param_arr[0] = parseInt(document.querySelector('input[name="grupp_andningsf"]:checked')?.value);
    param_arr[1] = parseInt(document.querySelector('input[name="grupp_syrem"]:checked')?.value);
    param_arr[2] = parseInt(document.querySelector('input[name="grupp_syrgas"]:checked')?.value);
    param_arr[3] = parseInt(document.querySelector('input[name="grupp_blodtryck"]:checked')?.value);
    param_arr[4] = parseInt(document.querySelector('input[name="grupp_puls"]:checked')?.value);
    param_arr[5] = parseInt(document.querySelector('input[name="grupp_medveten"]:checked')?.value);
    param_arr[6] = parseInt(document.querySelector('input[name="grupp_temp"]:checked')?.value);

    
    if (param_arr.includes(3)){
        
        div_poeng_table.innerHTML = createTablePoeng(param_arr)
        let medium_tre = `<p class="pgul">${medium}</p>`
        div_rekomentation.innerHTML = medium_tre
        
        
    }
    else{
        
        let totala = param_arr[0] + param_arr[1] + param_arr[2] + param_arr[3] + param_arr[4] + param_arr[5] + param_arr[6]
        div_poeng_table.innerHTML = createTablePoeng(param_arr)
        
        let behanlings_rek = `<p>Den samman lagda NEWS poängen blir ${totala}</p>`

         

        if (totala < 5){
            behanlings_rek += `<p class="pgron">${low}</p>`
        }
        else if (totala < 7){
            behanlings_rek += `<p class="pgul">${medium_plus}</p>`
        }
        else {
            behanlings_rek += `<p class="prod">${highr}</p>`   
        }

        div_rekomentation.innerHTML = behanlings_rek
        console.log(`värde ${param_arr[0]} och syreM = ${param_arr[1]}  Total= ${totala} `)
    }
}

function createTablePoeng(a_params){
    
    let tabletext = `<table>
                <thead>
                    <tr>
                        <td>Parameter</td>
                        <td>Poäng</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Andningsfrekvens</td>
                        <td>${a_params[0]}</td>   
                    </tr>
                    <tr>
                        <td>Syremättnad</td>
                        <td>${a_params[1]}</td>   
                    </tr>
                    <tr>
                        <td>Syrgas</td>
                        <td>${a_params[2]}</td>   
                    </tr>
                    <tr>
                        <td>Blodtryck</td>
                        <td>${a_params[3]}</td>   
                    </tr>
                    <tr>
                        <td>Pulsfrekvens</td>
                        <td>${a_params[4]}</td>   
                    </tr>
                    <tr>
                        <td>Medvetandegrad</td>
                        <td>${a_params[5]}</td>   
                    </tr>
                    <tr>
                        <td>Kroppstemperatur</td>
                        <td>${a_params[6]}</td>   
                    </tr>
                </tbody>

            </table>`
    
            return tabletext  
}


