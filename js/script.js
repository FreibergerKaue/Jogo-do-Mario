const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const score = document.querySelector('.score');

let count = 0;

const jump = () => {
    mario.classList.add('jump')

    setTimeout(()=> {
        mario.classList.remove('jump')
    }, 500)
}

const loop = setInterval(() => {
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        pipe.style.animation = 'none';
        pipe.style.left = `${marioPosition}px`;

        mario.src = './images/game-over.png'
        mario.style.width = '95px'
        mario.style.marginLeft = '50px'
        
    count = 0;

        clearInterval(loop);
    }
    
    count++;
    score.innerHTML = `SCORE: ${count}`;
    
}, 10);

document.addEventListener('keydown', jump);






















setInterval(() => {
    let dinoBottom = parseInt(
      window.getComputedStyle(dino).getPropertyValue("bottom")
    );
    let cactoLeft = parseInt(
      window.getComputedStyle(cacto).getPropertyValue("left")
    );
  
    if (cactoLeft > 40 && cactoLeft < 270 && dinoBottom <= 50 && !alreadyJump) {
      alert(`Game Over! Seu score foi: ${count}`);
      count = 0;
    }
  
    count++;
    score.innerHTML = `SCORE: ${count}`;
  }, 10);
  