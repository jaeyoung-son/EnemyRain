/*class Hero {
  
} */
const hero = document.querySelector('.hero');
const now = getComputedStyle(hero);

const moveEvent = (e) => {
    if (e.keyCode == 37 && parseInt(now.left) > 10) {
        hero.style.backgroundPosition = "-70px 0"
        hero.style.left = parseInt(now.left) - 10 + 'px'
    } else if (e.keyCode == 39 && parseInt(now.left) < 755)  {
        hero.style.backgroundPosition = "-105px 0"
        hero.style.left = parseInt(now.left) + 10 + 'px'
    }
}

const front = () => {
    hero.style.backgroundPosition = "0"
}

window.addEventListener('keydown', moveEvent);
window.addEventListener('keyup', front);

