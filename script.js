
function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}


init()

gsap.from(".behind",{
    opacity: 0,
    scale: 0,
    delay: 2.8,
    duration: 1,
});

gsap.from(".img",{
    scale: 1.1,
    delay: 2,
    duration: 1,
});

gsap.from(".text1 h1:nth-child(1)",{
    opacity: 0,    
    y: 20,
    delay: 2.5,
    duration: 0.5,
});
gsap.from(".text1 h1:nth-child(2)",{
    opacity: 0,    
    y: 20,
    delay: 2.6,
    duration: 0.5,
});
gsap.from(".text1 h1:nth-child(3)",{
    opacity: 0,    
    y: 20,
    delay: 2.7,
    duration: 0.5,
});
gsap.from(".text1 h1:nth-child(4)",{
    opacity: 0,    
    y: 20,
    delay: 2.8,
    duration: 0.5,
});
gsap.from(".text1 h1:nth-child(5)",{
    opacity: 0,    
    y: 20,
    delay: 2.9,
    duration: 0.5,
});
gsap.from(".text1 h1:nth-child(6)",{
    opacity: 0,    
    y: 20,
    delay: 3,
    duration: 0.5,
});
gsap.from(".text1 h1:nth-child(7),.text2 h1:nth-child(1)",{
    opacity: 0,    
    y: 20,
    delay: 3.1,
    duration: 0.5,
});
gsap.from(".text1 h1:nth-child(8),.text2 h1:nth-child(2)",{
    opacity: 0,    
    y: 20,
    delay: 3.2,
    duration: 0.5,
});
gsap.from(".text1 h1:nth-child(9),.text2 h1:nth-child(3)",{
    opacity: 0,    
    y: 20,
    delay: 3.3,
    duration: 0.5,
});
gsap.from(".text1 h1:nth-child(10),.text2 h1:nth-child(4)",{
    opacity: 0,    
    y: 20,
    delay: 3.4,
    duration: 0.5,
});

gsap.from(".text5 h1:nth-child(1),.text4 h1:nth-child(1)",{
    opacity: 0,    
    y: -20,
    delay: 2.9,
    duration: 0.5,
});
gsap.from(".text5 h1:nth-child(2),.text4 h1:nth-child(2)",{
    opacity: 0,    
    y: -20,
    delay: 2.8,
    duration: 0.5,
});
gsap.from(".text5 h1:nth-child(3)",{
    opacity: 0,    
    y: -20,
    delay: 2.7,
    duration: 0.5,
});
gsap.from(".text5 h1:nth-child(4)",{
    opacity: 0,    
    y: -20,
    delay: 2.6,
    duration: 0.5,
});
gsap.from(".text5 h1:nth-child(5)",{
    opacity: 0,    
    y: -20,
    delay: 2.5,
    duration: 0.5,
});

gsap.from(".circle , .page2",{
    opacity: 0,
    delay: 2.5,
    duration: 0.5,
});


gsap.from(".page1",{
    opacity: 0,
    scale: 0.5,
    delay: 1,
    duration: 2,
})

var tl1 = gsap.timeline({
    scrollTrigger: {
        delay:1,
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top -40%",
        scrub: 3
    }
})
tl1.from(".left h1", {
    opacity: 0,
    x:10,
})
tl1.from(".right h1",{
    opacity: 0,
    x:-10,
})
tl1.from(".left span:nth-child(1),.left span:nth-child(12)",{
    opacity: 0,    
    y: 20,
    
});
tl1.from(".left span:nth-child(2)",{
    opacity: 0,    
    y: 20,
    
});
tl1.from(".left span:nth-child(3)",{
    opacity: 0,    
    y: 20,
    
});
tl1.from(".left span:nth-child(4),.left span:nth-child(13)",{
    opacity: 0,    
    y: 20,
    
});
tl1.from(".left span:nth-child(5)",{
    opacity: 0,    
    y: 20,
    
});
tl1.from(".left span:nth-child(6)",{
    opacity: 0,    
    y: 2
    
});
tl1.from(".left span:nth-child(7),.left span:nth-child(14)",{
    opacity: 0,    
    y: 20,
    
});
tl1.from(".left span:nth-child(8)",{
    opacity: 0,    
    y: 20,
    
});
tl1.from(".left span:nth-child(9)",{
    opacity: 0,    
    y: 20,
    
});
tl1.from(".left span:nth-child(10),.left span:nth-child(15)",{
    opacity: 0,    
    y: 20,
    
});

var tl2 = gsap.timeline({
    scrollTrigger: {
        delay:1,
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top -240%",
        scrub: 3
    }
})
tl2.from(".title1 h1:nth-child(1),.title2 h1:nth-child(1)",{
    opacity: 0,    
    y: 20,
    
});
tl2.from(".title1 h1:nth-child(2)",{
    opacity: 0,    
    y: 20,
    
});
tl2.from(".title1 h1:nth-child(3)",{
    opacity: 0,    
    y: 20,
    
});
tl2.from(".title1 h1:nth-child(4),.title2 h1:nth-child(2)",{
    opacity: 0,    
    y: 20,
    
});
tl2.from(".title1 h1:nth-child(5)",{
    opacity: 0,    
    y: 20,
    
});
tl2.from(".title1 h1:nth-child(6)",{
    opacity: 0,    
    y: 2
    
});
tl2.from(".title1 h1:nth-child(7),.title2 h1:nth-child(3)",{
    opacity: 0,    
    y: 20,
    
});
tl2.from(".title1 h1:nth-child(8)",{
    opacity: 0,    
    y: 20,
    
});
tl2.from(".title1 h1:nth-child(9)",{
    opacity: 0,    
    y: 20,
    
});
tl2.from(".title1 h1:nth-child(10),.title2 h1:nth-child(4)",{
    opacity: 0,    
    y: 20,
    
});