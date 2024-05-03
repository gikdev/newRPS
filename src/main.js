import "./styles.css"

let aiScore = 0
let userScore = 0
const isPersian = document.querySelector('html').lang === 'fa'
const allChoices = ["rock", "paper", "scissors"]
const $ = {
  userScore: document.querySelector("#user-score"),
  userChoice: document.querySelector("#user-choice"),
  aiScore: document.querySelector("#ai-score"),
  aiChoice: document.querySelector("#ai-choice"),
  message: document.querySelector("#message"),
  btns: document.querySelectorAll("button"),
}
const styles = {
  win: "text-green-500",
  lose: "text-orange-500",
  draw: "text-gray-400",
}
const conditions = {
  // 0: lose - 1: draw - 2: won
  rock:     { rock: 1, paper: 0, scissors: 2 },
  paper:    { rock: 2, paper: 1, scissors: 0 },
  scissors: { rock: 0, paper: 2, scissors: 1 },
}

function translateChoice(choice) {
  if (choice === "rock")     return "سنگ"
  if (choice === "paper")    return "کاغذ"
  if (choice === "scissors") return "قیچی"
}

function translateNumbers(number) {
  let finalNum = number.toString()
  finalNum = finalNum.replace("0", "۰")
  finalNum = finalNum.replace("1", "۱")
  finalNum = finalNum.replace("2", "۲")
  finalNum = finalNum.replace("3", "۳")
  finalNum = finalNum.replace("4", "۴")
  finalNum = finalNum.replace("5", "۵")
  finalNum = finalNum.replace("6", "۶")
  finalNum = finalNum.replace("7", "۷")
  finalNum = finalNum.replace("8", "۸")
  finalNum = finalNum.replace("9", "۹")
  return finalNum
}

function playRPS(userChoice) {

  // choose random choice for AI
  const aiChoice = allChoices[Math.floor(Math.random() * 3)]

  // show the choices on the screen
  $.userChoice.textContent = isPersian ? translateChoice(userChoice) : userChoice
  $.aiChoice.textContent = isPersian ? translateChoice(aiChoice) : aiChoice

  // determine the winner
  switch (conditions[userChoice][aiChoice]) {
    case 2:
      message.setAttribute("class", styles.win)
      message.textContent = isPersian ? "بردی! 🥳" : "You Won! 🥳"
      userScore++
      break
    case 0:
      message.setAttribute("class", styles.lose)
      message.textContent = isPersian ? "باختی! 😥" : "You Lost! 😥"
      aiScore++
      break
    default:
      message.setAttribute("class", styles.draw)
      message.textContent = isPersian ? "تساوی! 😐" : "Draw! 😐"
  }

  // show the scores on the screen
  $.aiScore.textContent = isPersian ? translateNumbers(aiScore) : aiScore
  $.userScore.textContent = isPersian ? translateNumbers(userScore) : userScore
}

$.btns.forEach(btn => 
  btn.addEventListener("click", () => 
    playRPS(btn.getAttribute("data-choice"))))
