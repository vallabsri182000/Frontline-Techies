
// faiz slider js

$('.slider').slick({
    dots: false,
    infinite: true,
    prevArrow: false, 
    nextArrow: false,
    speed: 250,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 3.1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 3.1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

// theme change js
const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    document.querySelectorAll(".inverted").forEach((result) => {
        result.classList.toggle('invert');
        document.querySelector(".abhitop").style.position = "fixed";
    });
});
const chk1 = document.getElementById('chk1');

chk1.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    document.querySelectorAll(".inverted").forEach((result) => {
        result.classList.toggle('invert');
        document.querySelector(".abhitop").style.position = "fixed";
    });
});



// abhi menu js

var menuicon = document.querySelector('#bars').addEventListener('click',displaymenu);
var menu = document.querySelector('.menu');
var hide = document.querySelector('.abhibody');
var icon = document.querySelector('#bars');
function displaymenu(e){
    if(menu.className == 'menu'){
        menu.className += ' active';
        hide.style.opacity = 0.3;
        icon.className = 'fa fa-close';
    }
    else{
        menu.className = 'menu';
        hide.style.opacity = 1;
        icon.className = 'fa fa-bars';
    }
}


//vallab marquee slider js

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.vallab-content");
root.style.setProperty("--marquee-elements", marqueeContent.children.length);
for(let i=0; i<marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}
const marqueeContent1 = document.querySelector("ul.pauseact");
root.style.setProperty("--marquee-elements", marqueeContent1.children.length);
for(let i=0; i<marqueeElementsDisplayed; i++) {
    marqueeContent1.appendChild(marqueeContent1.children[i].cloneNode(true));
}

//vallab marquee pause play button

const pausebtn = document.querySelector('.btntwo')
const animation = document.querySelector('.vallab-content')
const animation1 = document.querySelector('.pauseact')
pausebtn.addEventListener('click', function() {
    pausebtn.classList.toggle('active')
    animation.classList.toggle('active')
    animation1.classList.toggle('active')
});
const setbt = document.querySelector('.btnthree')
function setbtn() {
    setbt.classList.toggle('active');
}


// starting loading animation
$(window).on("load", function(){
    $(".loader-wrapper").fadeOut("slow");
});


// Zoom part


var zoom = document.querySelector('#anim');
var caro = document.querySelector('.faiz-container');
var x = document.querySelector('.vallab-section1');
var mar = document.querySelector('.vallab-marquee')

var lastScrollTop = 0;
var z = 1;
var a = 3;
window.addEventListener('scroll', function(){
 var xa = zoom.getBoundingClientRect().bottom;
 var ya = zoom.getBoundingClientRect().top;
 
if(x.getBoundingClientRect().top < window.innerHeight ){
     
         x.style.transition = '2s'  
     x.style.opacity = '1';
     x.style.transform = 'translateY(-20px)'
     
     
}
else{
 x.style.transform = 'translateY(20px)'
 x.style.transition = '0s'
     x.style.opacity = '0';
}
   if(caro.getBoundingClientRect().bottom < (window.innerHeight - 100)){
       if(xa > window.innerHeight){
           zoom.style.transition = '0s'
     var st = window.pageYOffset 
             if (st > lastScrollTop){
                 // downscroll code
                 zoom.style.transform = `scale(${Math.max(1, (z -= 0.06))})`
                 
             } else {
                 // upscroll code
                 if(z<1){
                     z=1
                 }
                 zoom.style.transform = `scale(${Math.min(3, (z += 0.02))})`
             }
             lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
         } 
         
         if(xa < (window.innerHeight + 100)){
             z = 1
             zoom.style.transition = '0.5s'
             zoom.style.transform = `scale(1)`;
             zoom.style.opacity = '1'
         }    
     }else{
         zoom.style.transform = `scale(3)`
         z=3
         zoom.style.transition = '0.5s'
         zoom.style.opacity = '0.3'
         
     }
     
})