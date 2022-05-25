function adicionarFilme() {
  //puxando e guardando informação do butão. 
  var campofilmeFavorito = document.getElementById('filme').value;
  var elementoFilmeFavorito = '<img src=' + filmeFavorito + '>'
  var elementoListaFilmes = document.getElementById('listaFilmes');
  elementoListaFilmes.innerHTML = elementoFilmeFavorito
  console.log('clicou');  
}