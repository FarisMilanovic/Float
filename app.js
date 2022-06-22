//intro animation and starting screen
const tl = gsap.timeline({defaults: {ease:"power1.out"}});
tl.to('.intro', 2,{y:"-100%",delay:1});
tl.fromTo(".nav-links",0.5,{y:"50%",opacity:0},{y:"0%",opacity:1});
tl.fromTo("#logo",0.5,{y:"50%",opacity:0},{y:"0%",opacity:1},"-=0.5");
tl.fromTo("p",1,{x:"50%",opacity:0},{x:"0%",opacity:1},"-=0.5");



//event listeners on buttons
const homeBtn = document.getElementById('homeBtn');
const contactBtn = document.getElementById('contactBtn');
const aboutBtn = document.getElementById('aboutBtn');

homeBtn.addEventListener("click", function(){
    location.hash = '#s1';
});
contactBtn.addEventListener("click", function(){
    window.location.href = '#contact';
});
aboutBtn.addEventListener("click", function(){
    location.hash = '#about';
});



//animations on scroll
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);