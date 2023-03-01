const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const score = document.querySelector('.score');
const gameOver = document.querySelector('.gameOver')
const jogarnovamente = document.querySelector('.jogarnovamente')
const die = document.querySelector('.die')

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
    
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 120) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        pipe.style.animation = 'none';
        pipe.style.left = `${marioPosition}px`;

        mario.src = './images/game-over.png'
        mario.style.width = '95px'
        mario.style.marginLeft = '50px'

        jogarnovamente.style.color = '#000'

        alert(`Você perdeu...Sua pontuação: ${count}`);
    count = 0;

        clearInterval(loop);
    }
    
    count++;
    score.innerHTML =  `SCORE: ${count}`;
    
}, 10);

document.addEventListener('keydown', jump);


document.addEventListener('keydown', function(){
    let audio1 = document.querySelector('audio', '.jumpSound')
    audio1.play()
});
