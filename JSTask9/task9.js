// // Задание 1

// // Описать в html тег input и тег ul. По нажатию на клавишу в инпуте в список ul должен добавляться элемент li. Содержимое li - нажатая клавиша.

// const input = document.querySelector('input')
// const ul = document.querySelector('ul')


// input.addEventListener('keyup', (event) => {
//     event.preventDefault()
//     let li = document.createElement('li')
//     ul.appendChild(li)
//     li.innerText = event.key
// })



// // Задание 2

// // Вставить в html тег input (просто предусмотреть в разметке).

// // Обрабатывая событие keyup на теге input, выводить в консоль введенный текст каждый раз, как только клиент вписывает любой символ в поле (или стирает любой символ из поля). Вам понадобится считывать значение поля, это input.value

// const inp = document.querySelector('.inp')
// inp.addEventListener('keyup', function (event) {
//     console.log(inp.value);
//     if (console.log == 'Backspace') {
//         event.key.remove()
//     }
// })


// // Задание 3

// // Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, добавлять в список тег li. Его содержимое - введенный текст (input.value). После отправки формы инпут должен быть очищен (проставить пустую строку в value).


// const newUl = document.querySelector('newUl')

// const form = document.querySelector('form')
// form.addEventListener('submit', (event) => {
//     event.preventDefault()
//     const newInput = form.querySelector('.string')
//     let li = document.createElement('li')
//     li.innerText = newInput.value
//     ul.appendChild(li)
//     newInput.value = ''
// })


// Задание 4

// Калькулятор. 

// Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой. Добавить в html div. Внутри select будут options - арифметические знаки. В оба инпута пользователь вводит число. Когда пользователь отправляет форму (событие submit), над двумя числами выполняется действие, выбранное в select (чтобы получить выбранный пользователем option, мы "забираем" значение  select.value). Результат отображается в div.

// const firstNum = document.querySelector('.firstNum');
// const secondNum = document.querySelector('.secondNum');

// let select = document.querySelector('select');
// const form = document.querySelector('form');
// let div = document.querySelector('div')

// form.addEventListener('submit', (event) => {
//     event.preventDefault()
//     if (select.value == '+') {
//         div.innerText = +firstNum.value + +secondNum.value
//     }
//     else if (select.value == '-') {
//         div.innerText = +firstNum.value - +secondNum.value
//     }
//     else if (select.value == '*') {
//         div.innerText = +firstNum.value * +secondNum.value
//     }
//     else if (select.value == '/') {
//         div.innerText = +firstNum.value / +secondNum.value
//     }
    // div.innerText = eval(`${+firstNum.value} ${select.value}  ${+secondNum.value}`)
//})

// 1) решить с помощью if

// 2) решить с помощью evel (https://developer.mozilla.org/...)



// Задание 5

// Вставить в разметку html тег button без js (просто предусмотреть в разметке). При наведении на кнопку изменять ее цвет каждый раз рандомным цветом. При выведении мышки за пределы кнопки поворачивать кнопку на рандомный угол от -180 до 180 градусов. Использовать обработку событий mouseenter, mouseleave на этой кнопке.

// function getRandomInteger(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
//     }
    
//     function getRandomRGB() {
//         let color = (`rgb(${getRandomInteger(0, 255)}, ${getRandomInteger(0, 255)}, ${getRandomInteger(0, 255)})`)
//             return color
//     }

//     let button = document.querySelector('button')
//     console.log(button)
//     button.style.padding = '100px'
//     button.addEventListener('mouseenter', (event) => {
//         button.style.backgroundColor = getRandomRGB();
//     })
   
//     button.addEventListener('mouseleave', (event) => {
//         button.style.transform = `rotate(${getRandomInteger(-180, 180)}deg)`;
//     })