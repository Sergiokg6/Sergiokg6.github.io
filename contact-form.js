document.addEventListener('DOMContentLoaded', () => {
  // Text Animation with staggering
  function animateText(element) {
      const text = element.textContent;
       element.innerHTML = "";
       text.split(" ").forEach((word, index) => {
         const span = document.createElement('span');
          span.textContent = word + " ";
           span.style.transitionDelay = `${index * 50}ms`;
            element.appendChild(span);
     });
       setTimeout(() => {
            element.classList.add('animate__fade-in-up');
        }, 100);
    }
       // Text animation for the contact-hero section
          // const contactHeroTitle = document.querySelector('.contact-hero__title');
          // const contactHeroDesc = document.querySelectorAll('.contact-hero__desc p');
          // if(contactHeroTitle) animateText(contactHeroTitle);
          //   if(contactHeroDesc) {
          //     contactHeroDesc.forEach(p => {
          //       animateText(p);
          //     })
          //    }

       //Form
    const form = document.getElementById('contactForm');
        const formSteps = document.querySelectorAll('.form-step');
       const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
      const submitButton = document.querySelector('.submit-button');
      const errorMessage = document.getElementById('error-message');
    let currentStep = 1;

  function showStep(step){
      formSteps.forEach(stepElement => {
        stepElement.classList.remove('form-step--active');
          });
        const activeStep = document.querySelector(`.form-step[data-step="${step}"]`)
           activeStep.classList.add('form-step--active');
       if(step===1){
            prevButton.disabled = true;
          prevButton.classList.add('form-button--disabled');
        }else {
           prevButton.disabled = false;
            prevButton.classList.remove('form-button--disabled');
         }
       if(step===formSteps.length) {
            nextButton.style.display = 'none';
           submitButton.style.display = 'inline-block';
       } else{
         nextButton.style.display = 'inline-block';
         submitButton.style.display = 'none';
        }
      }
     showStep(currentStep)

  function validateFormStep() {
       const activeStep = document.querySelector(`.form-step[data-step="${currentStep}"]`);
        let inputs = activeStep.querySelectorAll('input, select, textarea');
       return Array.from(inputs).every(input => input.checkValidity());
   }

     prevButton.addEventListener('click', (e) => {
      e.preventDefault();
       currentStep--;
      showStep(currentStep);
       });

     nextButton.addEventListener('click', (e)=>{
     e.preventDefault();
       if(!validateFormStep()) {
        errorMessage.textContent = 'Please fill all the fields in this section'
           errorMessage.classList.add('active');
          return;
       }
        errorMessage.textContent = "";
          errorMessage.classList.remove('active');
           currentStep++;
        showStep(currentStep);
        });

    submitButton.addEventListener('click', async (e) => {
    e.preventDefault();
      if(!validateFormStep()) {
         errorMessage.textContent = 'Please fill all the fields in this section'
          errorMessage.classList.add('active');
         return;
      }
       errorMessage.textContent = "";
       errorMessage.classList.remove('active');
       const formData = new FormData(form);

      let mailBody = "New Prospect Form Submission:\n";
      formData.forEach((value, key) => {
      mailBody += `${key}: ${value}\n`;
      });
       let mailToLink = `mailto:sergio@cleverest.cl?subject=New Prospect Form Submission&body=${encodeURIComponent(mailBody)}`;
        window.location.href = mailToLink;
     form.reset();
    });

});