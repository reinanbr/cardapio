import {painelHorary} from './utils/painelHorary.js'
import {saveUserAgent} from './utils/securityTools.js'
import { sendFeedBack } from './utils/sendFeedback.js';
import { readFood } from './utils/readFood.js';
import { MakeBaseDate } from './utils/makeBaseDate.js';
import { randomText } from './utils/tools/randomText.js';
// Reinan Br <slimchatuba@gmail.com>
// DateInit: 12 Mar 2023
// LastDateUpdate: 09 Out 2023
// LICENSE: BSD-3
// WebApp: foodInfo from my college
// Version: 0.3 - Caniball


$(function(){
    let endDayFood = new MakeBaseDate()
    endDayFood.setHour(19)
    endDayFood.setMinutes(0)
    endDayFood.setSeconds(0)
    let endDayFoodSeconds = endDayFood.date().valueOf()


// const jsonHoraryFood = {morning:{init:'9:30',end:'10:00'},
//                 afternoon:{init:'15:30',end:'16:00'},
//                 night:{init:'18:30',end:'19:00'}};


$('#btnSendFeed').click(()=>{
    sendFeedBack()
})

if(Date.now()<endDayFoodSeconds){
    console.log('eh menor o tempo, ok')
    $('#oLanche').text('O lanche do dia é:')
    readFood()
}else{
console.log('não é menor o tempo, not ok')
}


// randomText()
saveUserAgent();
painelHorary();
setInterval(painelHorary,700);


})



