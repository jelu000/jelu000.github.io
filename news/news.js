

document.getElementById("butt_calc_points").addEventListener("click", beraknaNews)

function beraknaNews(){


    let andning_value, syrem1_value  = 0
    andning_value = document.querySelector('input[name="grupp_andningsf"]:checked')?.value;
    syrem1_value = document.querySelector('input[name="grupp_syrem1"]:checked')?.value;
    


    
    let int_andning_value = parseInt(andning_value)
    let int_syrem1_value = parseInt(syrem1_value)


    let totala = int_andning_value + int_syrem1_value 

    console.log(`värde ${int_andning_value} och syreM = ${int_syrem1_value}  Total= ${totala}`)
    
}