document.addEventListener('DOMContentLoaded', () => {

    // Carousel
    const trustLogoList = document.querySelector('.trust-section__logo-list');
    const prevArrow = document.querySelector('.trust-section__arrow--prev');
    const nextArrow = document.querySelector('.trust-section__arrow--next');
    const logoIndicators = document.querySelectorAll('.trust-section__logo-indicator');

    if(trustLogoList && prevArrow && nextArrow && logoIndicators){
        let currentPosition = 0;
        const logoWidth = 180;  // Based on image width + margin in CSS
        const logosPerPage = 3;


        const maxPosition = (trustLogoList.children.length - logosPerPage) * logoWidth;

        function updateIndicator() {
            const currentPage = Math.abs(currentPosition / (logoWidth * logosPerPage));
            logoIndicators.forEach((indicator, index) => {
                if(index === currentPage){
                    indicator.classList.add('trust-section__logo-indicator--active');
                }else{
                    indicator.classList.remove('trust-section__logo-indicator--active');
                }
            })
        }

        nextArrow.addEventListener('click', () => {
            if(currentPosition > -maxPosition){
                currentPosition -= logoWidth * logosPerPage;
                trustLogoList.style.transform = `translateX(${currentPosition}px)`;
                updateIndicator();
            }
        });

        prevArrow.addEventListener('click', () => {
            if(currentPosition < 0){
                currentPosition += logoWidth * logosPerPage;
                trustLogoList.style.transform = `translateX(${currentPosition}px)`;
                updateIndicator();
            }
        });

        logoIndicators.forEach((indicator, index)=>{
            indicator.addEventListener('click', ()=>{
                currentPosition = -(logoWidth * logosPerPage) * index;
                trustLogoList.style.transform = `translateX(${currentPosition}px)`;
                updateIndicator();
            })
        })
    }



    // // CSS Animation BLOG
    // const container = document.querySelector('.blog-section');
    // if (container) {
    //     const bgAnimation = document.createElement('div');
    //     bgAnimation.classList.add('blog-section__bg-animation');
    //     container.prepend(bgAnimation);

    //     container.addEventListener('mousemove', (e) => {
    //         const blob = document.createElement('div');
    //         blob.classList.add('blog-section__bg-blob');
    //         blob.style.left = `${e.clientX}px`;
    //         blob.style.top = `${e.clientY}px`;

    //         bgAnimation.appendChild(blob);

    //         setTimeout(() => {
    //             blob.remove()
    //         }, 600);
    //     });
    // }





    
    // Reveal the form
    const heroRight = document.querySelector('.hero__right');
    if(heroRight){
     setTimeout(() => {
       heroRight.classList.add('animate__fade-in-right');
      }, 200)
    }






    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame

    onload = function (){
      setTimeout(init,0)
    }
    
    init = function(){
      canvas = document.querySelector('canvas')
      ctx = canvas.getContext('2d')
    
      onresize = function(){
        canvas.width = canvas.clientWidth
        canvas.height = canvas.clientHeight
      }
      onresize()
    
      mouse = {x:canvas.width/2,y:canvas.height/2,out:false}
    
      canvas.onmouseout = function(){
        mouse.out = true
      }
    
      canvas.onmousemove = function(e){
        var rect = canvas.getBoundingClientRect()
        mouse = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
          out: false
        }
      }
    
      gravityStrength = 10
      particles = []
      spawnTimer = 0
      spawnInterval = 10
      type = 0
      requestAnimationFrame(startLoop)
    }
    
    newParticle = function(){
      type = type?0:1
      particles.push({
        x:mouse.x,
        y:mouse.y,
        xv:type?18*Math.random()-9:24*Math.random()-12,
        yv:type?18*Math.random()-9:24*Math.random()-12,
        c:type?'rgb(255,'+((200*Math.random())|0)+','+((80*Math.random())|0)+')':'rgb(255,255,255)',
        s:type?5+10*Math.random():1,
        a:1
      })
    }
    
    startLoop = function(newTime){
      time = newTime
      requestAnimationFrame(loop)
    }
    
    loop = function(newTime){
      draw()
      calculate(newTime)
      requestAnimationFrame(loop)
    }
    
    draw = function(){
      ctx.clearRect(0,0,canvas.width,canvas.height)
      for(var i=0;i<particles.length;i++){
        var p = particles[i]
        ctx.globalAlpha = p.a
        ctx.fillStyle = p.c
        ctx.beginPath()
        ctx.arc(p.x,p.y,p.s,0,2*Math.PI)
        ctx.fill()
      }
    }
    
    calculate = function(newTime){
      var dt = newTime-time
      time = newTime
    
      if(!mouse.out){
        spawnTimer += (dt<100)?dt:100
        for(;spawnTimer>0;spawnTimer-=spawnInterval){
          newParticle()
        }
      }
    
      particleOverflow = particles.length-700
      if(particleOverflow>0){
        particles.splice(0,particleOverflow)
      }
    
      for(var i=0;i<particles.length;i++){
        var p = particles[i]
        if(!mouse.out){
          x = mouse.x-p.x
          y = mouse.y-p.y
          a = x*x+y*y
          a = a>100?gravityStrength/a:gravityStrength/100
          p.xv = (p.xv+a*x)*0.99
          p.yv = (p.yv+a*y)*0.99
        }
        p.x += p.xv
        p.y += p.yv
        p.a *= 0.99
      }
    }
});