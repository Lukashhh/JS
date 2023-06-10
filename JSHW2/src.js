// var a = 5;  
// var b, c;

// b = (a * 5);  
// b = c = (b / 2);




var years = prompt('Сколько вам лет?');
var a = 2023 - years


alert('Вы ' + a + ' года рождения!')



var temperature = prompt('Какая у вас температура в градусах?')
var b = (temperature * 1.8) + 32

alert('По Фаренгейту у вас ' + b + ' градусов')



let firstNum = prompt('Введите первое число.')
let secondNum = prompt('Введите второе число.')
let result = Math.floor(firstNum / secondNum)
result.toFixed(2)
alert('Получилось: ' + result)


const rate = 38
let mnh = prompt('введите количество долоресов')

let coin = rate * mnh

alert('у вас ' + coin + 'гривен')


const red = parseInt(prompt("Введіть червоний колір (від 0 до 255):"))
const green = parseInt(prompt("Введіть зелений колір (від 0 до 255):"))
const blue = parseInt(prompt("Введіть синій колір (від 0 до 255):"))
const hexColor = "#" + red.toString(16) + green.toString(16) + blue.toString(16)
console.log("CSS-колір: ", hexColor)