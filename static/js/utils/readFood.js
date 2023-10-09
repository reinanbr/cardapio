// import { readEmojis } from "./readEmojis.js";

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
        $('#updateDateFood').text(`Cardápio atualizado às ${lastFood.hora}:${lastFood.minuto} do dia ${lastFood.dia}/${lastFood.mes}/${lastFood.ano}`)
    })
    .catch((e)=>{
        $('#errorInfo').html(`
        <div class="alert alert-danger">
          <strong>ServerError!</strong> ${e}
        </div>`);
    })
}

