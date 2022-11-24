function adicionarFilme() {
  console.log("clicou");
  var filmeFav = document.getElementById("filme").value;

  var tela = document.querySelector("#tela");

  if (filmeFav.endsWith(".jpg")) {
    filmesListados(filmeFav);
  } else {
    tela.innerHTML =
      "URL da imagem inválido! Adicione uma URL que possua jpg ao final do link";
  }
  document.getElementById("filme").value = "";
}
function filmesListados(filmes) {
  var filmeFavorito = "<img src=" + filmes + ">";
  var listaFilmes = document.getElementById("listaFilmes");
  listaFilmes.innerHTML += filmeFavorito;
}