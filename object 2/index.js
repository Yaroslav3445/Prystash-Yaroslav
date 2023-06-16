// 1
const shopping = [];

function displayShopping() {
  const sorted = shopping.sort((a, b) => a.bought - b.bought);

  console.log("Список покупок:");
  sorted.forEach(item => {
    const status = item.bought ? "куплено" : "не куплено";
    console.log(`${status} ${item.name} (${item.quantity})`);
  });
}

function addItemToShopping(name, quantity) {
  const existing = shopping.find(item => item.name === name);

  if (existing) {
    existing.quantity += quantity;
  } else {
    const newItem = {
      name: name,
      quantity: quantity,
      bought: false
    };

    shopping.push(newItem);
  }

  console.log(`Додано ${quantity} ${name} до списку покупок.`);
}

function buy(name) {
  const item = shopping.find(item => item.name === name);

  if (item) {
    item.bought = true;
    console.log(`${item.name} позначено як придбаний.`);
  } else {
    console.log(`${name} не знайдено у списку покупок.`);
  }
}
addItemToShopping("Перец", 5);
addItemToShopping("Ковбаса", 2);
addItemToShopping("Хліб", 1);
addItemToShopping("хліб", 3); 
buy("Молоко");
displayShopping();


// 2

const receipt = [];
function disReceipt() {
  console.log("Чек:");
  receipt.forEach(item => {
    const price = item.quantity * item.price;
    console.log(`${item.name} x ${item.quantity} - ${price} грн`);
  });
}
function calculate() {
  let total = 0;
  receipt.forEach(item => {
    const Price = item.quantity * item.price;
    total += Price;
  });
  return total;
}
function getExpensive() {
  let ExpensiveItem = null;
  let maxPrice = 0;
  receipt.forEach(item => {
    const Price = item.quantity * item.price;
    if (Price > maxPrice) {
      maxPrice = Price;
      ExpensiveItem = item;
    }
  });
  return ExpensiveItem;
}
function Average() {
  const Quantity = receipt.reduce((total, item) => total + item.quantity, 0);
  const Price = receipt.reduce((total, item) => total + (item.quantity * item.price), 0);
  return Price / Quantity;
}
function addToReceipt(name, quantity, price) {
  const newItem = {
    name: name,
    quantity: quantity,
    price: price
  };
  receipt.push(newItem);
  console.log(`Додано товар "${name}" до чека.`);
}
addToReceipt("Молоко", 2, 25);
addToReceipt("Хліб", 1, 12);
addToReceipt("Яблука", 3, 8);
disReceipt();
console.log("Загальна сума чека:", calculate());
console.log("Найдорожча покупка:", getExpensive());
console.log("Середня вартість одного товару у чеку:",Average());




// 3
const styles = [
  { name: "color", value: "red" },
  { name: "font-size", value: "20px" },
  { name: "text-align", value: "center" },
  { name: "text-decoration", value: "underline" }
];

function textWithStyles(styles, text) {
  let styleString = "";
  styles.forEach(style => {
    styleString += `${style.name}:${style.value};`;
  });

  document.write(`<p style="${styleString}">${text}</p>`);
}
textWithStyles(styles, "Hello, world!");




//4
const classrooms = [
  { name: "A1", capacity: 15, faculty: "Computer Science" },
  { name: "B2", capacity: 18, faculty: "Engineering" },
  { name: "C3", capacity: 12, faculty: "Business Administration" },
  { name: "D4", capacity: 20, faculty: "Arts" },
  { name: "E5", capacity: 14, faculty: "Computer Science" }
];
function allClassrooms() {
  classrooms.forEach(classroom => {
    console.log(`Name: ${classroom.name}, Capacity: ${classroom.capacity}, Faculty: ${classroom.faculty}`);
  });
}


function byFaculty(faculty) {
  const filteredClassrooms = classrooms.filter(classroom => classroom.faculty === faculty);

  filteredClassrooms.forEach(classroom => {
    console.log(`Name: ${classroom.name}, Capacity: ${classroom.capacity}`);
  });
}

function forGroup(group) {
  const filteredClassrooms = classrooms.filter(classroom => classroom.capacity >= group.students && classroom.faculty === group.faculty);

  filteredClassrooms.forEach(classroom => {
    console.log(`Name: ${classroom.name}, Capacity: ${classroom.capacity}`);
  });
}

function byCapacity() {
  const sortedClassrooms = [...classrooms].sort((a, b) => a.capacity - b.capacity);

  sortedClassrooms.forEach(classroom => {
    console.log(`Name: ${classroom.name}, Capacity: ${classroom.capacity}`);
  });
}

function byName() {
  const sortedClassrooms = [...classrooms].sort((a, b) => a.name.localeCompare(b.name));

  sortedClassrooms.forEach(classroom => {
    console.log(`Name: ${classroom.name}, Capacity: ${classroom.capacity}`);
  });
}
console.log("All classrooms:");
allClassrooms();

console.log("Classrooms for Computer Science:");
byFaculty("Computer Science");

console.log("Suitable classrooms for Group A:");

