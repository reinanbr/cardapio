// import { readEmojis } from "./readEmojis.js";

import { datetime,monthsName } from "./makeBaseDate.js";

let dt = datetime()
export const readFood = () =>{
    fetch('https://reysofts.com.br/apis/cardapio/read_food.php')
    .then((res)=>{
       
        return res.json();
    })
    .then((json)=>{
        //console.log(Object.values(json)[0])
        let foodValues = Object.values(json)
        let foodKeys = Object.keys(json)

        let lastFood = foodValues[foodValues.length-1]
        let lastFoodKey = lastFood.foodKey

        // readEmojis(lastFoodKey)
        console.log(lastFood)

        $('#foodName').text(lastFood.foodName)


        let date = `${dt.day} ${monthsName[dt.month]} ${dt.year}`
        let contentDescriptionSite = `O lanche do dia ${date} é: ${lastFood.foodName}`

        console.log(contentDescriptionSite)
        $('meta[name="description"]').attr('content', contentDescriptionSite);
        $('meta[name="og:description"]').attr('content', contentDescriptionSite);
        document.head.querySelector('meta[name="description"]').content = contentDescriptionSite
        document.head.querySelector('meta[name="og:description"]').content = contentDescriptionSite


        $('#updateDateFood').text(`Cardápio atualizado às ${lastFood.hora-3}:${lastFood.minuto}, do dia ${lastFood.dia} ${monthsName[lastFood.mes-1]} ${lastFood.ano}.`)
        $('#sja').text('Sujeito a alterações.')
    })
    .catch((e)=>{
        $('#errorInfo').html(`
        <div class="alert alert-danger">
          <strong>ServerError!</strong> ${e}
        </div>`);
    })
}

