const container = document.querySelectorAll(".faq-container");
const description = document.querySelector('.faq-description')
container.forEach((element) => {
  const button = element.querySelector(".btn");
  
 button.addEventListener('click', () =>{
  button.children[0].classList.toggle('hide')
  button.children[1].classList.toggle('show')
  element.children[1].classList.toggle('hide')
 })
});
