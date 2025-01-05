document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling with offset
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
              const targetPosition = targetElement.offsetTop - 70;
              window.scrollTo({
                  top: targetPosition,
                  behavior: 'smooth'
              });
          }

      });
  });

   // Dynamic Year in Footer
    const currentYear = new Date().getFullYear();
    document.querySelector('footer p').innerHTML = `© ${currentYear} feynman.cl | All rights reserved`;

  // Scroll Reveal animation
    function revealOnScroll() {
        const scrollRevealElements = document.querySelectorAll('.scroll-reveal');

        scrollRevealElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
             const pointReveal = 150;
            if (elementTop < windowHeight - pointReveal ) {
                element.classList.add('active');
            }
        })
    }
    window.addEventListener('scroll', revealOnScroll);

     revealOnScroll();


    function revealOnScroll() {
         const scrollRevealElements = document.querySelectorAll('.tm-about-content');
         scrollRevealElements.forEach((element) => {
             const elementTop = element.getBoundingClientRect().top;
             const windowHeight = window.innerHeight;
             const pointReveal = 150;
             if(elementTop < windowHeight - pointReveal) {
                  element.classList.add('active');
             }

         })
     }
        window.addEventListener('scroll', revealOnScroll);

         revealOnScroll();
});