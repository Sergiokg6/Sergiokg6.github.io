document.addEventListener('DOMContentLoaded', () => {

   // Create a universal animation container and add it to the body
  const bgAnimationContainer = document.createElement('div');
  bgAnimationContainer.classList.add('bg-animation-container');
  document.body.appendChild(bgAnimationContainer);

   let blob; // Global variable to hold the current blob
  // Add mousemove listener to the document to make it work in the entire page
  document.addEventListener('mousemove', (e) => {

       if (!blob) { // create a new element if the blob does not exists
          blob = document.createElement('div');
          blob.classList.add('bg-blob');
           bgAnimationContainer.appendChild(blob);
       }
          //Update the position of the element
          blob.style.left = `${e.clientX}px`;
          blob.style.top = `${e.clientY}px`;


  });

  // Remove the blob after a specific timeout period
  setInterval(() => {
      if (blob) {
        blob.remove();
        blob = null;
      }
  }, 600);


     // Header transparency on scroll
     const header = document.querySelector('.header');

     window.addEventListener('scroll', () => {
       if (window.scrollY > 100) {
         header.classList.add('scrolled');
        } else {
           header.classList.remove('scrolled');
       }
      });

  //Dropdowns

  document.querySelectorAll('.header__combobox').forEach(combobox =>{
    const options = combobox.querySelector('.header__combobox-options');
      document.addEventListener('click', function (event) {
        if(combobox.classList.contains('active') && !event.target.closest('.header__combobox')){
            combobox.classList.remove('active');
        }
    });
});

    // Generate particles for the footer background
     const footer = document.querySelector('.footer');
    if(footer){
        const particlesContainer = document.createElement('div')
       particlesContainer.classList.add('footer__particles-container');
       footer.appendChild(particlesContainer);

       for (let i = 0; i < 40; i++){
           const particle = document.createElement('div');
             particle.classList.add('footer__particle');

           particle.style.top = `${Math.random() * 100}%`;
              particle.style.left = `${Math.random() * 100}%`;

              const size = Math.random() * 5;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;

         particlesContainer.appendChild(particle);
       }
  }

      // Reveal the form
        const heroRight = document.querySelector('.hero__right');
         if(heroRight){
          setTimeout(() => {
            heroRight.classList.add('animate__fade-in-right');
           }, 200)
         }

  // Lazy Loading
  const lazyLoadImages = document.querySelectorAll('.lazy-load');

  const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src;
              img.classList.remove('lazy-load')
              imageObserver.unobserve(img);
          }
      })
  });

  lazyLoadImages.forEach((img) => {
      imageObserver.observe(img)
  })


  // Form Validation and Whatsapp
  const contactForm = document.querySelector('#contactForm');
  if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const errorMessage = document.querySelector('#error-message')
          const message = document.querySelector('.contact-form__textarea');
          const name = document.querySelector('.contact-form__input[name="name"]');
          const email = document.querySelector('.contact-form__input[name="email"]');

          if (!message.value || !name.value || !email.value) {
              errorMessage.textContent = 'All fields are required';
               errorMessage.classList.add('active');
              return;
          }

          if (!isValidEmail(email.value)) {
              errorMessage.textContent = 'Please enter a valid email address';
               errorMessage.classList.add('active');
              return;
          }

          errorMessage.textContent = "";
         errorMessage.classList.remove('active');

          const whatsappMessage = `Name: ${name.value}%0aEmail: ${email.value}%0aMessage: ${message.value}`;
          window.open(`https://wa.me/56936978100?text=${whatsappMessage}`, '_blank');

          contactForm.reset();
      });
  }

  function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }


  // Mobile Menu Handling
  const menuBtn = document.querySelector('.header__menu-btn');
  const mobileMenu = document.querySelector('.header__mobile-menu');
  const menuLinks = document.querySelectorAll('.header__mobile-menu a');

  if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', function () {
          menuBtn.classList.toggle('active');
          mobileMenu.classList.toggle('active');
          document.body.classList.toggle('mobile-menu-open');
      });

      menuLinks.forEach(item => {
          item.addEventListener('click', function () {
              menuBtn.classList.remove('active');
              mobileMenu.classList.remove('active');
              document.body.classList.remove('mobile-menu-open');
          });
      });
  }

  // Close menu when clicking outside of the menu
  document.addEventListener('click', function (event) {
      if (mobileMenu && mobileMenu.classList.contains('active') && !event.target.closest('.header__mobile-menu, .header__menu-btn')) {
          menuBtn.classList.remove('active');
          mobileMenu.classList.remove('active');
          document.body.classList.remove('mobile-menu-open');
      }
  });

});