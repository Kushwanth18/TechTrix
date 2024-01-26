const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu-button');
const closeButton = document.querySelector('.close-button');

menuButton.addEventListener('click',()=>{
    menu.classList.add('open');
})

closeButton.addEventListener('click',()=>{
    menu.classList.remove('open');
})

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el))