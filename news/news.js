

//Totalt 0-4	Låg	Avdelningsbaserade åtgärder
let medium = "3 poäng i en parameter: Klinisk risk låg/medium, Brådskande avdelningsbaserade åtgärder" //3 poäng i en parameter
//Totalt 5-6	Medium	Brådskande åtgärder*
//Totalt ≥7	Hög	Akuta åtgärder**



document.getElementById("butt_calc_points").addEventListener("click", beraknaNews)


function beraknaNews(){


    let param_arr = new Array(6).fill(0);
    param_arr[0] = parseInt(document.querySelector('input[name="grupp_andningsf"]:checked')?.value);
    param_arr[1] = parseInt(document.querySelector('input[name="grupp_syrem"]:checked')?.value);
    param_arr[2] = parseInt(document.querySelector('input[name="grupp_syrgas"]:checked')?.value);
    param_arr[3] = parseInt(document.querySelector('input[name="grupp_blodtryck"]:checked')?.value);
    param_arr[4] = parseInt(document.querySelector('input[name="grupp_puls"]:checked')?.value);
    param_arr[5] = parseInt(document.querySelector('input[name="grupp_medveten"]:checked')?.value);
    

    


    if (param_arr.includes(3)){
        console.log(medium)
    }
    else{
        let totala = param_arr[0] + param_arr[1] + param_arr[2] + param_arr[3] + param_arr[4] + param_arr[5] 
        console.log(`andningsfrekvens=${param_arr[0]}, syremääynad=${param_arr[1]}, tillsatt syrgas=${param_arr[2]} blodtryck=${param_arr[3]}, puls=${param_arr[4]}, medvetande=${param_arr[5]}`)
        console.log(`värde ${param_arr[0]} och syreM = ${param_arr[1]}  Total= ${totala} `)
    }
}
