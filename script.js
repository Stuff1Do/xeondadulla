document.addEventListener('DOMContentLoaded', () => {
  const pomodoroProject = document.querySelector(".pomodoro");
  const bounceProject = document.querySelector('.bounceblitz');
  const guacamole = document.querySelector('.guacamole');
  const pocketChess = document.querySelector('.pocketchess');
  const navBar = document.querySelector('.nav-bar');
  const hamburger = document.querySelector('.hamburger');

  if (pomodoroProject) {
    pomodoroProject.addEventListener('click', () => {
      window.open("https://pomodoro-xd.vercel.app/", "_blank", "noopener,noreferrer");
    });
  }

  if (bounceProject) {
    bounceProject.addEventListener('click', () => {
      window.open("https://github.com/Stuff1Do/BounceBlitz", "_blank", "noopener,noreferrer");
    });
  }

  if (guacamole) {
    guacamole.addEventListener('click', () => {
      window.open("https://stuff1do.github.io/super-duper-guacamole/", "_blank", "noopener,noreferrer");
    });
  }

  if (pocketChess) {
    pocketChess.addEventListener('click', () => {
      window.open("https://stuff1do.github.io/pocket-chess/index.html", "_blank", "noopener,noreferrer");
    });
  }

  if (hamburger && navBar) {
    hamburger.addEventListener('click', () => {
      navBar.classList.toggle('is-open');
    });
  }

  const navLinks = document.querySelectorAll('.nav-bar > div a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navBar) {
        navBar.classList.remove('is-open');
      }
    });
  });

  
});