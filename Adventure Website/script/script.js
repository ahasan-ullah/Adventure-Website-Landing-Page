const menuBtn=document.querySelector('.menu-btn');
const navLinks=document.querySelector('.navlinks');

menuBtn.addEventListener('click',()=>{
  navLinks.classList.toggle('mobile-menu');
})