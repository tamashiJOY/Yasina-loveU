// Расположение сердечек для большого сердца
const heartPositions = [
  { x: 0, y: 0 },
  { x: -20, y: -20 },
  { x: 20, y: -20 },
  { x: -40, y: 0 },
  { x: 40, y: 0 },
  { x: -20, y: 20 },
  { x: 20, y: 20 },
  { x: -10, y: 10 },
  { x: 10, y: 10 },
];

// Создаем маленькие сердечки
const bigHeart = document.querySelector(".big-heart");

heartPositions.forEach((pos, index) => {
  const heart = document.createElement("div");
  heart.classList.add("small-heart");
  heart.style.transform = translate(${pos.x}px, ${pos.y}px) scale(0);
  heart.style.animationDelay = ${index * 0.2}s;
  bigHeart.appendChild(heart);
});
