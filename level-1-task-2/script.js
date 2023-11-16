let cof= document.getElementById('coffee');
let b= document.getElementById('projects');
let c= document.getElementById('clients');
let d= document.getElementById('partners');


let x=1;
let y=1;
let z=1;
let a=1;
let count = setInterval(() => {
    cof.innerHTML = x;
    x++;
    if(x == 100){
        clearInterval(count);
    }
})

let count1 = setInterval(() => {
    b.innerHTML = y;
    y++;
    if(y == 25){
        clearInterval(count1);
    }
})

let count2 = setInterval(() => {
    c.innerHTML = z;
    z++;
    if(z == 50){
        clearInterval(count2);
    }
})

let count3 = setInterval(() => {
    d.innerHTML = a;
    a++;
    if(a == 47){
        clearInterval(count3);
    }
})



let edubox = document.querySelectorAll('.education .education-row .edu-box');
edubox.forEach(acco => {
    acco.onclick=() => {
        edubox.forEach(dion => dion.classList.remove('active'));
        acco.classList.toggle('active');
    }
   });


ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.heading', { origin: 'top' });

ScrollReveal().reveal('.achievement, .services-box, .about-row .about-box,.b .services .banner', { origin: 'bottom' });

ScrollReveal().reveal('.main .a', { origin: 'bottom' });

ScrollReveal().reveal('.exp-circle,.work-img img', { origin: 'left' });

ScrollReveal().reveal('.skill-row,.edu-box, .exp-desc,.about p', { origin: 'right' });

var element = document.querySelectorAll('.a nav a');
element.forEach(ele =>{
    ele.onclick =()=>{
        element.forEach(el => el.classList.remove('active'));
        ele.classList.toggle('active');
    }
})

function load(){
    let hide=  document.querySelectorAll('.hide');
   hide.forEach(ele => {
    ele.style.display= "block";
    document.querySelector('#loadmorebtn').style.display = "none";
   })
}











































