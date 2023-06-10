// ДЗ: Массиви
{
    let answers = [
        confirm("Вам виповнилося 18 років?"),
        confirm("Ви хочете підписатися на розсилку?"),
        confirm("Ви згодні з нашими умовами користування?")
    ];

    console.log(answers);
} 


{
    const answers = [];

answers[0] = prompt("Як вас звати?")
answers[1] = prompt("Скількі вам років?")
answers[2] = prompt("Ваш улюблений колір?")

    console.log(answers)
} 

{
    const arr = ['Яблуко', 'Банан', 'Ківі', 'Персик']
    const index = prompt('Введіть індекс у масиві:')
    alert(`Елемент за індексом ${index} - ${arr[index]}`)
} 

{
    let arr = [1, 2, 3, 4, 5]
    let index = prompt("Введіть індекс елемента масиву:")
    let value = prompt("Введіть значення для цього індексу:")
    arr[index] = value
    console.log(arr)
}

{
    const arr = [];

for (let i = 0; i < 5; i++) {
  arr[i] = [];
  for (let j = 0; j < 5; j++) {
    arr[i][j] = (i+1) * (j+1);
  }
}

console.table(arr);
}


    const multiplicationTable = []
    for (let i = 0; i < 5; i++) {
        multiplicationTable[i] = []
        for (let j = 0; j < 5; j++) {
            multiplicationTable[i][j] = (i + 1) * (j + 1)
        }
    }
    const nonZeroMultiplicationTable = multiplicationTable.map(row => row.slice().filter(num => num !== 0))
    console.log("Таблиця множення 5x5:")
    console.table(multiplicationTable)
    console.log("Масив масивів без нулів:")
console.table(nonZeroMultiplicationTable)
    const [[a, b, ...c], [d, e, ...f], [g, h, ...i], [j, k, ...l]] = multiplicationTable;
    const nonZeroTable = [
  [a, b, ...c].filter((num) => num !== 0),
  [d, e, ...f].filter((num) => num !== 0),
  [g, h, ...i].filter((num) => num !== 0),
  [j, k, ...l].filter((num) => num !== 0),
];

console.log(nonZeroTable);
    

const copyTable = multiplicationTable.slice()
const copiedTable = JSON.parse(JSON.stringify(multiplicationTable))
const flatTable = [].concat(...multiplicationTable);
console.log(flatTable); 
console.log(flatTable.length); 
{
  const sentence = prompt("Введіть рядок з кількох слів:")
  const word = prompt("Введіть слово, яке ви шукаєте:")
	const wordIndex = sentence.indexOf(word)
	if (wordIndex === -1) {
  alert(`Слово "${word}" не знайдено в рядку "${sentence}"`)
} else {
  alert(`Слово "${word}" є ${wordIndex + 1}-им словом в рядку "${sentence}"`)
}
}

{
    
  let arr1 = []
    for (let i = 0; i < 5; i++) {
  let element = prompt(`Введіть елемент масиву  ${i + 1}:`)
  arr1.push(element)
        }
        console.log("arr1:", arr1)
    let arr2 = []
    {
    while (arr1.length > 0) {
  let element = arr1.pop()
  arr2.push(element)}
    }
    console.log("Другий масив у зворотньому порядку:", arr2)
    const reversedArr2 = []
    while (arr2.length > 0) {
  reversedArr2.unshift(arr2.shift())
    }

console.log("Другий масив знову перевернутий:", reversedArr2)
}


{
    const arr = [1, 2, 3]
    const arr2 = [...arr] 
    console.log(arr === arr2) // false
    console.log(arr.length === arr2.length) // true
    console.log(arr.every((value, index) => value === arr2[index])) // true

}
{
    const inputString = prompt('Введіть рядок:')
    const [firstLetter, , , , fifthLetter, , , , ninthLetter] = inputString
alert(`Перша літера: ${firstLetter}`)
alert(`П'ята літера: ${fifthLetter}`)
alert(`Дев'ята літера: ${ninthLetter}`)
}
{
    const userInput = prompt("Введіть рядок:");

    const [,second = "!", , fourth = "!", fifth = "!"] = [...userInput];

    console.log(second, fourth, fifth);
}

{
    const names = ["John", "Paul", "George", "Ringo"];

    for (const name of names) {
    alert(name);
    }
}

{
    const currencies = ["USD", "EUR", "GBP", "UAH"]
    let str = "<select>"
    for (const currency of currencies) {
        str += `<option value="${currency}">${currency}</option>`;
    }
    str += "</select>"
    document.write(str)
}

{
    const names = ["John", "Paul", "George", "Ringo"];
let str = "<table><tr>";
for (const name of names) {
  str += "<td>" + name + "</td>";
}
str += "</tr></table>";
document.write(str);
}


{
  const names = ["John", "Paul", "George", "Ringo"];
let str = "<table>";
for (const name of names) {
  str += "<tr><td>" + name + "</td></tr>";
  
}
str += "</table>";
document.write(str);
}


{
    const currencies = ["USD", "EUR", "GBP", "UAH"];
let str = "<table>";
for (const currency of currencies) {
  str += "<tr>";
  for (const letter of currency) {
    str += "<td>" + letter + "</td>";
  }
  str += "</tr>";
}
str += "</table>";
document.write(str);
}


{
    const size = 5;
let str = "<table>";

for (let i = 1; i <= size; i++) {
  let rowNum = i - 1;
  str += "<tr>";
  for (let j = 1; j <= size; j++) {
    const product = i * j;
    const bgColor = rowNum % 2 === 0 ? "#fff" : "#f0f0f0";
    str += `<td style="background-color: ${bgColor}">${product}</td>`;
  }
  str += "</tr>";
}

str += "</table>";
document.write(str);
}

{
    const capitalize = str => {
  let result = ""
  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      result += str[i].toUpperCase()
    } else {
      result += str[i].toLowerCase()
    }
  }
  return result
}

console.log(capitalize("cANBerRa")) 
}

{
    const capitalize = str => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

const inputString = prompt("Введіть рядок: ")
const wordsArray = inputString.split(" ")
const capitalizedArray = wordsArray.map(capitalize)
const outputString = capitalizedArray.join(" ")

console.log(outputString)
}

{
    const forbiddenWords = ["bad", "evil", "harmful"];

const inputString = prompt("Введіть рядок:");

const wordsArray = inputString.split(" ");

const filteredWordsArray = wordsArray.filter(word => {
  return !forbiddenWords.includes(word.toLowerCase());
});

const resultString = filteredWordsArray.join(" ");

console.log(resultString);
}

{
    const line = prompt();
const bracketsStack = [];
let i = 0;

for (const character of line) {
  if (character === "[" || character === "{" || character === "(") {
    bracketsStack.push(character);
  } else if (character === "]" || character === "}" || character === ")") {
    const lastBracket = bracketsStack.pop();
    if (
      (character === "]" && lastBracket !== "[") ||
      (character === "}" && lastBracket !== "{") ||
      (character === ")" && lastBracket !== "(")
    ) {
      console.log(`Error: Mismatched brackets at position ${i}`);
      break;
    }
  }
  i++;
}

if (bracketsStack.length === 0) {
  console.log("Congratulations! The brackets are balanced!");
} else {
  console.log(`Error: Mismatched brackets at position ${i}`);
}
}