// Задание 1: Создать произвольную переменную, присвоить ей значение. C помощью if написать условие: если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
let a = nonhidden
if (a == hidden) {
   a = "visible"
} else {
   a = "hidden"
}

/* Задание 2: Создать переменную и присвоить ей число.
Записать условие:
- если переменная равна нулю, присвоить ей 1;
- если меньше нуля - строку “less then zero”;
- если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).*/

let b = 13;

if (b = 0) {
   b = 1;
} else if (b < 0) {
   b = ("less than zero");
} else if (b > 0) {
   b = b * 10
   b *= 10
}

/* Задание 3: Запросите у пользователя число и запишите его в переменную. 
Создайте переменную-результат и присвойте ей значение: если введенное пользователем число меньше 5, то результат будет '0', если больше -  '1'. Выведите результат в консоль.
Выполните это задание, используя тернарный оператор (: ?)*/


let num = prompt('Введите число');
let c = (num < 5) ? 0 : 1;


// Задание 4:  Попросить пользователя ввести одно число, следом - второе число. Вывести в консоль максимальное из чисел (наибольшее) с текстом: Большее число: 7 (вместо 7 будет максимальное число из введенных пользователем).
//   * предусмотреть вариант ввода одинаковых чисел 

let numbr1 = prompt('Введите число');
let numbr2 = prompt('Введите число');
if (numbr1 > numbr2) {
   console.log('Большее число: ' + numbr1);
} else if (numbr2 > numbr1) {
   console.log('Большее число: ' + numbr2);
} else {
   console.log('Числа равны друг другу');
}


//   Задание 5:
// Определить, является ли введенное пользователем число num1 кратным введенному числу num2. Обе переменные запрашиваем у пользователя, ответ выводим в консоль.

let num1 = prompt('Введите число');
let num2 = prompt('Введите число');
if (num1 % num2 == 0) {
   console.log('Первое число кратно второму');
} else {
   console.log('Первое число не кратно второму');
}

// Задание 6
// Запросить у пользователя средний балл, записать в переменную.
// Если средний балл 1-4 - вывести в консоль "Двоечник, иди учись!", если 5-8 - "Неплохо, но давай еще поднажмем!", если 9-10 - "Ого, да ты настоящий отличник!" (можно другие фразы - по желанию).

let mark = prompt('Введи оценку');
if (mark >= 9) {
   console.log('Мегахорош');
} else if (mark >= 5) {
   console.log('Хорош');
} else {
   console.log('Плох');
}

// Задание 7
// Запросить у пользователя ответы на 2 вопроса:
// - балл за экзамен (от 0 до 100)
// - количество выполненных проектов (от 0 и больше)
// Вывести в консоль общий выпускной балл в соответствии с этими значениями:
// - 100, если балл за экзамен более 90 или количество проектов более 10.
// - 90, если балл за экзамен более 75 и количество проектов не менее 5.
// - 75, если балл за экзамен более 50 и количество проектов не менее 2.
// - 0 во всех других случаях.

let score = prompt('Введи балл за экзамен');
let projects = prompt('Введи количество выполненных проектов');
if (score > 90 || projects > 10) {
   console.log('Ваш выпускной балл - 100');
} else if (score > 75 && projects >= 5) {
   console.log('Ваш выпускной балл - 90');
} else if (score > 50 && projects >= 2) {
   console.log('Ваш выпускной балл - 75');
} else {
   console.log('Ваш выпускной балл - 0');
}

// Задание 8
// День аренды автомобиля стоит $40. При аренде на 7 или больше дней вы получаете общую итоговую скидку $50. Если вы арендуете авто на 3 или более дней, ваша общая скидка составит $20.
// Количество дней, на которые нужно арендовать авто, запрашиваются с помощью prompt. Напишите программу, рассчитывающую общую стоимость аренды на запрашиваемое количество дней.

let days = prompt('Введите на сколько дней вы арендуете автомобиль');
let perDay = 40;
let all = (perDay * days);
if (days >= 7) {
   price = (all - 50);
} else if (days >= 3) {
   price = (all - 20);
} else {
   price = all;
}
console.log("Стоимость аренды - " + price);

// Задание 9
// Создать переменную и записать в нее число, например 10.
// 10 раз увеличивать значение этой переменной на 1. Результат вывести в консоль.

for (let i = 10; i < 21; i++){
   console.log ('Это число - ' + i);
};


// Задание 10
// Увеличивая счетчик цикла на 2, нужно 5 раз:
// - запрашивать у пользователя ввод числа
// - проверять, равно ли это число 10. Если равно, выводить "Равно 10". Иначе выводить "Не равно 10"

for (let i = 0; i < 10; i += 2){
   let num = prompt('Введите число')
   if (num == 10) {
      console.log ("Равно 10")
   } else {
      console.log ("Не равно 10")
   }
}

// Задание 11
// Вывести в консоль квадраты чисел от 0 до 100 (не включая 100) - т.е. вывести числа 0, 1, 4, 9, 16...
// * Задавать количество чисел, которые нужно вывести, при помощи функции prompt.

let numb = prompt('Введите количество чисел, которые нужно вывести')
for (let i = 0; i < numb; i++){
  console.log (i ** 2)
};






// Задание 12
// Напишите программу, которая выводит в консоль числа от 1 до 100.
// При этом вместо чисел, кратных трем, программа должна выводить слово «Fizz», а вместо чисел, кратных пяти, — слово «Buzz». Если число кратно и 3, и 5, то программа должна выводить слово «FizzBuzz»
for (let i = 0; i < 101; i++){
   if (i % 3 == 0 && i % 5 == 0) {
      console.log ('FizzBuzz')
   } else if (i % 3 == 0) {
      console.log ('Fizz')
   } else if (i % 5 == 0) {
      console.log ('Buzz')
   }
   else {
   console.log ('Это число -  ' + i)
   }
}; 
