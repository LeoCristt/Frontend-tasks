// Задание 1, 2
let Name = prompt("Пожалуйста, введите ваше имя:");
let Age = prompt("Пожалуйста, введите ваш возраст:");
let Message = `Привет, ${Name}! Вам ${Age} лет.`;
alert(Message);
console.log(Message);

if (Age >= 18) {
    alert("Вы совершеннолетний")
    console.log("Вы совершеннолетний")
} else {
    alert("Вы несовершеннолетний")
    console.log("Вы несовершеннолетний")
}

// Задание 3
let randomNumber = Math.floor(Math.random() * 10) + 1;
let userNumber = prompt("Угадайте число от 1 до 10:");

userNumber = parseInt(userNumber, 10);

if (userNumber === randomNumber) {
    alert("Поздравляем! Вы угадали число!");
    console.log("Поздравляем! Вы угадали число!");
} else {
    if (userNumber < 5) {
        alert("Вы не угадали. Ваше число меньше 5." + randomNumber);
        console.log("Вы не угадали. Ваше число меньше 5.");
    } else if (userNumber > 5) {
        alert("Вы не угадали. Ваше число больше 5.");
        console.log("Вы не угадали. Ваше число больше 5.");
    } else {
        alert("Вы не угадали. Ваше число равно 5.");
        console.log("Вы не угадали. Ваше число равно 5.");
    }
}


// Задание 4
let UserPassword = '12345';
let Password = prompt("Введите пароль:");

if (Password === null || Password.trim().length === 0) {
    alert("Поле ввода не должно быть пустым");
    console.log("Поле ввода не должно быть пустым");
} else {
    if (Password === UserPassword) {
        alert("Доступ разрешен");
        console.log("Доступ разрешен");
    } else {
        alert("Доступ запрещен");
        console.log("Доступ запрещен");
    }
}

// Задание 5
let num1 = parseFloat(prompt("Введите первое число:"));
let num2 = parseFloat(prompt("Введите второе число:"));
let operator = prompt("Введите оператор (+, -, *, /):");

let result;

if (operator === "+") {
    result = num1 + num2;
} else if (operator === "-") {
    result = num1 - num2;
} else if (operator === "*") {
    result = num1 * num2;
} else if (operator === "/") {
    if (num2 !== 0) {
        result = num1 / num2;
    } else {
        alert("Ошибка: Деление на ноль!");
        console.log("Ошибка: Деление на ноль!");
    }
} else {
    alert("Неверный оператор");
    console.log("Неверный оператор");
}

if (result !== undefined) {
    alert("Результат: " + result);
    console.log("Результат: " + result);
}