//querySelector //Retorna ninguno o un elemento que concuerde con el selector
const heading = document.querySelector('.header__texto h2') //Retorna 0 o 1 ELementos //este se limita a maximo uno auqnue exitan mas elementos
heading.textContent = 'Nuevo Heading';
console.log(heading);

//querySelectorAll//Retorna todos los elementos
const enlaces = document.querySelectorAll ('.navegacion a');
enlaces[0].textContent = 'Nuevo Texto para Enlace';
enlaces[0].classList.add ('nueva-clase');
enlaces[0].classList.remove ('navegacion__enlace');



//getElementbyId

const heading2 = document.getElementById('heading');
console.log(heading2);