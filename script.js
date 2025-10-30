
const imagens = document.querySelectorAll("#carrossel img");
let index = 0;

function trocarImagem() {
  
  imagens[index].classList.remove("active");  
  index = (index + 1) % imagens.length;
  imagens[index].classList.add("active");
}

setInterval(trocarImagem, 3000);
