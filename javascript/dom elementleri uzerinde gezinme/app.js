/*
let value;
const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");
const cardRow = document.querySelector(".card.row");
value = todoList;
value = todo;
value = cardRow;

// Child Nodes - Text Dahil

value = todoList.childNodes;
value = todoList.childNodes[0];

//Children - Element

value = todoList.children;
value = todoList.children[todoList.children.length - 1];
value = todoList.children[2].textContent = "Değişti";

value = cardRow;
value = cardRow.children;
value = cardRow.children[2].children[1].textContent = "Bura da değişti";
value = todoList;
value = todoList.children[0];
value = todoList.firstElementChild;
value = todoList.lastElementChild;
value = todoList.children.length;
value = todoList.childElementCount;

value = cardRow;
value = cardRow.parentElement;
value = cardRow.parentElement.parentElement;

// Element Kardeşleri
value = todo;
value = todo.previousElementSibling;
value = todo.nextElementSibling;
value = todo.nextElementSibling.nextElementSibling;

value = todo.previousElementSibling.previousElementSibling;


console.log(value);
*/

//Yeni Element Oluşturma
const newLink = document.createElement("a");
const cardBody = document.getElementsByClassName("card-body")[1];
newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "https://www.google.com.tr";
newLink.target = "_blank";

newLink.appendChild(document.createTextNode("Farklı Sayfaya Git"));
cardBody.appendChild(newLink);

console.log(newLink);

//Ardından Deneme
const secondNewLink = document.createElement("a");
secondNewLink.id = "delete-todos";
secondNewLink.className = "btn btn-dark";
secondNewLink.href = "https://www.google.com";
secondNewLink.target = "_blank";
secondNewLink.appendChild(document.createTextNode("Google"));
cardBody.appendChild(secondNewLink);


