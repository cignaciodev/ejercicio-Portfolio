let btnMood = document.querySelector('.btn-oscuro');
let section = document.querySelectorAll('.cambio-fondo');
let cab = document.querySelectorAll('.cabecera');
let btnMenuHambur = document.querySelector('.btn-hamburgesa');
let btnMenuHamburClose = document.querySelector('.btn-cerrar');
let menu = document.querySelector('.lista-menu');
let menuHambur = document.querySelector('.menu-hamburgesa');
let btnCv = document.querySelector('.btn-cv');
/*Mood black*/ 
btnMood.addEventListener('click',res=>{
     section.forEach((item)=>{ item.classList.toggle('modo-oscuro')})
     cab.forEach((item)=>{item.style.color="black";})
     btnCv.style.background='white';
     btnCv.style.color='black';
})
/*Open menu hambur*/ 
btnMenuHambur.addEventListener('click', res =>{
     menuHambur.style.display='block'
     menu.style.display='fixed';
     btnMenuHambur.style.display='none';
     btnMenuHamburClose.style.display='block';
     menu.style.display='flex';
})
/*Close menu hambur*/
btnMenuHamburClose.addEventListener('click',res=>{
     menuHambur.style.display='none'
     btnMenuHambur.style.display='block';
     btnMenuHamburClose.style.display='none';
})