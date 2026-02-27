/* =========================
   CARROSSEL AUTOMÁTICO
========================= */

const imagens = document.querySelectorAll("#carrossel img");

if (imagens.length > 0) {

  let index = 0;

  function trocarImagem() {
    imagens[index].classList.remove("active");
    index = (index + 1) % imagens.length;
    imagens[index].classList.add("active");
  }

  setInterval(trocarImagem, 3000);
}


/* =========================
   CONTROLE DE FONTE
========================= */

let tamanhoFonte = 100;

function aplicarTamanhoFonte() {
  document.body.style.fontSize = tamanhoFonte + "%";
}

function aumentarFonte() {
  if (tamanhoFonte < 200) {
    tamanhoFonte += 10;
    aplicarTamanhoFonte();
  }
}

function diminuirFonte() {
  if (tamanhoFonte > 70) {
    tamanhoFonte -= 10;
    aplicarTamanhoFonte();
  }
}


/* =========================
   ACESSIBILIDADE VISUAL
========================= */

function toggleContraste() {
  document.body.classList.toggle("alto-contraste");
}

function toggleCinza() {
  document.body.classList.toggle("escala-cinza");
}


/* =========================
   ATALHOS DE TECLADO
========================= */

document.addEventListener("keydown", function(e) {

  if (e.key === "+") aumentarFonte();
  if (e.key === "-") diminuirFonte();

});


/* =========================
   MODO ESCURO
========================= */

function toggleDarkMode() {
  document.body.classList.toggle("modo-escuro");
}


/* =========================
   INDICADOR DE MOUSE (CTRL)
========================= */

const cursorIndicador = document.getElementById("cursorIndicador");
let ctrlPressionado = false;

document.addEventListener("keydown", function(e) {
  if (e.key === "Control" && cursorIndicador) {
    ctrlPressionado = true;
    cursorIndicador.style.display = "block";
  }
});

document.addEventListener("keyup", function(e) {
  if (e.key === "Control" && cursorIndicador) {
    ctrlPressionado = false;
    cursorIndicador.style.display = "none";
  }
});

document.addEventListener("mousemove", function(e) {
  if (ctrlPressionado && cursorIndicador) {
    cursorIndicador.style.left = e.clientX + "px";
    cursorIndicador.style.top = e.clientY + "px";
  }
});