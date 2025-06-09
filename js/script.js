let navbar = document.querySelector('.header .navbar');

let menuBtn = document.querySelector('#menu-btn');
let nav_bar = document.querySelector('.navbar');
let closeBtn = document.querySelector('#nav-close');

menuBtn.onclick = () => {
    nav_bar.classList.add('non-hidden');
}

closeBtn.onclick = () => {
    nav_bar.classList.remove('non-hidden');
}


window.onscroll=()=>{
    // navbar.classList.remove('active');
    if(window.scrollY>0){
        document.querySelector('.header').classList.add('active');
        document.querySelector('.navbar').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};
window.onload=()=>{
    if(window.scrollY>0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};

