

// querrySelectors
console.log("js is running")
const header = document.querySelector('header');
const aboutUs = document.querySelector('.about-us');
const myContact = document.querySelector('.contact');
const cat1 = document.querySelector('.cat-1');
const cat2 = document.querySelector('.cat-2');
const cat3 = document.querySelector('.cat-3');
const wrapper = document.querySelector('.wrapper');
const btn = document.querySelector('.dark-mode-btn');
const footer = document.querySelector('footer');
const darkButton = document.querySelector('button');



// dark mode function
btn.addEventListener('click', function() {
    aboutUs.classList.toggle('dark-mode');
    myContact.classList.toggle('dark-mode');
    cat1.classList.toggle('dark-mode');
    cat2.classList.toggle('dark-mode');
    cat3.classList.toggle('dark-mode');
    wrapper.classList.toggle('dark-mode');
    header.classList.toggle('dark_mode');
    footer.classList.toggle('dark_mode');
    darkButton.classList.toggle('dark-btn');
});












