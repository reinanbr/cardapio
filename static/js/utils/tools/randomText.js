const texts = [
    { text: "A educação é a arma mais poderosa que você pode usar para mudar o mundo.", author: "Nelson Mandela" },
    { text: "A mente que se abre a uma nova ideia jamais voltará ao seu tamanho original.", author: "Albert Einstein" },
    { text: "O único lugar onde o sucesso vem antes do trabalho é no dicionário.", author: "Vidal Sassoon" },
    { text: "A única coisa que interfere com meu aprendizado é a minha educação formal.", author: "Albert Einstein" },
    { text: "A imaginação é mais importante que o conhecimento. O conhecimento é limitado. A imaginação envolve o mundo.", author: "Albert Einstein" },
    {text:"Quem quiser ser líder deve ser primeiro servo. Se você quiser liderar, deve servir.", author:"Jesus Cristo, Mateus 20:26-27"}
    // Adicione mais texts e authores conforme necessário
];

export const randomText = () => {
    let text = texts[Math.floor(Math.random() * texts.length)];
    $('#randomTextBody').text(`"${text.text}"`)
    $('#randomTextAuthor').text(`-${text.author}`)
}

