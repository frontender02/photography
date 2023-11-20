// Menu burger
const burger = document.getElementById('burger')
const nav = document.getElementById('nav')

burger.addEventListener('click', function(){
    burger.classList.toggle('burger--active')
    nav.classList.toggle('nav--active')
    document.body.classList.toggle('stop-scroll')
})


// Modal Form
const btnCallForm = document.getElementById('call-form')
const modalCallForm = document.getElementById('modal-call-form')

btnCallForm.addEventListener('click', function(){
    modalCallForm.classList.add('modal-parent--open')
})

modalCallForm.querySelector('.modal').addEventListener('click', function(event){
    event._isClick = true
})
modalCallForm.addEventListener('click', function(event){
    if(event._isClick === true) return
    modalCallForm.classList.remove('modal-parent--open')
})

window.addEventListener('keydown', function(event){
    if(event.key === 'Escape'){
        modalCallForm.classList.remove('modal-parent--open')
    }
})


// Swiper 
const swiper = new Swiper('#gallery', {
	loop: true,
	slidesPerView: 1.5,
	spaceBetween: 20,

	breakpoints: {
		480: {
			slidesPerView: 2.7,
		},
	},

	navigation: {
		prevEl: '#gallery-prev',
		nextEl: '#gallery-next',
	},
})
