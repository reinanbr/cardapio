import {painelHorary} from './utils/painelHorary.js'
import {saveUserAgent} from './utils/securityTools.js'

// Reinan Br <slimchatuba@gmail.com>
// DateInit: 12 Mar 2023
// LastDateUpdate: 25 Set 2023
// LICENSE: BSD-3
// WebApp: foodInfo from my college
// Version: 0.3 - Caniball


$(function(){

// const jsonHoraryFood = {morning:{init:'9:30',end:'10:00'},
//                 afternoon:{init:'15:30',end:'16:00'},
//                 night:{init:'18:30',end:'19:00'}};



saveUserAgent();
painelHorary();
setInterval(painelHorary,700);



})



