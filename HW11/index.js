

// var image = new Image(100, 200);
// image.onload = function() {
//   // Додати у DOM
//   document.body.appendChild(image);
// };
// image.src = '/assets/зразок.png';



// var newDiv = document.createElement('div');
// document.body.appendChild(newDiv);


// var picHolder = document.createElement("picHolder");
// var img = document.createElement("img");
// img.src = "https://pixabay.com/ru/photos/%D0%BA%D0%B0%D0%B2%D0%BA%D0%B0%D0%B7-%D1%80%D0%BE%D1%81%D1%81%D0%B8%D1%8F-%D1%8D%D0%BB%D1%8C%D0%B1%D1%80%D1%83%D1%81-%D1%80%D0%B5%D0%BA%D0%B0-%D1%80%D1%83%D1%87%D0%B5%D0%B9-5302236/";
// picHolder.appendChild(img);

// elem.hasAttribute(name) – проверяет наличие атрибута.
// elem.getAttribute(name) – получает значение атрибута.
// elem.setAttribute(name, value) – устанавливает значение атрибута.)
// elem.removeAttribute(name) – удаляет атрибут.


// const image = document.querySelector(".image");

// Element.prototype.sayHi = function() {
//     Headers(`Hello, I'm ${this.tagName}`);
//   };
  
//   document.documentElement.sayHi(); // Hello, I'm HTML
//   document.body.sayHi(); // Hello, I'm BODY


// elem.setAttribute(Image, he );





// document.body.onload = addElement;
//   var my_div = newDiv = null;

//   function addElement() {

//     // Создаем новый элемент div
//     // и добавляем в него немного контента

//     var newDiv = document.createElement("div");
//         newDiv.innerHTML = "<h1>Привет!</h1>";

//     // Добавляем только что созданый элемент в дерево DOM

//     my_div = document.getElementById("org_div1");
//     document.body.insertBefore(newDiv, my_div);
// ..........................................................................................................................
//   }


//   var picHolder = document.getElementById("picHolder");
//   var img = document.createElement("img");
//   img.src = "images/stone3.jpg";
//   picHolder.appendChild(img);

// let div = document.createElement('div');
// div.className = "alert";
// div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";


// var picHolder = document.getElementById("picHolder");
// var img = document.createElement("img");
// img.src = "images/stone3.jpg";
// picHolder.appendChild(img);




// div.insertAdjacentHTML('beforebegin', '<p>Привет</p>');
//   div.insertAdjacentHTML('afterend', '<p>Пока</p>');



// const heading = document.createElement('h1');
// console.log(heading); // <h1></h1>

// heading.textContent = 'This is a heading';
// console.log(heading); // <h1>This is a heading</h1>

// const image = document.createElement('img');
// image.setAttribute('src', 'https://placeimg.com/640/480/nature');
// image.setAttribute('alt', 'nature');

// console.log(image); // <img src="https://placeimg.com/640/480/nature" alt="nature">


// let input = document.querySelector('input');

// // атрибут => свойство
// input.setAttribute('id', 'id');
// alert(input.id); // id (обновлено)

// // свойство => атрибут
// input.id = 'newId';
// alert(input.getAttribute('id')); // newId (обновлено)



// var div = document.createElement("div");

// div.id = "my-div";
// div.className = "someClass";
// div.hidden = true;



// div.innerHTML = "Some text with <b>bold text</b>";

// var text = document.createTextNode("Some text");
// div.appendChild(text);




const img = document.createElement("img");

img.src = "https://cdn.pixabay.com/photo/2020/06/15/15/16/the-caucasus-5302236_960_720.jpg";

document.querySelector("#li").appendChild(img);




