//1
let start = parseInt(prompt('задайте початковий чисельний діапазон для сумування всіх чисел'));
let end = parseInt(prompt('задайте кінцевий чисельний діапазон'));
let sum = 0
for (let i = start; i <= end; i++) {
    sum += i
}
alert('буде ' + sum)








//2
alert('Введіть числа щоб зайти НОД')
let sumb1 = prompt('Введіть перше число')
let sumb2 = prompt('Введіть друге число')
let sumb3

function cals(a, b) {
    while (a != b) {
        if (a > b) {
            a = a - b;


        } else
            if (a < b) {
                let c;
                c = a;
                a = b;
                b = c;

            }
    }
    return numb3 = a
}
cals(sumb1, sumb2)
alert(' НОД чисел ' +  sumb1 + ' і числа ' + sumb2 + ' дорівнює ' + numb3)




//3
let number = prompt("Введите число:");
number = parseInt(number);

alert("Делители числа", number, ":");

for (let i = 1; i <= number; i++) {
  if (number % i === 0) {
    alert(i);
  }
}



4
let number2 = prompt("Введіть число :");
numberSum = parseInt(number2);

let diCount = 0;
let absoluteNum = Math.abs(numberSum);

while (absoluteNum > 0) {
  absoluteNum = Math.floor(absoluteNum / 10);
  diCount++;
}

alert("Кількість цифир в числі " + numberSum + " буде " + diCount);  




5
let positive = 0;
let negative = 0;
let zero = 0;
let even = 0;
let odd = 0;

for (let i = 0; i < 10; i++) {
    let number = prompt("Введите число:");
    number = parseInt(number);

    if (number > 0) {
        positive++;
    } else if (number < 0) {
        negative++;
    } else {
        zero++;
    }

    if (number % 2 === 0) {
        even++;
    } else {
        odd++;
    }
}

alert("Додані числа: " + positive);
alert("Відємні числа: " + negative);
alert("Нулі " + zero);
alert("Парні числа: " + even);
alert("Непарні числа: " + odd);

// 6
let calculate = true;

while (calculate) {
    let wert1 = parseFloat(prompt("Введіть перше число:"));
    let wert2 = parseFloat(prompt("Введіть друге число:"));
    let operator = prompt("Введіть знак операції (+, -, *, /):");

    let result;

    switch (operator) {
        case "+":
            result = wert1 + wert2;
            break;
        case "-":
            result = wert1 - wert2;
            break;
        case "*":
            result = wert1 * wert2;
            break;
        case "/":
            result = wert1 / wert2;
            break;
        default:
            alert("Некоректний знак операції!");
            continue;
    }

    alert("Результат: " + result);

    let choice = prompt("Хочете вирішити ще один приклад? (Так/ні)");
    if (choice.toLowerCase() !== "Так") {
        calculate = false;
    }
}




7
let dokar = prompt("Введіть число: ");
let shift = prompt("На скільки цифр зсунути число: ");

dokar= dokar.toString();  

let shiftedNumber = "";

for (let i = shift; i < dokar.length + shift; i++) {
  let newIndex = i % dokar.length;
  shiftedNumber += dokar[newIndex];
}

alert("Результат зсуву:", shiftedNumber);



//8
const daysOfWeek = ["Понеділок", "Вівторок", "Середа", "Четверг", "Пятниця", "Субота", "Неділя"];
let index = 0;

while (confirm(`${daysOfWeek[index]}. Хочeте побачити наступний день?`)) {
  index = (index + 1) % daysOfWeek.length;
}




9

for (let i = 2; i <= 9; i++) {
    console.log(`Таблиця множеня для числа ${i}:`);
    for (let j = 1; j <= 10; j++) {
        const result = i * j;
        console.log(`${i} x ${j} = ${result}`);
    }
    console.log('----------------');
}




//10

let min = 0;
let max = 100;
let guess;
let isNumberGuessed = false;

while (!isNumberGuessed) {
    guess = Math.floor((min + max) / 2);

    const userResponse = prompt(`Ваше число > ${guess}, < ${guess} або == ${guess}? (Введіть '>', '<' або '=')`);

    if (userResponse === '>') {
        min = guess + 1;
    } else if (userResponse === '<') {
        max = guess - 1;
    } else if (userResponse === '=') {
        isNumberGuessed = true;
    } else {
        console.log('Некоректний ввід. Спробуйне ще раз.');
    }
}

alert(`Ваше число: ${guess}`);


