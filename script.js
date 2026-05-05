const container = document.getElementById("flower-container");

// Array con diferentes flores PNG
const flowers = [
  "img/flor1.webp",
  "img/flor2.png",
  "img/flor3.png",
  "img/flor4.png"
];

function createFlower() {
  const flower = document.createElement("img");
  flower.classList.add("flower");

  // Seleccionar una flor aleatoria
  const randomFlower = flowers[Math.floor(Math.random() * flowers.length)];
  flower.src = randomFlower;

  // Posición aleatoria en X
  flower.style.left = Math.random() * window.innerWidth + "px";

  // Tamaño aleatorio para que no todas sean iguales
  const size = 30 + Math.random() * 30; // entre 30px y 60px
  flower.style.width = size + "px";
  flower.style.height = size + "px";

  // Duración de caída aleatoria
  const duration = 4 + Math.random() * 5;
  flower.style.animationDuration = duration + "s";

  container.appendChild(flower);

  // Eliminar después de caer
  setTimeout(() => {
    flower.remove();
  }, duration * 1000);
}

// Inicia solo en flowers.html
if (container) {
  setInterval(createFlower, 400); // cada 0.4s aparece una flor
}
