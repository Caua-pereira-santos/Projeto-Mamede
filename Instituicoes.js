function showModal(info) {
  const modal = document.getElementById("imageModal");
  const imageInfo = document.getElementById("imageInfo");

  imageInfo.innerHTML = info;
  modal.style.display = "block";
}

// Função para fechar o modal
function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  const clickableImages = document.querySelectorAll(".clickable-image");

  clickableImages.forEach(function (image) {
    image.addEventListener("click", function () {
      const info = image.getAttribute("data-info");
      showModal(info);
    });
  });

  const modal = document.getElementById("imageModal");
  const closeButton = modal.querySelector(".close");

  closeButton.addEventListener("click", closeModal);
});
