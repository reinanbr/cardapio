/** 
 * Como a página é totalmente front end hospedada pelo github, ela não possui sitema de segurança e monitoramento para averiguar a quantidade
 * de acessos e requerimentos.
 * Com isso, criei a função abaixo para ter a noção dos UserAgents que tem acesso este projeto Open Source, e assim criar uma estimativa da
 * quantidade de acessos na página.
 */

export function saveUserAgent() {
    let userAgent = navigator.userAgent;
    let urlName = window.location.href

    let dt = new Date();
    let dateAcess = `${dt.getDate()}/${dt.getMonth() + 1}/${dt.getUTCFullYear()}`;
    let hourAcess = `${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()}`;

    $("#info_device").text(userAgent)
    let timeNow = Date.now()
    fetch(`https://reysofts.com.br/apis/cardapio/save_security.php?userDevice=${userAgent}&urlName=${urlName}`).then(res => res.json()).then((res) => {
        console.log(res)
    }).catch((e) => {
        console.log(e)
    })
}

// saveUserAgent()
