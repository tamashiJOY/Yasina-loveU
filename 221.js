/* Общий стиль */
body {
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #ff9a9e, #fad0c4);
    font-family: Arial, sans-serif;
    overflow: hidden;
  }
  
  /* Текст сверху */
  .text {
    font-size: 2rem;
    font-weight: bold;
    color: white;
    margin-bottom: 30px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    z-index: 10;
    opacity: 0;
    animation: fadeInText 1s ease-out forwards;
    animation-delay: 1s; /* Появление текста с задержкой */
  }
  
  /* Анимация появления текста */
  @keyframes fadeInText {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  
  /* Контейнер для большого сердца */
  .big-heart {
    position: relative;
    width: 200px;
    height: 200px;
    transform: rotate(-45deg);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
    animation: growHeart 3s ease-out forwards;
  }
  
  /* Анимация роста сердца */
  @keyframes growHeart {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(5);
    }
  }
  
  /* Маленькие сердечки */
  .small-heart {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: red;
    transform: rotate(-45deg) scale(0);
    animation: growHeart 2s ease-out forwards;
    opacity: 0;
  }
  
  /* Анимация для маленьких сердечек */
  @keyframes growHeart {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    50% {
      transform: scale(0.5);
      opacity: 0.5;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  
  /* Сердечки, создающие эффект парящих объектов */
  .small-heart:before,
  .small-heart:after {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: red;
    border-radius: 50%;
  }
  
  .small-heart:before {
    top: -10px;
    left: 0;
  }
  
  .small-heart:after {
    top: 0;
    left: -10px;
  }
