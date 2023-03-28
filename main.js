function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  if (elemento != null && elemento.localName === "audio") {
    elemento.play();
  } else {
    // alert("Elemento não encontrado");
    console.log("Elemento não encontrado ou seletor inválido");
  }
}
const listaDeTeclas = document.querySelectorAll(".tecla");
//Para
for (let i = 0; i < listaDeTeclas.length; i++) {
  const tecla = listaDeTeclas[i];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function () {
    tocaSom(idAudio);
  };
  //Add evento no teclado com o onkeydown
  tecla.onkeydown = function (evento) {
    if (evento.code === "Space" || evento.code === "Enter") {
      tecla.classList.add("ativa");
    }
  };
  //Add evento no teclado com o onkeyup
  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}
