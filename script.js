document.addEventListener("DOMContentLoaded", (e) => {
  console.log(e);
  cardGenerator();
  board();
});

const cardGenerator = () => {
  //We generate the object 🧑🏻‍💻
  let cardData = [
    { imgSrc: "./images/agent-1.png", id: 1, name: "Breach" },
    { imgSrc: "./images/agent-2.png", id: 2, name: "Kill Joy" },
    { imgSrc: "./images/agent-3.png", id: 3, name: "Reyna" },
    { imgSrc: "./images/agent-4.png", id: 4, name: "Jett" },
    { imgSrc: "./images/agent-5.png", id: 5, name: "Cypher" },
    { imgSrc: "./images/agent-6.png", id: 6, name: "Phoenix" },
    { imgSrc: "./images/agent-7.png", id: 7, name: "Raze" },
    { imgSrc: "./images/agent-8.png", id: 8, name: "Viper" },
    { imgSrc: "./images/agent-1.png", id: 9, name: "Breach" },
    { imgSrc: "./images/agent-2.png", id: 10, name: "Kill Joy" },
    { imgSrc: "./images/agent-3.png", id: 11, name: "Reyna" },
    { imgSrc: "./images/agent-4.png", id: 12, name: "Jett" },
    { imgSrc: "./images/agent-5.png", id: 13, name: "Cypher" },
    { imgSrc: "./images/agent-6.png", id: 14, name: "Phoenix" },
    { imgSrc: "./images/agent-7.png", id: 15, name: "Raze" },
    { imgSrc: "./images/agent-8.png", id: 16, name: "Viper" },
  ];

  //We need to shuffle the cards 🃏
  cardData.sort(() => Math.random() - 0.5);

  //We generate the cards ♣️
  cardData.forEach((item) => {
    const section = document.querySelector("section");
    const card = document.createElement("div");
    card.classList = "card";

    card.setAttribute("id", item.id);
    card.setAttribute("name", item.name);

    const face = document.createElement("img");
    face.classList = "face";
    //attach the info to the cards
    face.src = item.imgSrc;
    card.setAttribute("name", item.name);

    const back = document.createElement("div");
    back.classList = "back";

    //attach the cards to section
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener("click", (e) => {
      console.log(e);
      //Run our flip animation
      face.classList.toggle("toggleCard");
      card.classList.toggle("toggleCard");
      checkCards(e);
    });
  });

  //
};

const board = () => {
  console.log("i will fight you");
};

//check cards
const checkCards = (e) => {
  const clickedCard = e.target;
  clickedCard.classList.add("flipped");
  const flippedCards = document.querySelectorAll(".flipped");
  const toggleCard = document.querySelectorAll("toggleCard");

  console.log(flippedCards);

  //logic
  if (flippedCards.length === 2) {
    if (
      flippedCards[0].getAttribute("name") ===
      flippedCards[1].getAttribute("name")
    ) {
      console.log("match");
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        card.style.pointerEvents = "none";
      });
    } else {
      console.log("wrong");
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");

        setTimeout(() => card.classList.remove("toggleCard"), 1000);
      });
      playerLives--;

      console.log(playerLives);
      playerLivesCount.textContent = playerLives;
      if (playerLives === 0) {
        restart("Try Again");
      }
    }
  }
  //run to check to see if we won the game
  if (toggleCard.length === 16) {
    restart("yaaay You won");
  }
};
//restart
const restart = (text) => {
  let cardData = randomize();
  let faces = document.querySelectorAll(".face");
  let cards = document.querySelectorAll(".card");
  section.style.pointerEvents = "none";
  cardData.forEach((item, index) => {
    cards[index].classList.remove("toggleCard");
    //randomize
    setTimeout(() => {
      cards[index].style.pointerEvents = "all";
      faces[index].src = item.imgSrc;
      cards[index].setAttribute("name", item.name);
      section.style.pointerEvents = "all";
    }, 1000);
  });
  playerLives = 6;
  playerLivesCount.textContent = playerLives;
  setTimeout(() => window.alert(text), 100);
};

//Toggle Cards
// document.addEventListener("click", (event) => {
//   console.log(event);
//   if(event.target === '')
// });

//grab a couple of things
const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives = 6;
const yourScore = 0;

//link text
playerLivesCount.textContent = playerLives;

//randomize
const randomize = () => {
  const cardData = getData();
  cardData.sort(() => Math.random() - 0.5);
  return cardData;
};

//generate the data
const getData = () => [
  { imgSrc: "./images/agent-1.png", id: 1, name: "Breach" },
  { imgSrc: "./images/agent-2.png", id: 2, name: "Kill Joy" },
  { imgSrc: "./images/agent-3.png", id: 3, name: "Reyna" },
  { imgSrc: "./images/agent-4.png", id: 4, name: "Jett" },
  { imgSrc: "./images/agent-5.png", id: 5, name: "Cypher" },
  { imgSrc: "./images/agent-6.png", id: 6, name: "Phoenix" },
  { imgSrc: "./images/agent-7.png", id: 7, name: "Raze" },
  { imgSrc: "./images/agent-8.png", id: 8, name: "Viper" },
  { imgSrc: "./images/agent-1.png", id: 9, name: "Breach" },
  { imgSrc: "./images/agent-2.png", id: 10, name: "Kill Joy" },
  { imgSrc: "./images/agent-3.png", id: 11, name: "Reyna" },
  { imgSrc: "./images/agent-4.png", id: 12, name: "Jett" },
  { imgSrc: "./images/agent-5.png", id: 13, name: "Cypher" },
  { imgSrc: "./images/agent-6.png", id: 14, name: "Phoenix" },
  { imgSrc: "./images/agent-7.png", id: 15, name: "Raze" },
  { imgSrc: "./images/agent-8.png", id: 16, name: "Viper" },
];
