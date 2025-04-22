let playerScore = 0;
let pcScore = 0;
const container = document.querySelector(".container");
const hurrayHtml = `<svg
        class="stars"
        width="450"
        height="257"
        viewBox="0 0 504 297"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M57.5 112L70.4096 151.732H112.186L78.3881 176.287L91.2977 216.018L57.5 191.463L23.7023 216.018L36.6119 176.287L2.81425 151.732H44.5904L57.5 112Z"
          fill="#D9D9D9"
          fill-opacity="0.83"
        />
        <path
          d="M106 51L113.633 74.4934L138.336 74.4934L118.351 89.0132L125.985 112.507L106 97.9868L86.0153 112.507L93.6488 89.0132L73.6641 74.4934L98.3665 74.4934L106 51Z"
          fill="#D9D9D9"
          fill-opacity="0.83"
        />
        <path
          d="M373.5 0L385.062 35.5856H422.479L392.208 57.5788L403.771 93.1644L373.5 71.1712L343.229 93.1644L354.792 57.5788L324.521 35.5856H361.938L373.5 0Z"
          fill="#D9D9D9"
          fill-opacity="0.83"
        />
        <path
          d="M439 160L453.593 204.914H500.819L462.613 232.672L477.206 277.586L439 249.828L400.794 277.586L415.387 232.672L377.181 204.914H424.407L439 160Z"
          fill="#D9D9D9"
          fill-opacity="0.83"
        />
        <path
          d="M238 36L241.592 47.0557H253.217L243.812 53.8885L247.405 64.9443L238 58.1115L228.595 64.9443L232.188 53.8885L222.783 47.0557H234.408L238 36Z"
          fill="#D9D9D9"
          fill-opacity="0.83"
        />
        <path
          d="M131 0L134.592 11.0557H146.217L136.812 17.8885L140.405 28.9443L131 22.1115L121.595 28.9443L125.188 17.8885L115.783 11.0557H127.408L131 0Z"
          fill="#D9D9D9"
          fill-opacity="0.83"
        />
        <path
          d="M238 36L241.592 47.0557H253.217L243.812 53.8885L247.405 64.9443L238 58.1115L228.595 64.9443L232.188 53.8885L222.783 47.0557H234.408L238 36Z"
          fill="#D9D9D9"
          fill-opacity="0.83"
        />
        <path
          d="M458 87L461.592 98.0557H473.217L463.812 104.889L467.405 115.944L458 109.111L448.595 115.944L452.188 104.889L442.783 98.0557H454.408L458 87Z"
          fill="#D9D9D9"
          fill-opacity="0.83"
        />
        <path
          d="M124 265L127.592 276.056H139.217L129.812 282.889L133.405 293.944L124 287.111L114.595 293.944L118.188 282.889L108.783 276.056H120.408L124 265Z"
          fill="#D9D9D9"
          fill-opacity="0.83"
        />
      </svg>

      <svg
        class="trophy"
        width="161"
        height="161"
        viewBox="0 0 201 201"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M31.1411 6.28125C31.1411 4.61536 31.8029 3.0177 32.9809 1.83974C34.1588 0.661773 35.7565 0 37.4224 0L163.047 0C164.713 0 166.311 0.661773 167.489 1.83974C168.667 3.0177 169.329 4.61536 169.329 6.28125C169.329 13.0399 169.178 19.4719 168.901 25.5772C173.865 26.3992 178.614 28.2068 182.868 30.8935C187.123 33.5801 190.796 37.0913 193.671 41.2202C196.547 45.349 198.566 50.0118 199.611 54.9336C200.655 59.8554 200.704 64.9366 199.754 69.8775C198.803 74.8184 196.873 79.5189 194.077 83.7019C191.281 87.8849 187.676 91.4657 183.474 94.2331C179.272 97.0005 174.558 98.8986 169.611 99.8152C164.663 100.732 159.583 100.649 154.668 99.5704C144.744 122.999 131.076 134.456 119.079 137.396V164.694L136.98 169.167C139.417 169.77 141.716 170.863 143.726 172.37L166.816 189.694C167.871 190.485 168.65 191.588 169.043 192.846C169.436 194.104 169.423 195.454 169.006 196.705C168.589 197.956 167.79 199.044 166.72 199.814C165.651 200.585 164.366 201 163.047 201H37.4224C36.104 201 34.8191 200.585 33.7497 199.814C32.6802 199.044 31.8803 197.956 31.4635 196.705C31.0466 195.454 31.0337 194.104 31.4268 192.846C31.8199 191.588 32.599 190.485 33.6536 189.694L56.7435 172.37C58.7535 170.863 61.0524 169.77 63.4896 169.167L81.3911 164.694V137.396C69.3939 134.456 55.7259 122.999 45.8016 99.5578C40.8844 100.642 35.7999 100.73 30.8483 99.8159C25.8967 98.9021 21.1784 97.0054 16.972 94.2378C12.7657 91.4701 9.15659 87.8876 6.3579 83.7018C3.5592 79.516 1.62765 74.8119 0.677325 69.8671C-0.273001 64.9224 -0.222836 59.8374 0.824858 54.9124C1.87255 49.9874 3.89653 45.3222 6.77726 41.1925C9.65799 37.0628 13.3371 33.5521 17.5972 30.868C21.8573 28.1838 26.6121 26.3806 31.5808 25.5647C31.2851 19.1411 31.1385 12.7116 31.1411 6.28125ZM32.3848 38.19C25.8295 39.3894 20.0192 43.1438 16.2321 48.6272C12.4449 54.1107 10.9911 60.8739 12.1906 67.4292C13.39 73.9845 17.1444 79.7948 22.6278 83.582C28.1113 87.3691 34.8745 88.8229 41.4298 87.6234C37.2465 74.4328 34.0431 58.1518 32.3848 38.19ZM159.052 87.6234C165.608 88.8229 172.371 87.3691 177.854 83.582C183.338 79.7948 187.092 73.9845 188.292 67.4292C189.491 60.8739 188.037 54.1107 184.25 48.6272C180.463 43.1438 174.653 39.3894 168.097 38.19C166.427 58.1644 163.223 74.4328 159.052 87.6234Z"
          fill="#FFD233"
        />
      </svg>

      <div class="hurray-text">
        <h1>HURRAY!!</h1>
        <p>YOU WON THE GAME</p>
        <button class="hurray-close-button">CLOSE</button>
      </div>`;
