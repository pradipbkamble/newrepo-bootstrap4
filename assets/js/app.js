let cl=console.log;

const toglebtn=document.getElementById("toglebtn");

let onclick=(eve)=>{
cl(eve.target)
eve.target.classList.toggle("fa-xmark");
eve.target.classList.toggle("fa-bars")
}








$('.owl-carousel').owlCarousel({
    loop:true,
    dots:false,
    margin:10,
    nav:true,
    autoplay:true,
    timer:1000,
    
    navText:[`<i class="fa-solid fa-caret-left"></i>`,`<i class="fa-solid fa-caret-right"></i>`],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})



toglebtn.addEventListener("click",onclick)
