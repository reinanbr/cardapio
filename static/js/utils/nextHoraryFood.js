import { painelImage } from "./painelImage.js";
import { MakeBaseDate } from "./makeBaseDate.js";
import { countTime } from "./countTime.js";
import { readFood } from "./readFood.js";

export const nextHoraryFood = () => {
    let date = countTime()

    let endDay = new MakeBaseDate()
    endDay.setHour(18)
    endDay.setMinutes(50)
    endDay.setSeconds(0)
    let endDaySeconds = endDay.date().valueOf()



    if(date.dayWeek>0 && date.dayWeek<=5){
        //time limit for get food

        /* horário das 7h ás 19h  */

        if(date.hour > 6 && (Date.now()<=endDaySeconds)){
          
            painelImage('study')
            readFood();
            setInterval(readFood,10000)



            //morning
            var baseMorningInit = new MakeBaseDate();
            baseMorningInit.setHour(9);
            baseMorningInit.setMinutes(30);
            baseMorningInit.setSeconds(0);
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


            var baseMorningEnd = new MakeBaseDate();
            baseMorningEnd.setHour(9)
            baseMorningEnd.setMinutes(50)
            baseMorningEnd.setSeconds(0)
            let morningEndDate = baseMorningEnd.date()
            let morningEndSeconds = morningEndDate.valueOf()

            if(Date.now()<=morningEndSeconds){
                    var diffTime = morningEndSeconds-Date.now()
                    let seconds = Math.floor(diffTime/1000);
                    let minutes = Math.floor(seconds/60);
                    let hour = Math.floor(minutes/60);
                    let resSeconds = seconds%60;
                    let resMinutes = minutes%60;
                    return {food:true,
                            timeRes:{hour:hour,minutes:resMinutes,seconds:resSeconds},
                            horaryFood:{hour:morningInitDate.getHours(),minutes:morningInitDate.getMinutes()}
                            }
                    }




            //AfterNoon
            var baseNoonInit = new MakeBaseDate();
            baseNoonInit.setHour(15);
            baseNoonInit.setMinutes(30);
            baseNoonInit.setSeconds(0);
            let noonInitDate = baseNoonInit.date()
            let noonInitSeconds = noonInitDate.valueOf()


            if(Date.now()<noonInitSeconds){
                var diffTime = noonInitSeconds-Date.now()
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


            var baseNoonEnd = new MakeBaseDate();
            baseNoonEnd.setHour(15)
            baseNoonEnd.setMinutes(50)
            baseNoonEnd.setSeconds(0)
            let noonEndDate = baseNoonEnd.date()
            let noonEndSeconds = noonEndDate.valueOf()

            if(Date.now()<=noonEndSeconds){
                var diffTime = noonEndSeconds-Date.now()
                let seconds = Math.floor(diffTime/1000);
                let minutes = Math.floor(seconds/60);
                let hour = Math.floor(minutes/60);
                let resSeconds = seconds%60;
                let resMinutes = minutes%60;
                return {food:true,
                        timeRes:{hour:hour,minutes:resMinutes,seconds:resSeconds},
                        horaryFood:{hour:morningInitDate.getHours(),minutes:morningInitDate.getMinutes()}
                        }
                }





            //Night
            var baseNightInit = new MakeBaseDate();
            baseNightInit.setHour(18);
            baseNightInit.setMinutes(30);
            baseNightInit.setSeconds(0);
            let nightInitDate = baseNightInit.date()
            let nightInitSeconds = nightInitDate.valueOf()


            if(Date.now()<nightInitSeconds){
                var diffTime = nightInitSeconds-Date.now()
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


            var baseNightEnd = new MakeBaseDate();
            baseNightEnd.setHour(18)
            baseNightEnd.setMinutes(50)
            baseNightEnd.setSeconds(0)
            let nightEndDate = baseNightEnd.date()
            let nightEndSeconds = nightEndDate.valueOf()

            if(Date.now()<=nightEndSeconds){
                var diffTime = nightEndSeconds-Date.now()
                let seconds = Math.floor(diffTime/1000);
                let minutes = Math.floor(seconds/60);
                let hour = Math.floor(minutes/60);
                let resSeconds = seconds%60;
                let resMinutes = minutes%60;
                return {food:true,
                        timeRes:{hour:hour,minutes:resMinutes,seconds:resSeconds},
                        horaryFood:{hour:morningInitDate.getHours(),minutes:morningInitDate.getMinutes()}
                        }
                }
        }


        else if ((date.hour>=18 && date.minute>=50) && date.hour<22){
            console.log('end')
            painelImage('study')
            $('#infoHorary').html(`<small><br/> Estude! Falta pouco para você descansar!</small><hr/>`);
            $('#foodName').text('Calma, o dia já está acabando!')
            $('#updateDateFood').text(``)
            return {food:false,
                        timeRes:{hour:hour,minutes:resMinutes,seconds:resSeconds},
                        horaryFood:{hour:nightInitDate.getHours(),minutes:nightInitDate.getMinutes()}
                        }
        }

        else{
            painelImage('sleep')
            $('#infoHorary').html(`<small><br/> Descanse! Você já cumpriu a missão do dia!</small><hr/>`);
            $('#foodName').text('Descanse!')
            $('#updateDateFood').text(``)
            return {food:false}
  



        }
    }
   // console.log(date.dayWeek);
    
     else if(date.dayWeek==6){
            painelImage('sabado')
            $('#infoHorary').html(`<small><br/> Hoje é sabado!</small><hr/>`);
            $('#foodName').text('🎉🎉!')
            $('#updateDateFood').text(``)
            return {food:false,
                        timeRes:{hour:hour,minutes:resMinutes,seconds:resSeconds},
                        horaryFood:{hour:nightInitDate.getHours(),minutes:nightInitDate.getMinutes()}
                        }
      
    }
     else if (date.dayWeek==0){
            painelImage('domingo')
            $('#infoHorary').html(`<small><br/> <b>Hoje é domingo!</b></small><hr/>`);
            $('#foodName').text('🎉🎉!')
            $('#updateDateFood').html(`<b><i>Hoje é domingo!</i></b>`)
            return {food:false,
                        timeRes:{hour:hour,minutes:resMinutes,seconds:resSeconds},
                        horaryFood:{hour:nightInitDate.getHours(),minutes:nightInitDate.getMinutes()}
                        }
      
    }
    console.log(date.dayWeek)
}
