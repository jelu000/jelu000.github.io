/*A javascript analog clock made from WebDevSimplified tutorial 
https://www.youtube.com/c/WebDevSimplified

https://www.youtube.com/watch?v=Ki0XXrlKlHY&list=PLCYldissQiD5z0BZ6_xf1gZ-8mtg1eTnF&index=128&t=762s
*/ 

setInterval(setClock, 1000);

const hourhand = document.querySelector('[data-hour-hand]');
const minutehand = document.querySelector('[data-minute-hand]');
const secondhand = document.querySelector('[data-second-hand]');

function setClock(){
    const currentDate = new Date();
    const secondsratio = currentDate.getSeconds()/60;
    const minutesratio = (secondsratio + currentDate.getMinutes())/60;
    const hoursratio = (minutesratio + currentDate.getHours())/12;

    setRotation(secondhand, secondsratio);
    setRotation(minutehand, minutesratio);
    setRotation(hourhand, hoursratio);
} 

function setRotation(element, rotationratio){
    element.style.setProperty('--rotation', rotationratio*360)
}

setClock();
