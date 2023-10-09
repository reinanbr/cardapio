
import { alertBt } from "./tools/utilsTools.js";

export const sendFeedBack = () => {
    let feed = $('#inputComment').val()
    console.log(feed)
    let userAgent = navigator.userAgent;
    let urlName = window.location.href
    fetch(`https://reysofts.com.br/apis/cardapio/save_comment.php?userDevice=${userAgent}&urlName=${urlName}&comment=${feed}`)
        .then((res) => {
            console.log(res)
            if (!res.ok) {
                
                throw new Error('ERROR IN REQUEST: ' + res.status);
              }
            return res.json()
        }).then((statusComment) => {
            if (statusComment.result) {

                alertBt(`Muito obrigado!`,
                    ` Seu comentário foi enviado e salvo com sucesso!`,
                    'painelAlert',
                    'success')

                $('#inputComment').val('')
            }
            else {
                alertBt(`Oops!`,
                    ` Tivemos algum problema com salvamento de seu comentario. Tente novamente mais tarde.`,
                    'painelAlert',
                    'Alert')

            }
        })
        .catch((e) => {
            alertBt('Oops!',
            `Tivemos algum problema com o nosso servidor. Tente novamente mais tarde. ERROR: ${e}`,
            'painelAlert',
            'danger')
            console.log(e)
        })
}