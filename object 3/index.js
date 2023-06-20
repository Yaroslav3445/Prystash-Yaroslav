//1
function statistics(str) {
    let letterCount = 0;
    let digitCount = 0;
    let otherCount = 0;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (/[a-zA-Z]/.test(char)) {
            letterCount++;
        } else if (/[0-9]/.test(char)) {
            digitCount++;
        } else {
            otherCount++;
        }
    }

    console.log(`Letter count: ${letterCount}`);
    console.log(`Digit count: ${digitCount}`);
    console.log(`Other count: ${otherCount}`);
}

const text = "Hello, world!";
statistics(text);
//2


function numberText(number) {
    var numberDi = {
        "10": "десять",
        "11": "одинадцять",
        "12": "дванадцять",
        "13": "тринадцять",
        "14": "чотирнадцять",
    };

    if (numberDi.hasOwnProperty(number)) {
        return numberDi[number];
    } else {
        let tens = Math.floor(number / 10) * 10;
        let units = number % 10;

        let text = numberDi[tens] + " " + numberDi[units];
        return text;
    }
}

console.log(numberText(14));
console.log(numberText(13));
console.log(numberText(12));



// 3
function formString(str) {
    let transformed = "";
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        if (char >= 'A' && char <= 'Z') {
            transformed += char.toLowerCase();
        } else if (char >= 'a' && char <= 'z') {
            transformed += char.toUpperCase();
        } else if (char >= '0' && char <= '9') {
            transformed += '_';
        } else {
            transformed += char;
        }
    }
    return transformed;
}

console.log(formString("Hello World 111"));
//   4
function convert(cssStyle) {
    let words = cssStyle.split('-');
    for (let i = 1; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join('');
}

console.log(convert('font-size'));
console.log(convert('background-color'));
console.log(convert('text-align'));

//   5

function abbreviation(phrase) {
    let words = phrase.split(' ');
    let abbreviations = '';

    for (let i = 0; i < words.length; i++) {
        abbreviations += words[i][0].toUpperCase();
    }

    return abbreviations;
}

console.log(abbreviation('cascading style sheets'));
console.log(abbreviation('об’єктно-орієнтоване програмування'));

//   6
function conStrings(...strings) {
    return strings.join('');
}


console.log(conStrings('Рядок 1', 'Рядок 2', 'Рядок 3'));
console.log(conStrings('Hello', ', ', 'World', '!'));

//   7
function calculator(expression) {
    let operands = expression.split(/[\+\-\*\/]/);
    let operator = expression.match(/[\+\-\*\/]/);

    let num1 = parseFloat(operands[0]);
    let num2 = parseFloat(operands[1]);

    if (isNaN(num1) || isNaN(num2)) {
        return 'Invalid expression';
    }

    switch (operator[0]) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return 'Division by zero error';
            } else {
                return num1 / num2;
            }
        default:
            return 'Invalid operator';
    }
}


console.log(calculator('2 + 3'));
console.log(calculator('4 - 7'));
console.log(calculator('5 * 6'));
console.log(calculator('8 / 2'));
console.log(calculator('10 / 0'));
console.log(calculator('2 ^ 3'));

//   8

function parseURL(url) {
    let parsedURL = new URL(url);

    let protocol = parsedURL.protocol;
    let domain = parsedURL.hostname;
    let path = parsedURL.pathname;

    console.log('протокол:', protocol);
    console.log('домен:', domain);
    console.log('шлях:', path);
}

parseURL("https://itstep.org/ua/about");



// 9
function StringSplit(str, delimiter) {
    let result = [];
    let startIndex = 0;
    let endIndex = str.indexOf(delimiter);
  
    while (endIndex !== -1) {
      result.push(str.substring(startIndex, endIndex));
      startIndex = endIndex + 1;
      endIndex = str.indexOf(delimiter, startIndex);
    }
  
    result.push(str.substring(startIndex));
  
    return result;
  }
  

  let inputString = "10/08/2020";
  let delimiter = "/";
  let result = StringSplit(inputString, delimiter);
  
  console.log(result); 
  
// 10

function print(template, ...values) {
    var result = template.replace(/%(\d+)/g, function(match, index) {
      var value = values[index - 1];
      return value !== undefined ? value : match;
    });
  
    console.log(result);
  }
  
  print("Today is %1 %2.%3.%4", "Monday", 10, 8, 2020);
  