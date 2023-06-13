//1
function rect(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        return base * rect(base, exponent - 1);
    }
}
let rek = rect(2, 8);
console.log(rek);




// 2
function sors(a, b) {
    if (b === 0) {
        return a;
    } else {
        return sors(b, a % b);
    }
}

let del = sors(20, 30, 20);
console.log(del); 




// 3

function MaxNumber(number) {
    if (number < 10) {
      return number;
    } else {
      let last = number % 10;
      let xert = Math.floor(number / 10);
      let max = MaxNumber(xert);
      return Math.max(last, max);
    }
  }

  let wer = MaxNumber(1296782);
console.log(wer); 




// 4
function qual(number, sor = 2) {
    if (number < 2) {
        return false;
    }

    if (number === sor) {
        return true;
    }

    if (number % sor === 0) {
        return false;
    }

    return qual(number, sor + 1);
}

console.log(qual(7));     
console.log(qual(100));    



// 5
function bord(number, vis = 2) {
    if (number === 1) {
        return;
    }

    if (number % vis === 0) {
        console.log(vis);
        bord(number / vis, vis);
    } else {
        bord(number, vis + 1);
    }
}

bord(100);  


// 6
function fibonacci(n) {
    if (n === 1 || n === 2) {
      return 1;
    }
  
    return fibonacci(n - 1) + fibonacci(n - 2);
  }

console.log(fibonacci(9)); 
