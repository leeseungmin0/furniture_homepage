const homeText_1 = document.querySelector(".area1")
window.addEventListener('scroll',function(){
    const value = window.scrollY
    if(value>250){
        homeText_1.style.animation = "back__slide 1.5s ease-out forwards"
    }else{
        homeText_1.style.animation = "slide 1.5s ease-out"
    }
});

const homeText_2 = document.querySelector(".area2")
window.addEventListener('scroll',function(){
    const value2 = window.scrollY
    if(value2>700){
        homeText_2.style.animation = "slide 1.5s ease-out"
    }else{
        homeText_2.style.animation = "back__slide 1.5s ease-out forwards"
    }
});

const homeText_3 = document.querySelector(".area3")
window.addEventListener('scroll',function(){
    const value3 = window.scrollY
    if(value3>1500){
        homeText_3.style.animation = "slide 1.5s ease-out"
    }else{
        homeText_3.style.animation = "back__slide 1.5s ease-out forwards"
    }
});

const homeText_4 = document.querySelector(".area4")
window.addEventListener('scroll',function(){
    const value4 = window.scrollY
    if(value4>2250){
        homeText_4.style.animation = "slide 1.5s ease-out"
    }else{
        homeText_4.style.animation = "back__slide 1.5s ease-out forwards"
    }
});