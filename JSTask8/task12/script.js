// Задание 12

// Есть верстка: https://teenscool1.notion.site...

// С помощью JavaScript:

// 1) Найти в коде список ul и добавить ему класс “list”.

// 2) На li через один (начиная с самого первого) установить класс “item”

// 3) На все ссылки в примере установить класс “custom-link”


let ul = document.querySelector('ul');
ul.className = "list";
let li = document.querySelectorAll('li')
for (let i = 0; i < li.length; i++) {
    if (i % 2 == 0) {
        li[i].className = "item"
    }
}
let a = document.querySelectorAll('a')
a.className = "custom-link"