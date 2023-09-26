export const readFood = () =>{
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

