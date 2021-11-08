closeIcon = document.querySelector(".icon-close");
modal = document.getElementById("modal");
btnRules = document.querySelector(".btn-rules");
step1Wrapper = document.getElementById("step1wrapper");
step1 = document.querySelector(".step1");
step2 = document.querySelector(".step2");
chosenCircle = document.getElementById("chosenCircle");
computerChoice = document.getElementById("computerChoice");
player1score = document.getElementById("score");
message = document.getElementById("message");
playAgain = document.getElementById("playAgain");
darkCircle = document.querySelector(".dark-circle");

let score = 0;
let p1Choice = "";
let p2Choice = "";

//EVENT LISTENERS
closeIcon.addEventListener("click", () => modal.classList.remove("active"));
btnRules.addEventListener("click", () => modal.classList.add("active"));
modal.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    modal.classList.remove("active");
  }
});

playAgain.addEventListener("click", () => {
  step1.style.display = "block";
  step2.style.display = "none";
  step2.classList.remove("finish");
  message.style.display = "none";
  message.style.visibility = "hidden";
  chosenCircle.classList.remove(p1Choice, "winner");
  computerChoice.classList.remove(p2Choice, "winner");
  darkCircle.style.display = "block";
  setTimeout;
});

function playGame() {
  step1Wrapper.addEventListener("click", (e) => {
    const circleClicked = e.target.closest(".circle4");
    if (circleClicked) {
      p1Choice = circleClicked.closest(".circle").id;
      chosenCircle.classList.add(p1Choice);
      step1.style.display = "none";
      step2.style.display = "block";
      message.style.display = "block";
    }
    setTimeout(function () {
      const randomNumber = Math.floor(Math.random() * 3) + 1;
      darkCircle.style.display = "none";
      if (randomNumber === 1) {
        p2Choice = "paper";
      } else if (randomNumber === 2) {
        p2Choice = "scissors";
      } else {
        p2Choice = "rock";
      }
      computerChoice.classList.add(p2Choice);
      const winnerObj = {
        paper: ["spock", "rock"],
        scissors: ["lizard", "paper"],
        rock: ["scissors", "lizard"],
        lizard: ["paper", "spock"],
        spock: ["scissors", "rock"],
      };
      const evalWinner = (p1, p2) => {
        if (p1 === p2) {
          message.querySelector("h1").innerText = "draw";
          step2.classList.add("finish");
          chosenCircle.classList.remove("winner");
          computerChoice.classList.remove("winner");
        } else if (winnerObj[p1].includes(p2)) {
          score++;
          player1score.innerText = score;
          chosenCircle.classList.add(p1Choice, "winner");
          computerChoice.classList.remove("winner");
          message.querySelector("h1").innerText = "you win";
          step2.classList.add("finish");
        } else {
          score--;
          player1score.innerText = score;
          computerChoice.classList.add("winner");
          chosenCircle.classList.remove("winner");
          message.querySelector("h1").innerText = "you lose";
          step2.classList.add("finish");
        }
        message.style.visibility = "visible";
      };
      evalWinner(p1Choice, p2Choice);
    }, 1000);
  });
}

playGame();
