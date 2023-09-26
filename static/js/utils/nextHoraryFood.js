import { painelImage } from "./painelImage.js";
import { MakeBaseDate } from "./makeBaseDate.js";
import { countTime } from "./countTime.js";
import { readFood } from "./readFood.js";

export const nextHoraryFood = () => {
    let date = countTime()
    if(date.dayWeek>0 && date.dayWeek<=5){
        //time limit for get food


        /* horário das 7h ás 19h  */
        if(date.hour < 19 && date.hour>7){
            painelImage('study')
            readFood();
            setInterval(readFood,10000)

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

        
        else if (date.hour>=19 && date.hour<22){
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
            return {food:false,
                        timeRes:{hour:hour,minutes:resMinutes,seconds:resSeconds},
                        horaryFood:{hour:nightInitDate.getHours(),minutes:nightInitDate.getMinutes()}
                        }
  



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
