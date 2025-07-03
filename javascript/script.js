;(function() {
 'use strict'



const paragrafos = [...document.querySelectorAll('.content p')]
const txtOriginal = paragrafos.map( p => p.innerText)
const letras = 100

paragrafos.forEach((p, i) => {
 if(p.innerText.length > 100){
  p.innerText = txtOriginal[i].substring(0, letras) + '...'
  p.classList.add('opacity')

  const div = p.closest('div')

  const btn = document.createElement('button')
  btn.dataset.indice = i

  btn.innerHTML = '<i class="fa-solid fa-chevron-down"></i>'
  btn.classList.add('mostrar')

  div.appendChild(btn)

  btn.addEventListener('click', (parag)=> {
   mostrarTexto(parag)
  })

 }
})


function mostrarTexto(ele){
 const btn = ele.currentTarget

 btn.classList.toggle('mostrar')
 btn.classList.toggle('esconder')

 const index = btn.dataset.indice

paragrafos[index].classList.toggle('opacity')
paragrafos[index].classList.toggle('noOpacity')


 const icon = btn.querySelector('i')

 icon.classList.toggle('fa-chevron-down')
 icon.classList.toggle('fa-chevron-up')
 

if(!icon.classList.contains('fa-chevron-down')){
 paragrafos[index].innerText = txtOriginal[index] 
}else{
 paragrafos[index].innerText = txtOriginal[index].substring(0 , letras) + '...'
}


}


} )()