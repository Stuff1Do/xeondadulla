const pomodoroProject = document.querySelector('#pomodoro')
const bounceProject = document.querySelector('#bounceblitz')
const guacamole = document.querySelector('#guacamole')
const pocketChess = document.querySelector('#pocketchess')
pomodoroProject.addEventListener('click', () => {
    window.open("https://pomodoro-xd.vercel.app/", "_blank", "noopener,noreferrer");
})

bounceProject.addEventListener('click', ()=>{
    window.open("https://github.com/Stuff1Do/BounceBlitz", "_blank", "noopener, noreferrer")
})

guacamole.addEventListener('click', ()=>{
    window.open("https://stuff1do.github.io/super-duper-guacamole/", "_blank", "noopener, noreferrer")
})

pocketChess.addEventListener('click', ()=>{
    window.open("https://stuff1do.github.io/pocket-chess/index.html", "_blank", "noopener, noreferrer")
})