const increaseBtn = document.getElementById("plus");
const decreaseBtn = document.getElementById("minus");
const textElements = document.querySelectorAll(".des");
let fontSize = 1.5;

increaseBtn.addEventListener("click", () => {
  if (fontSize < 4) {
    fontSize += 0.5;
    textElements.forEach((el) => (el.style.fontSize = fontSize + "em"));
  }
});

decreaseBtn.addEventListener("click", () => {
  if (fontSize > 1) {
    fontSize -= 0.5;
    textElements.forEach((el) => (el.style.fontSize = fontSize + "em"));
  }
});