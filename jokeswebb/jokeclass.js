//Definerar class
class JokeHandlerRequest {
    //Skapar constructor som körs först när man skapar klassen
    //IN: adress till api request
    constructor(adress) {
        this.adress = adress;
        //console.log(`Klass adress: ${this.adress}`)
    }

    //Skapar metoden getJoke som retunerar en Joke sträng, denna tillhör classen
    //Retunerar en Joke sträng
    //Obs måste använda async await för att vänta på response
    async getJoke() {
        let joke_string = "This is not a Joke:( ";

        await fetch(
            this.adress,
            {
                method: "GET",
                headers: new Headers({
                    Accept: "application/json"
                })
            }
        )
            .then(res => res.json())
            .then(response => {
                //console.log(`response= ${response.joke}`)
                joke_string = response.joke;

            })
            .catch(error => { console.log(error); joke_string += error });

        return joke_string;
    }
}//Slut på klassen---------------------------------------------------------------------------------------------------

//Kör programmet och hämtar de element från html filen som behövs + lägger till EventListener
const jokebutt = document.getElementById("jokebutton");
jokebutt.addEventListener("click", getJoke)
const p_joke = document.getElementById("pjoke")

//getJoke() Function som körs när man trycker på knappen 
//Obs måste använda async await för att vänta på response
async function getJoke(e) {

    const request_adress = `https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single`;
    let joke_objekt = new JokeHandlerRequest(request_adress);
    p_joke.innerHTML = await joke_objekt.getJoke();
}
