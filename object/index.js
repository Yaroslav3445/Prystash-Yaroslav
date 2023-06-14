// 1
const car = {
    medeIn: '',
    model: '',
    year: 0,
    averageSpeed: 0,
    info: function () {
        console.log('Виробник: ' + this.medeIn);
        console.log('Модель: ' + this.model);
        console.log('Рік випуску: ' + this.year);
        console.log('Середня швидкість: ' + this.averageSpeed + ' км/год');
    },
    time: function (travel) {
        const speed = this.averageSpeed;
        const advantage = 1;
        const prefDuration = 4;
        let totalTime = 0;
        let distanTravel = 0;
        let breakTime = 0;
        while (distanTravel < travel) {
            if (breakTime === this.averageSpeed) {
                totalTime += breaks;
                breakTime = 0;
            } else {
                totalTime += 1;
                breakTime += 1;
                distanTravel += speed;
            }
        }
        console.log('Час подорожі для відстані ' + travel + ' км: ' + totalTime + ' годин');
    }
};



car.medeIn = 'Toyota';
car.model = 'Camry';
car.year = 2020;
car.averageSpeed = 100;
car.info();
car.time(700);



// 2

const fraction = {
    numerator: 0,
    denominator: 1,
    add: function(otherFraction) {
      const newNumerator = this.numerator * otherFraction.denominator + otherFraction.numerator * this.denominator;
      const newDenominator = this.denominator * otherFraction.denominator;
  
      return this.simpl(newNumerator, newDenominator);
    },
    sub: function(otherFraction) {
      const newNumerator = this.numerator * otherFraction.denominator - otherFraction.numerator * this.denominator;
      const newDenominator = this.denominator * otherFraction.denominator;
  
      return this.simpl(newNumerator, newDenominator);
    },
    mult: function(otherFraction) {
      const newNumerator = this.numerator * otherFraction.numerator;
      const newDenominator = this.denominator * otherFraction.denominator;
  
      return this.simpl(newNumerator, newDenominator);
    },
    vide: function(otherFraction) {
      const newNumerator = this.numerator * otherFraction.denominator;
      const newDenominator = this.denominator * otherFraction.numerator;
  
      return this.simpl(newNumerator, newDenominator);
    },
    simpl: function(numerator, denominator) {
      const gcd = this.find(numerator, denominator);
      return {
        numerator: numerator / gcd,
        denominator: denominator / gcd
      };
    },
    find: function(a, b) {
      if (b === 0) {
        return a;
      }
      return this.find(b, a % b);
    }
  };
  
  const fraction1 = {
    numerator: 3,
    denominator: 4
  };
  const fraction2 = {
    numerator: 2,
    denominator: 5
  };
  const sum = fraction.add(fraction1, fraction2);
  console.log(sum); 
  const difference = fraction.sub(fraction1, fraction2);
  console.log(difference); 
  const product = fraction.mult(fraction1, fraction2);
  console.log(product); 
  const quotient = fraction.vide(fraction1, fraction2);
  console.log(quotient); 
  
// 3



const time = {
    hours: 0,
    minutes: 0,
    seconds: 0,
  
    Time: function() {
      const formattedHours = this.forNumber(this.hours);
      const formattedMinutes = this.forNumber(this.minutes);
      const formattedSeconds = this.forNumber(this.seconds);
      console.log(`${formattedHours}:${formattedMinutes}:${formattedSeconds}`);
    },
  
    Seconds: function(seconds) {
      this.seconds += seconds;
      this.justTime();
    },
  
    Minutes: function(minutes) {
      this.minutes += minutes;
      this.justTime();
    },
  
    justTime: function() {
      if (this.seconds >= 60) {
        const exaMinutes = Math.floor(this.seconds / 60);
        this.minutes += exaMinutes;
        this.seconds %= 60;
      }
      if (this.minutes >= 60) {
        const exaHours = Math.floor(this.minutes / 60);
        this.hours += exaHours;
        this.minutes %= 60;
      }
      if (this.hours >= 24) {
        this.hours %= 24;
      }
    },
  
    forNumber: function(number) {
      return number.toString().padStart(2, '0');
    }
  };
  
  time.hours = 20;
  time.minutes = 30;
  time.seconds = 45;
  
  time.Time(); 
  time.Seconds(30);
  time.Time(); 
  time.Minutes(30);
  time.Time(); 
  