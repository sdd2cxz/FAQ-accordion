const container = document.querySelectorAll(".faq-container");
const description = document.querySelector('.faq-description')
container.forEach((element) => {
  const button = element.querySelector(".btn");
  
 button.addEventListener('click', () =>{
  element.children[1].classList.toggle('show')
 })
});
