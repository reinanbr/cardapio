export function countRepeat(lista) {
    let contagem = {};
  
    lista.forEach(termo => {
      contagem[termo] = (contagem[termo] || 0) + 1;
    });
  
    return contagem;
  }