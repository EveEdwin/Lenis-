// Initialize Lenis
const lenis = new Lenis({
  duration: 1.2, // Lower duration value means faster scroll
  smoothWheel: true
});
// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
document.querySelectorAll(".elem").forEach(elem => {
    let image = elem.querySelector('img');
    let tl = gsap.timeline();
    let xTransform = gsap.utils.random(-100, 100);
    
    tl
        .set(image, {
            transformOrigin: "center"
        })
        .to(image, {
            scale: 0,
            ease: "none",
            scrollTrigger: {
                trigger: image,
                start: "top top",
                end: "bottom top", 
                scrub: true
            }
        })
        .to(elem, {
            xPercent: xTransform,
            ease: "power4"
        })
});