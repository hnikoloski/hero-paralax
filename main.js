import './style.css'

$(document).ready(function () {
  const heroParallax = $(".mm-parallax");

  $(".hero-wrap").mousemove(function (event) {
    const windowWidth = Math.ceil(window.innerWidth / 1.5);
    const windowHeight = Math.ceil(window.innerHeight / 1.5);
    const offsetX = event.pageX - windowWidth;
    const offsetY = event.pageY - windowHeight;
    const percentY = offsetY / windowHeight;
    const percentX = -(offsetX / windowWidth);
    const distance = Math.sqrt(Math.pow(percentY, 2) + Math.pow(percentX, 2));
    const rotation = 10 * distance;

    heroParallax.css("transform", `rotate3d(${percentY}, ${percentX}, 0, ${rotation}deg)`);
  });

  function shuffleArray(array) {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    while (currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex--);
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  shuffleArray(heroAnim);
});
