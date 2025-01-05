document.addEventListener("DOMContentLoaded", function() {
    const heartContainer = document.querySelector(".big-heart");
  
    // Функция для добавления маленьких сердечек
    function createHeart() {
      const heart = document.createElement("div");
      heart.classList.add("small-heart");
  
      // Случайная позиция для маленького сердечка
      const randomX = Math.random() * 100 - 50; // случайное смещение по X
      const randomY = Math.random() * 100 - 50; // случайное смещение по Y
  
      heart.style.left = `${randomX}%`;
      heart.style.top = `${randomY}%`;
  
      heartContainer.appendChild(heart);
  
      // Удаляем сердце через 2 секунды
      setTimeout(() => {
        heart.remove();
      }, 2000);
    }
  
    // Добавляем маленькие сердечки каждые 200ms
    setInterval(createHeart, 200);
  });
