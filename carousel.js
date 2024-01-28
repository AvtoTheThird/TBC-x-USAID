let state = 1;
function updateImages() {
  const images = document.querySelectorAll("#image-container img");
  // console.log(images);
  images.forEach((img, index) => {
    const isVisible = index >= (state - 1) * 3 && index < state * 3;
    img.classList.add("FadeIn");
    setTimeout(() => {
      img.style.display = isVisible ? "block" : "none";
    }, 500);
    img.style.opacity = isVisible ? 1 : 0;
  });
}

function incrementState() {
  state = (state % 3) + 1;
  updateImages();
}
function setStateTo1() {
  state = 1;
  updateImages();
}
function setStateTo2() {
  state = 2;
  updateImages();
}
function setStateTo3() {
  state = 3;
  updateImages();
}

function decrementState() {
  state = state === 1 ? 3 : state - 1;
  updateImages();
}

setInterval(() => {
  incrementState();
}, 4000);

// Initial display
updateImages();
