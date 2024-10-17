const btn = document.querySelector('.btn')
const panel = document.querySelector('.panel')

btn.addEventListener('click',()=>{
    panel.classList.toggle('active')
})