'use strict'

const ulElement = document.getElementById('ulId');

// Вытянуть все атрибуты которые есть в теге ul, перебрать их (for..of) и записать значение каждого атрибута в массив — вывести этот массив в консоль

let ulAttributes = ulElement.attributes;
ulAttributes = Array.from(ulAttributes);

const attributesValue = [];

for(let item of ulAttributes) {
    attributesValue.push(item.value);
}

console.log(attributesValue);


// Так-же записать в отдельный массив каждое имя атрибута — вывести массив в консоль

const attributesName = [];

for(let item of ulAttributes) {
    attributesName.push(item.name);
}

console.log(attributesName);


// С помощью JS изменить текст в последнем теге li на — «Привет меня зовут » + Ваше имя

ulElement.lastElementChild.textContent = 'Привет меня зовут Frenk';

console.log(ulElement.lastElementChild);


// Добавить первому элементу li атрибут ‘data-my-name‘ со значением в котором будет лежать Ваше имя

ulElement.firstElementChild.setAttribute('data-my-name', 'frenk');


// Удалить у тега ul атрибут ‘data-dog-tail‘

ulElement.removeAttribute('data-dog-tail');