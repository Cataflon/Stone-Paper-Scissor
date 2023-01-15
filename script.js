const result = document.querySelector(".resultImg");
const endMessage = document.querySelector(".resultMessage");
const stoneButton = document.querySelector(".stoneImg");
const paperButton = document.querySelector(".paperImg");
const scissorsButton = document.querySelector(".scissorsImg");

const arr = ["hartie.png", "piatra.png", "foarfeca.png"];

let clickResult;

stoneButton.addEventListener("click", () => {
  clickResult = "piatra";
  stoneButton.style.borderColor = "yellow";
  setTimeout(() => {
    stoneButton.style.borderColor = "brown";
  }, 2500);
  randomImg();
});
paperButton.addEventListener("click", () => {
  clickResult = "hartie";
  paperButton.style.borderColor = "yellow";
  setTimeout(() => {
    paperButton.style.borderColor = "brown";
  }, 2500);
  randomImg();
});
scissorsButton.addEventListener("click", () => {
  clickResult = "foarfeca";
  scissorsButton.style.borderColor = "yellow";
  setTimeout(() => {
    scissorsButton.style.borderColor = "brown";
  }, 2500);
  randomImg();
});

const randomImg = () => {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      result.src = arr[Math.floor(Math.random() * 3)];
    }, 200 * i);
  }

  setTimeout(() => {
    if (result.src.includes(clickResult)) {
      endMessage.innerHTML = "Remiza";
      setTimeout(() => {
        endMessage.innerHTML = "";
      }, 3000);
    }
    if (result.src.includes("piatra") && clickResult === "hartie") {
      endMessage.innerHTML = "Ai Castigat!";
      setTimeout(() => {
        endMessage.innerHTML = "";
      }, 3000);
    }
    if (result.src.includes("piatra") && clickResult === "foarfeca") {
      endMessage.innerHTML = "Ai Pierdut";
      setTimeout(() => {
        endMessage.innerHTML = "";
      }, 3000);
    }
    if (result.src.includes("hartie") && clickResult === "foarfeca") {
      endMessage.innerHTML = "Ai Castigat!";
      setTimeout(() => {
        endMessage.innerHTML = "";
      }, 3000);
    }
    if (result.src.includes("hartie") && clickResult === "piatra") {
      endMessage.innerHTML = "Ai Pierdut";
      setTimeout(() => {
        endMessage.innerHTML = "";
      }, 3000);
    }
    if (result.src.includes("foarfeca") && clickResult === "piatra") {
      endMessage.innerHTML = "Ai Castigat!";
      setTimeout(() => {
        endMessage.innerHTML = "";
      }, 3000);
    }
    if (result.src.includes("foarfeca") && clickResult === "hartie") {
      endMessage.innerHTML = "Ai Pierdut";
      setTimeout(() => {
        endMessage.innerHTML = "";
      }, 3000);
    }
  }, 2000);
};
