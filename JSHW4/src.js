{
let userInput = prompt("Введіть число")
let number = parseFloat(userInput)

if (isNaN(number)) {
  alert("Введено некоректне число")
} else {
  if (number % 2 === 0) {
    alert(`${number} є парним числом`)
  } else {
    alert(`${number} є непарним числом`)
  }
}
}
const answer1 = confirm("Ви задоволені своєю роботою?")
const answer2 = confirm("Ви готові до нових викликів?")
const answer3 = confirm("Вам подобається цей додаток?")
let ageConfirmation = confirm("Вам є 18 років?")
let genderConfirmation = confirm("Ви жінка?")

if (ageConfirmation) {
  if (genderConfirmation) {
    alert("Ви жінка")
  } else {
    alert("Ви чоловік")
  }
} else {
  alert("Вам немає 18 років")
}


let meters = prompt("Введіть довжину в метрах:")
let feet = meters * 3.28084
let inches = feet * 12

alert(`${meters} метрів = ${feet.toFixed(2)} футів`) 

let isMale = confirm("Ви чоловік?")
isMale ? alert("Ви чоловік") : alert("Ви жінка")


let age = prompt("Введіть ваш вік:")
if (!age || age === "") {
  alert("Помилка: вік не введено!")
} else {
  alert(`Ваш вік: ${age}`)
}


let isShopping = confirm("Хочете піти на шопінг?")
if (!isShopping) {
  alert("Ти - бяка")
}
{
let isShopping = confirm("Хочете піти на шопінг?")
if (isShopping) {
  alert("Гарно проведіть час на шопінгу!")
} else {
  alert("Ти - бяка")
    }
}

let firstName = prompt("Введіть ім'я:") || "Іван";
let lastName = prompt("Введіть прізвище:") || "Іванов";
let middleName = prompt("Введіть по батькові:") || "Іванович";

{
    let firstName = prompt("Введіть ім'я:")
    if (firstName === "" || firstName === null) {
        firstName = "Іван"
    }

    let lastName = prompt("Введіть прізвище:")
    if (lastName === "" || lastName === null) {
        lastName = "Іванов"
    }

    let middleName = prompt("Введіть по батькові:")
    if (middleName === "" || middleName === null) {
        middleName = "Іванович"
    }

}

let login = prompt("Введіть логін:")

if (login === "admin") {
  let password = prompt("Введіть пароль:")

  if (password === "qwerty") {
    alert("Ласкаво просимо, " + login + "!")
  } else {
    alert("Невірний пароль!")
  }
} else {
  alert("Невірний логін!")
}

let currency = prompt("Введіть назву валюти (наприклад, USD або EUR)");
let isBuying = confirm("Ви бажаєте купити валюту?");

let rate;

if (currency.toUpperCase() === "USD") {
  rate = isBuying ? 38.5 : 38.0;
} else if (currency.toUpperCase() === "EUR") {
  rate = isBuying ? 40.5 : 40.0;
} else {
  alert("Невірна назва валюти");
}

if (rate) {
  let amount = +prompt("Введіть суму в гривнях");

  if (isNaN(amount) || amount <= 0) {
    alert("Невірна сума");
  } else {
    let result = isBuying ? amount / rate : amount * rate;
    alert(`Ви отримаєте ${result.toFixed(2)} ${isBuying ? currency : "грн"}`);
  }
}



let playerSelection = prompt("Введіть 'камінь', 'ножиці' або 'папір'")
let computerSelection
let random = Math.floor(Math.random() * 3)
if (random === 0) {
  computerSelection = "камінь"
} else if (random === 1) {
  computerSelection = "ножиці"
} else {
  computerSelection = "папір"
}
alert(`Комп'ютер вибрав ${computerSelection}`)
let result
if (playerSelection.toLowerCase() === computerSelection) {
  result = "нічия"
} else if (
  (playerSelection.toLowerCase() === "камінь" && computerSelection === "ножиці") ||
  (playerSelection.toLowerCase() === "ножиці" && computerSelection === "папір") ||
  (playerSelection.toLowerCase() === "папір" && computerSelection === "камінь")
) {
  result = "гравець"
} else {
  result = "комп'ютер"
}

alert(`Переможець: ${result}`)
