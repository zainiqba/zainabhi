
let menu = document.querySelector('#menu')
let menubtn = document.querySelector('.menubtn') // to select a specific element 
let body = document.querySelector('#body')
console.log(body)
menu.onclick = function (){ 
     menubtn.classList.toggle('active') // if the class is present then remove and in the specified class is no present the add it to the class list of the element
     body.classList.toggle('bodyM') // when click on menu button then overall content will be downword 
}
// anonimous function  this function is direct called  when click.

