'use strict';
// Reinan Br <slimchatuba@gmail.com>
// DateInit: 12 Mar 2023
// LICENSE: BSD-3
// WebApp: foodInfo from my college
// Version: 0.1.3 - Carcaju




////////////////////////////////// tools date //////////////////////////////////////////

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


const jsonHoraryFood = {morning:{init:'9:30',end:'10:00'},
                afternoon:{init:'15:30',end:'16:00'},
                night:{init:'18:30',end:'19:00'}};


class MakeBaseDate{
    constructor(){
        this.year = false
        this.month = false
        this.day = false
        this.hour = false
        this.minutes = false
        this.seconds = false
    }

    setMonth(month){
        this.month = month.toString().length > 1 ? month : `0${month}`
        return this.month
    }
    setDay(day){
        this.day = day.toString().length > 1 ? day : `0${day}`
        return this.day
    }
    setHour(hour){
        this.hour = hour.toString().length > 1 ? hour : `0${hour}`
        return this.hour
    }
    setMinutes(minutes){
        this.minutes = minutes.toString().length > 1 ? minutes : `0${minutes}`
        return this.minutes
    }
    setSeconds(seconds){
        this.seconds = seconds.toString().length > 1 ? seconds : `0${seconds}`
        return this.seconds
    }

    date(){
        let dateToday = countTime()
        let month = this.month ? this.month : this.setMonth(dateToday.month+1)
        let day = this.day ? this.date : this.setDay(dateToday.dayDate)
        let hour = this.hour ? this.hour : this.setHour(dateToday.hour)
        let minutes = this.minutes ? this.minutes : this.setMinutes(dateToday.minute)
        let seconds = this.seconds ? this.seconds : this.setSeconds(dateToday.seconds)
        let stringDate = `${dateToday.year}-${month}-${day}T${hour}:${minutes}:${seconds}`

        //console.log(stringDate)
        let returnDate = new Date(stringDate)
        return returnDate
    }
}





///////////////////////////// tools ///////////////////////////////////

// image painel
const painelImage = (imageName) => {
    //let htmlBase = ``
    
    $('#painelImage').html(`              <img class="card-img-top" height='140' width="250" src='assets/imgs/${imageName}.gif'>`)
    
}




/////////////////////////////  working date ////////////////////////////////////////


const nextHoraryFood = () => {
    let date = countTime()
    if(date.dayWeek>0 && date.dayWeek<=5){
        //time limit for get food
        if(date.hour < 22 && date.hour>7){
            painelImage('study')

            //morning
            var baseMorningInit = new MakeBaseDate();
            baseMorningInit.setHour(9);
            baseMorningInit.setMinutes(30);
            baseMorningInit.setSeconds(0);

            var baseMorningEnd = new MakeBaseDate();
            baseMorningEnd.setHour(10)
            baseMorningEnd.setMinutes(0)
            baseMorningEnd.setSeconds(0)
            //console.log(baseMorningEnd.date())
            let morningInitDate = baseMorningInit.date()
            let morningInitSeconds = morningInitDate.valueOf()

            if(Date.now()<morningInitSeconds){
                var diffTime = morningInitSeconds-Date.now()
                //console.log(diffTime)
                let seconds = Math.floor(diffTime/1000);
                let minutes = Math.floor(seconds/60);
                let hour = Math.floor(minutes/60);

                let resSeconds = seconds%60;
                let resMinutes = minutes%60;

                return {food:false,
                        timeRes:{hour:hour,minutes:resMinutes,seconds:resSeconds},
                        horaryFood:{hour:morningInitDate.getHours(),minutes:morningInitDate.getMinutes()}
                        }
                }

            //AfterNoon
            var baseNoonInit = new MakeBaseDate();
            baseNoonInit.setHour(15);
            baseNoonInit.setMinutes(30);
            baseNoonInit.setSeconds(0);

            var baseNoonEnd = new MakeBaseDate();
            baseNoonEnd.setHour(16)
            baseNoonEnd.setMinutes(0)
            baseNoonEnd.setSeconds(0)
            //console.log(baseMorningEnd.date())
            let noonInitDate = baseNoonInit.date()
            let noonInitSeconds = noonInitDate.valueOf()

            if(Date.now()<noonInitSeconds){
                var diffTime = noonInitSeconds-Date.now()
                //console.log(diffTime)
                let seconds = Math.floor(diffTime/1000);
                let minutes = Math.floor(seconds/60);
                let hour = Math.floor(minutes/60);

                let resSeconds = seconds%60;
                let resMinutes = minutes%60;

                return {food:false,
                        timeRes:{hour:hour,minutes:resMinutes,seconds:resSeconds},
                        horaryFood:{hour:noonInitDate.getHours(),minutes:noonInitDate.getMinutes()}
                        }
            }

            //Night
            var baseNightInit = new MakeBaseDate();
            baseNightInit.setHour(18);
            baseNightInit.setMinutes(30);
            baseNightInit.setSeconds(0);

            var baseNightEnd = new MakeBaseDate();
            baseNightEnd.setHour(20)
            baseNightEnd.setMinutes(0)
            baseNightEnd.setSeconds(0)
            //console.log(baseMorningEnd.date())
            let nightInitDate = baseNightInit.date()
            let nightInitSeconds = nightInitDate.valueOf()

            if(Date.now()<nightInitSeconds){
                var diffTime = nightInitSeconds-Date.now()
                //console.log(diffTime)
                let seconds = Math.floor(diffTime/1000);
                let minutes = Math.floor(seconds/60);
                let hour = Math.floor(minutes/60);

                let resSeconds = seconds%60;
                let resMinutes = minutes%60;

                return {food:false,
                        timeRes:{hour:hour,minutes:resMinutes,seconds:resSeconds},
                        horaryFood:{hour:nightInitDate.getHours(),minutes:nightInitDate.getMinutes()}
                        }
            }
        }

        else{
            painelImage('sleep')

        }
    }
}


const painelHorary = () => {
    let infoHorary = nextHoraryFood();
   // console.log(infoHorary.secondsCount)
    if(!infoHorary.food){
     //   console.log(infoHorary.secondsCount)
        $('#infoHorary').html(`<small>O lanche será liberado às ${infoHorary.horaryFood.hour}:${infoHorary.horaryFood.minutes}.<br/>Faltam ${infoHorary.timeRes.hour} horas, ${infoHorary.timeRes.minutes} minutos e ${infoHorary.timeRes.seconds} segundos</small>`);
    }
}











////////////////////////// getting info food /////////////////////////////////////////
const readFood = () =>{
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












//////////////////////// start app and loops //////////////////////////////////

readFood();
painelHorary();
setInterval(painelHorary,700);
setInterval(readFood,10000)
})



