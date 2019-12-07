const box = document.querySelector('#bg');
const heroA = document.querySelector('.hero');
const nowHero = getComputedStyle(heroA);


class Enemy {
  setWraith() {
    const wraith = document.createElement('div');
    wraith.className = "wraith";
    box.appendChild(wraith);
    const nowWraith = getComputedStyle(wraith); 
    wraith.style.left = parseInt(nowWraith.left) + Math.random() * 700 + 'px'
    
    const fall = () => {
      if (parseInt(nowWraith.top) <= 505) {
        wraith.style.top = parseInt(nowWraith.top) + 1 + 'px'
      } else if ( parseInt(nowWraith.top) == 506 
      && parseInt(nowHero.left) - 40 < parseInt(nowWraith.left) 
      && parseInt(nowWraith.left) < parseInt(nowHero.left) + 34) { 
        wraith.style.backgroundPosition = '45px';
      }
    }
    setInterval(fall, 50)

    const reset = () => {
      if (parseInt(nowWraith.top) == 506) {
        box.removeChild(wraith);
      }
    }
    setInterval(reset, 5000)

  }
}
  
const makeEnemy = () => {
  const newEnemy = new Enemy()
  newEnemy.setWraith();
}

setInterval(makeEnemy, 3000)
