'use strict';
// import { nextHoraryFood,jsonHoraryFood,countTime } from "./tools";

// get date info json
$(function(){
const countTime = () =>{
    var date = new Date();

    let monthListName = ['jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez']
    let dayWeekListName = ['Dom','Seg','Ter','Qua','Qui','Sex','Sab']

    let dayDate = date.getDate()
    let dayWeek = date.getDay()
    let month = date.getMonth()
    let year = date.getFullYear()

    let hour = date.getHours()
    let minute = date.getMinutes()
    let seconds = date.getSeconds()

    let monthName = monthListName[month]
    let dayWeekName = dayWeekListName[dayWeek]

    let timeDay = hour>=18 ? '🌙' : '☀️'
    timeDay = hour<6 ? '🌙' : '☀️'

    hour = hour.toString().length > 1 ? hour : `0${hour}`
    seconds = seconds.toString().length > 1 ? seconds : `0${seconds}`
    return {dayDate:dayDate,
            dayWeek:dayWeek,
            month:month,
            year:year,
            hour:hour,
            minute:minute,
            seconds:seconds,
            monthName:monthName,
            dayWeekName:dayWeekName,
            timeDay:timeDay}
}


const jsonHoraryFood = {morning:{init:{hour:9,minute:30},end:{hour:10}},
                afternoon:{init:{hour:15,minute:30},end:{hour:16}},
                night:{init:{hour:18,minute:30},end:{hour:19}}};




const nextHoraryFood = () => {
    let date = countTime()
    if(date.dayWeek>0 && date.dayWeek<=5){

        //morning
        if(date.hour<=jsonHoraryFood.morning.init.hour){
           let hourCount = jsonHoraryFood.morning.init.hour - date.hour
           let minuteCount = Math.abs(jsonHoraryFood.morning.init.minute - date.minute)
           let secondsCount = 60 - date.seconds

            return {food:false,
                horaryFood:jsonHoraryFood.morning.init,
                hourCount:hourCount,
                minuteCount:minuteCount,
                secondsCount:secondsCount}
        }
        else if(date.hour==jsonHoraryFood.morning.init.hour && date.minute >= jsonHoraryFood.morning.init.minute && date.minute <= 59){
            return {food:true,
                    horaryEnd:jsonHoraryFood.morning.end,
                    minuteCount:60-date.minute,
                    secondsCount:60-date.seconds}
        }

        // afternoon
        if(date.hour<=jsonHoraryFood.afternoon.init.hour){
           let hourCount = jsonHoraryFood.afternoon.init.hour - date.hour
           let minuteCount = jsonHoraryFood.afternoon.init.minute - date.minute
           let secondsCount = 60 - date.seconds

            return {food:false,
                horaryFood:jsonHoraryFood.afternoon.init,
                hourCount:hourCount,
                minuteCount:minuteCount,
                secondsCount:secondsCount}
        }
        else if(date.hour==jsonHoraryFood.afternoon.init.hour && date.minute >= jsonHoraryFood.afternoon.init.minute && date.minute <= 59){
            return {food:true,
                    horaryEnd:jsonHoraryFood.afternoon.end,
                    minuteCount:60-date.minute,
                    secondsCount:60-date.seconds}
        }

        // night
        if(date.hour<=jsonHoraryFood.night.init.hour){
            let hourCount = jsonHoraryFood.night.init.hour - date.hour
            let minuteCount = jsonHoraryFood.night.init.minute - date.minute
            let secondsCount = 60 - date.seconds

            return {food:false,
                horaryFood:jsonHoraryFood.night.init,
                hourCount:hourCount,
                minuteCount:minuteCount,
                secondsCount:secondsCount}
        }
        else if(date.hour==jsonHoraryFood.night.init.hour && date.minute >= jsonHoraryFood.night.init.minute && date.minute <= 59){
            return {food:true,
                    horaryEnd:jsonHoraryFood.night.end,
                    minuteCount:60-date.minute,
                    secondsCount:60-date.seconds}
        }
    }
}




var readFood = () =>{
    fetch('https://raw.githubusercontent.com/reinanbr/cardapio/main/assets/info.json')
    .then((res)=>{
        return res.json();
    })
    .then((json)=>{
        $('#foodName').text(json.foodName)
        $('#updateDateFood').text(`Cardápio atualizado às ${json.hour} de ${json.date}`)
    })
    .catch((e)=>{
        $('#errorInfo').html(`
        <div class="alert alert-danger">
          <strong>ServerError!</strong> ${e}
        </div>`);
    })
}

const painelHorary = () => {
    let infoHorary = nextHoraryFood();
    //console.log(infoHorary.secondsCount)
    if(!infoHorary.food){
        //console.log(infoHorary.secondsCount)
        $('#infoHorary').html(`<small>O lanche será liberado às ${infoHorary.horaryFood.hour}:${infoHorary.horaryFood.minute}.<br/>Faltam ${infoHorary.hourCount} horas, ${infoHorary.minuteCount} minutos e ${infoHorary.secondsCount} segundos</small>`);
    }
}

readFood();
painelHorary();
setInterval(painelHorary,700);
setInterval(readFood,10000)
})