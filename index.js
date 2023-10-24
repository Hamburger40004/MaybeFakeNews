let burger = document.querySelector('burger-menu')
let nav = document.querySelector('.main-nav')
burger.addEventListener('click', function () {
    burger.classList.toggle('actve')
    nav.classList.toggle('active')
})