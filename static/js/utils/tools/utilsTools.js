export function countRepeat(lista) {
  let contagem = {};

  lista.forEach(termo => {
    contagem[termo] = (contagem[termo] || 0) + 1;
  });

  return contagem;
}



export function alertBt(title, text, idDivPainel, mode) {
  $(`#${idDivPainel}`).append(` <div class="alert alert-${mode} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${text}
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>`)
}