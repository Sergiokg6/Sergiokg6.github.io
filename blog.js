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

    //Text animation for the blog-hero section
    const blogHeroTitle = document.querySelector('.blog-hero h1');
    const blogHeroDesc = document.querySelectorAll('.blog-hero p');
    if(blogHeroTitle) animateText(blogHeroTitle);
     blogHeroDesc.forEach(p => {
       animateText(p);
    })

    // Text animation for blog post desc
    document.querySelectorAll('.blog-posts__item p').forEach(p => {
      animateText(p);
    });

    // Text animation for blog post title
    document.querySelectorAll('.blog-posts__item h3').forEach(h3 => {
        animateText(h3)
    })

});