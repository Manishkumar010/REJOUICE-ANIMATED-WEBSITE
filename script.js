
function cursorAnimation(){
    var page1Content = document.querySelector("#page1-content");
var cursor = document.querySelector("#cursor");

// page1Content.addEventListener("mousemove",function(dets){
//     cursor.style.left = dets.x+"px";
//     cursor.style.top = dets.y+"px";
// })

page1Content.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
    })
});
page1Content.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
});
page1Content.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
});
};
cursorAnimation()

function page2(){
    gsap.from(".elem h1",{
        y:120,
        stagger:0.3,
        duration:1,
        scrollTrigger:{
            trigger:"#page2",
            scroller:"body",
            start:"top 40%",
            end:"top 37%",
            // markers:true,
            scrub:2
        }
    })
};
page2()

function SecondCursor(){
    var page4 = document.querySelector(".cursor-box");
    var cursor2 = document.querySelector(".cursor");

    page4.addEventListener("mousemove",function(dets){
        gsap.to(cursor2,{
            x:dets.x,
            y:dets.y
        })
    })

    page4.addEventListener("mouseenter",function(){
        gsap.to(cursor2,{
            scale:1,
            opacity:1
        })
    })
    page4.addEventListener("mouseleave",function(){
        gsap.to(cursor2,{
            scale:0,
            opacity:0
        })
    })

}
SecondCursor() 

function sliderAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
          clickable: true,
          autoplay:{
            delay:1500,
            disableOnInteraction: true,
          }
    
      });
}

sliderAnimation()

 function loaderAnimation(){
    var tl = gsap.timeline()

 tl.from("#loader h3",{
    x:50,
    opacity:0,
    duration:1.5,
    delay:0.6,
    stagger:0.2
 })
 tl.to("#loader h3",{
    opacity:0,
    y:30,
    duration:1,
    stagger:0.2
 })
 tl.to("#loader",{
    opacity:0
 })
 tl.from("#page1-content h1 span",{
    y:100,
    opacity:0,
    stagger:0.1,
    duration:0.5,
    delay:-0.5
 })
 tl.to("#loader",{
    display:"none"
 })
 }

 loaderAnimation()

function page3ContentAnimation(){
    gsap.from("#page3-top h2",{
        y:120,
        duration:1,
        opacity:0,
        stagger:0.3,
        scrollTrigger:{
            trigger:"#page3",
            scroller:"body",
            // markers:true,
            start:"top 40%",
            end:"top 37%",
            scrub:2
        }
    })
}
page3ContentAnimation()

function page4ContentAnimation(){
    var tl2 = gsap.timeline({
        duration:1.2,
        scrollTrigger:{
             trigger:"#page4",
             scroller:"body",
             start:"top 40%",
             end:"top 43%",
            //  markers:true,
             scrub:3
         }
     })
    
     tl2.from("#page4-top h2",{
        y:120,
        opacity:0,
        stagger:0.2
     })
     tl2.from(".elem2 h3",{
        y:120,
        opacity:0,
        stagger:0.2
     })
}
page4ContentAnimation()