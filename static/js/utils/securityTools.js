/** 
 * Como a página é totalmente front end hospedada pelo github, ela não possui sitema de segurança e monitoramento para averiguar a quantidade
 * de acessos e requerimentos.
 * Com isso, criei a função abaixo para ter a noção dos UserAgents que tem acesso este projeto Open Source, e assim criar uma estimativa da
 * quantidade de acessos na página.
 */

export function saveUserAgent(){
     let userAgent = navigator.userAgent
     let url = window.location.href;

     let dt = new Date()
     let dateAcess = `${dt.getDate()}/${dt.getMonth()+1}/${dt.getUTCFullYear()}`
     let hourAcess = `${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()}`

     $("#info_device").text(userAgent)
     let timeNow = Date.now()
     fetch(`https://reysofts.com.br/apis/save_user.php?userDevice=${userAgent}`).then(res=>res.json()).then((res)=>{
         console.log(res)
         if(res.res){
             $('#ok').text('...,')
         }
         else{
             $('#ok').text('.,')
         }
     }).catch((e)=>{
         console.log(e)
     })
}

// saveUserAgent()
