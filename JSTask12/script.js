// // Задание 2

// // По данному url расположена задача:

// // https://jsonplaceholder.typicode.com/todos/1

// // В html предусмотреть <div></div>
// // Достать с сервера заголовок задачи и отобразить его в div.

// const div = document.querySelector('div');

// let httpRequest = new XMLHttpRequest();

// httpRequest.onload = function () {
//     let obj = JSON.parse(httpRequest.responseText);
//     div.innerText = obj.title;
//     console.log(obj.title);
// };


// httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
// httpRequest.send();




// Задание 3

// Запросом на сервер по url https://jsonplaceholder.typicode.com/todos достать задачи.

// Отобразить первые 20 задач списком ul на странице. Содержимое каждого li - поле title объекта задачи.

const ul = document.createElement('ul')

document.body.appendChild(ul)

let httpRequest = new XMLHttpRequest();

httpRequest.onload = function () {
    let obj = JSON.parse(httpRequest.responseText);
    console.log(obj)
    for (let i = 0; i < 21; i++) {
        const li = document.createElement('li')
        li.innerText = obj[i].title
        ul.appendChild(li)
    }
};


httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/todos');
httpRequest.send();






