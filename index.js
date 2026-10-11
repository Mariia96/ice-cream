// Завдання 1
let name = "Maria";
console.log(`Привіт, ${name}!`);

// Завдання 2
let firstName = "Maria";
let lastName = "Semen";
console.log(`Повне ім'я: ${firstName} ${lastName}`);

// Завдання 3
let price = 150;
let qty = 3;
console.log(`Сума: ${price * qty} грн`);

// Завдання 4
let address = `Португалія,
місто Порту,
вул. Головна, 1`;

console.log(address);

for (let i = 0; i < 10; i++) {
    console.log("Hello!");
  }
  for (let i = 10; i >= 1; i--) {
    console.log(i);
  }

  let sum = 0;

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}

console.log(sum);

for (let i = 1; i <= 10; i++) {
    console.log(`5 × ${i} = ${5 * i}`);
  }

  let i = 5;

while (i > 0) {
  console.log(i);
  i--;
}

//Завдання 6
//while спочатку перевіряє умову, а потім виконує тіло циклу, якщо умова true.
//do...while спочатку виконує тіло циклу, а потім перевіряє умову. Тому він виконається хоча б один раз, навіть якщо умова false.
//Приклад 
let x = 3;
while (x > 0) {
  console.log(x);
  x--;
}


//Приклад do...while:
let y = 3;
do {
  console.log(y);
  y--;
} while (y > 0);
