const Mario = document.querySelector(".mario");
const Pipe = document.querySelector(".pipe");
const reload = document.querySelector(".button")

const Jump = () => {
  Mario.classList.add("pular");

  setTimeout(() => {
    Mario.classList.remove("pular");
  }, 500);
};
const loop = setInterval(() => {
  const pipePosition = Pipe.offsetLeft;
  const marioPisition = +window
    .getComputedStyle(Mario)
    .bottom.replace("px", "");
  console.log(marioPisition);


  //eu que fiz 
const gameReload = window.getComputedStyle(reload).display

  if (pipePosition <= 64 && pipePosition > 0 && marioPisition < 70) {
    Pipe.style.animation = "none";
    Pipe.style.left = `${pipePosition}px`;

    Mario.style.animation = "none";
    Mario.style.bottom = `${marioPisition}px`;

    Mario.src = "./img/game-over.png";
    Mario.style.width = "75px";

    reload.style.display='flex'

  }


}, 10);

document.addEventListener("keydown", Jump);
