// 1
function numbers(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
}

let lot = numbers(10, 15);
console.log(lot);  

lot = numbers(20, 10);
console.log(lot);  

lot = numbers(9, 9);
console.log(lot);  

// 2
function factor(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factor(n - 1); 
    }
}
let root = factor(7);
console.log(root);

 


//3
function lest(tert1, tert2, tert3) {
    let lest = tert1 * 100 + tert2 * 10 + tert3;
    return lest;
}

table  = lest(6, 2, 3);
console.log(table); 


//   4
function box(length, width) {
    if (width === undefined) {

        return length * length;
    } else {
        return length * width;
    }
}
let square = box(5, 6);
console.log(square); 

let
    triangle = box(4);
console.log(triangle); 



// 5
function target(number) {
    let sum = 0;


    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }

    if (sum === number) {
        return true;
    } else {
        return false;
    }
}
console.log(target(6));  
console.log(target(28));  



// 6
function print(min, max) {
    for (let number = min; number <= max; number++) {
      if (target(number)) {
        console.log(number);
      }
    }
  }
  
  print(2, 10);
