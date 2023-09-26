import { nextHoraryFood } from "./nextHoraryFood.js";

export const painelHorary = () => {
    let infoHorary = nextHoraryFood();
   // console.log(infoHorary.secondsCount)
    if(!infoHorary.food){
     //   console.log(infoHorary.secondsCount)
        $('#infoHorary').html(`<small><b>O lanche será liberado às ${infoHorary.horaryFood.hour}:${infoHorary.horaryFood.minutes}!</b><br/><br/>Faltam ${infoHorary.timeRes.hour} horas, ${infoHorary.timeRes.minutes} minutos e ${infoHorary.timeRes.seconds} segundos</small>`);
    }
}