const gameArea = `<div class="game-container">
        <button  class="game-card rock" id="rock">
            <img src="./images/rock.jpg" alt="">
        </button>
        <button  class="game-card paper" id="paper">
            <img src="./images/paper.jpg" alt="">
        </button>
        <button class="game-card scissors" id="scissors">
            <img src="./images/scissor.jpg" alt="">
        </button>

        <div class="line one"></div>
        <div class="line two"></div>
        <div class="line three"></div>
      </div>`;
const resultArea = `<div class="result-container">
        <button class="result-card" id="rock">
          <img class="rock" src="./images/rock.jpg" alt="" />
        </button>
        <div class="result">
            <p>YOU WIN</p>
            <span>AGNIST PC</span>
            <button class="play-again-button">PLAY AGAIN</button>
        </div>
        <div>
            <button class="game-card scissors" id="scissors">
                <img src="./images/scissor.jpg" alt="">
            </button>
        </div>
      </div>`;

//Initial Setup
container.children[0].insertAdjacentHTML("afterend", gameArea);

//Event Listeners
document.getElementById("rock").addEventListener("click", () => {
  playGame("rock");
});
document.getElementById("paper").addEventListener("click", () => {
  playGame("paper");
});
document.getElementById("scissors").addEventListener("click", () => {
  playGame("scissors");
});

function playGame(playerChoice) {
  const pcChoice = getPcChoice();
  const result = getResult(playerChoice, pcChoice);
  updateScore(result);
  updateScoreboard();
  showResult(playerChoice, pcChoice, result);
}

function updateScore(result) {
  if (result === "win") playerScore++;
  else if (result === "lose") pcScore++;
}

function updateScoreboard() {
  document.getElementById("player-score").querySelector("h1").innerText =
    playerScore;
  document.getElementById("pc-score").querySelector("h1").innerText = pcScore;
}

function showResult(playerChoice, pcChoice, result) {
  if (result === "win") {
    container.innerHTML = hurrayHtml;
  } else if (result === "lose") {
    
  }
}

function getPcChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResult(playerChoice, pcChoice) {
  if (playerChoice === pcChoice) {
    return "draw";
  }
  if (
    (playerChoice === "rock" && pcChoice === "scissors") ||
    (playerChoice === "paper" && pcChoice === "rock") ||
    (playerChoice === "scissors" && pcChoice === "paper")
  ) {
    return "win";
  } else {
    return "lose";
  }
}
