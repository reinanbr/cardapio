import { countRepeat } from "./tools/utilsTools.js";

export const readEmojis=(foodKey)=>{
    fetch(`https://reysofts.com.br/apis/read_emojis.php`)
    .then((res)=>{
        return res.json();
    })
    .then((json)=>{
        let emojisFoodData = json[foodKey]
        let listEmojis = [];

 
        for (let ip in emojisFoodData){
            listEmojis.push(emojisFoodData[ip].emoji)
        }

        console.log(listEmojis)

        let ctEmjs = countRepeat(listEmojis)
        for (let emj in ctEmjs){
            console.log(ctEmjs[emj])
            let valueEmj = ctEmjs[emj]
            let spanCtEmj = `<span style="{color:grey;}">${valueEmj}${emj}</span>`
            $("#showEmojis").append(spanCtEmj);
        }
    })
    .catch((e)=>{
        $('#errorInfo').html(`
        <div class="alert alert-danger">
          <strong>ServerError!</strong> ${e}
        </div>`);
    })
}