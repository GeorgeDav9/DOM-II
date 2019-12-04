// Your code goes here
// #1
const logo = document.querySelector('.logo-heading');

logo.addEventListener('mouseenter', () => {
    logo.style.color = "green",
      logo.textContent = 'FUN BUS!'
});
logo.addEventListener('mouseleave', () => {
    logo.style.color = '',
      logo.textContent = 'Fun Bus'
});
// #2
const pageBody = document.querySelector("body");

pageBody.addEventListener("dblclick", el => {
    el.target.style.backgroundColor = "gray";
});
// #3
const navBar = document.querySelector('.main-navigation');

navBar.addEventListener('dblclick', () => {
    navBar.style.backgroundColor = 'blue';
    navBar.stopPropogation();
});
// #4
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {        
        link.style.color = 'white';
        
                

    });
});
// #5
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        link.style.color = 'green';
    });
});
// #6
const letsGo = document.querySelectorAll("h2");
console.log(letsGo);
document.addEventListener('wheel', (zoom)=>{
    letsGo[1].style.transform= "scale(1.5)";
    event.preventDefault()
});
// #7
const img = document.querySelector('img');

img.addEventListener('mousedown', (event) => {
    event.target.style.border = '5px solid lightblue';
});
// #8
const imgContent = document.querySelectorAll(".img-content img");

imgContent.forEach(item => {
    item.addEventListener("dblclick", ele => {
        item.style.transform = 'scale(1.2)';
        item.style.transition = ' transform 0.3s';
    })
})
// #9
const imgContentRevert = document.querySelectorAll(".img-content img");

imgContentRevert.forEach(item => {
    item.addEventListener("click", ele => {
        item.style.transform = 'scale(1)';
        item.style.transition = ' transform 0.3s';
    })
}) 
// #10
const button = document.querySelector('.btn');

button.addEventListener('mouseover', function(event) {
    event.target.style.backgroundColor = 'purple';
    
})