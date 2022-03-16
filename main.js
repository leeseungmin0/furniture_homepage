const homeText_1 = document.querySelector(".area1,.area2")
window.addEventListener('scroll',function(){
    const value = window.scrollY
    if(value>200){
        homeText_1.style.animation = "back__slide 1.5s ease-out forwards"
    }else{
        homeText_1.style.animation = "slide 1.5s ease-out"
    }
});

const homeText_2 = document.querySelector(".area2")
window.addEventListener('scroll',function(){
    const value = window.scrollY
    if(value>750){
        homeText_2.style.animation = "slide 1.5s ease-out"
    }else{
        homeText_2.style.animation = "back__slide 1.5s ease-out forwards"
    }
});

const homeText_3 = document.querySelector(".area3")
window.addEventListener('scroll',function(){
    const value = window.scrollY
    if(value>1500){
        homeText_3.style.animation = "slide 1.5s ease-out"
    }else{
        homeText_3.style.animation = "back__slide 1.5s ease-out forwards"
    }
});

const homeText_4 = document.querySelector(".area4")
window.addEventListener('scroll',function(){
    const value = window.scrollY
    if(value>2250){
        homeText_4.style.animation = "slide 1.5s ease-out"
    }else{
        homeText_4.style.animation = "back__slide 1.5s ease-out forwards"
    }
});