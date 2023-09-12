const carousel = document.querySelector(".carousel");
const images = carousel.querySelectorAll("img");
const leftArrow = document.querySelector("#left");
const rightArrow = document.querySelector("#right");
let currentIndex = 0;

// Função para exibir a imagem atual
function showImage(index) {
  images.forEach((img, i) => {
    if (i === index) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  });
}

// Listener para o botão esquerdo
leftArrow.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

// Listener para o botão direito
rightArrow.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

// Exibir a primeira imagem ao carregar a página
showImage(currentIndex);
