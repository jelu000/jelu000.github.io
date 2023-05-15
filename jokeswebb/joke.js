//https://foolishdeveloper.com/random-joke-generator-using-javascript-api/

const jokebutt = document.getElementById("jokebutton");
jokebutt.addEventListener("click", getJoke)

function getJoke(e) {

    fetch(
        `https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single`,
        {
            method: "GET",
            headers: new Headers({
                Accept: "application/json"
            })
        }
    )
        .then(res => res.json())
        .then(response => {
            
            console.log(`${response.joke}`)
            
            //psvar.innerHTML= prsnr  + " " + getGender(prsnr);

            
        })
        .catch(error => console.log(error));

}



