// Function to generate random numbers
function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}
// Function to generate random integers
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


document.addEventListener('DOMContentLoaded', () => {
const canvas = document.getElementById('blogHeroCanvas');
const ctx = canvas.getContext('2d');
let particles = [];

function setupCanvas() {
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = randomFloat(1, 3);
      this.color = 'rgba(255, 255, 255, 0.5)';
      this.speedX = randomFloat(-1, 1);
      this.speedY = randomFloat(-1, 1);
  }

  update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x > canvas.width + 10 || this.x < -10) this.speedX *= -1;
      if (this.y > canvas.height + 10 || this.y < -10) this.speedY *= -1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}


function createParticles() {
  particles = []; //Reset particles array
  const numberOfParticles = Math.max(canvas.width / 15, canvas.height / 15); // Adapt particle count to screen size
  for(let i = 0; i < numberOfParticles; i++) {
    particles.push(new Particle(
     randomFloat(0, canvas.width),
      randomFloat(0, canvas.height)
    ))
  }
}

  function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
          particle.update();
          particle.draw();
      });
      requestAnimationFrame(animateParticles);
  }

  setupCanvas();
  createParticles();
  animateParticles();
   window.addEventListener('resize', () => {
        setupCanvas();
      createParticles(); // Recreate particles after resizing
     });

    // Blog Post Animation
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

      // Text animation for blog post title
      document.querySelectorAll('.blog-posts__item h3').forEach(h3 => {
          animateText(h3)
      });

  // Text animation for blog post desc
      document.querySelectorAll('.blog-posts__item p').forEach(p => {
          animateText(p);
      });


      // Functionality search
     document.getElementById('searchButton').addEventListener('click', function () {
         const searchTerm = document.getElementById('blogSearch').value.trim().toLowerCase();
         const blogPosts = document.querySelectorAll('.blog-posts__item');
          const blogPostList = document.getElementById('blogPostList');

         if(!searchTerm){
           blogPosts.forEach(post => {
              post.style.display = 'flex';
           })
           return;
          }

          let matchingPosts = [];
           blogPosts.forEach(post => {
               const tags = post.getAttribute('data-tags').toLowerCase();
               const author = post.getAttribute('data-author').toLowerCase();
              const title = post.querySelector('h3').textContent.toLowerCase();
              const description = post.querySelector('p').textContent.toLowerCase();
              if (tags.includes(searchTerm) || author.includes(searchTerm) || title.includes(searchTerm) || description.includes(searchTerm)) {
                  matchingPosts.push(post);
                  post.style.display = 'block';
              } else{
               post.style.display = 'none';
              }
          });

          if(matchingPosts.length === 0) {
            blogPostList.innerHTML = '<p>No matching posts found</p>';
          } else {
              const filteredPosts = Array.from(blogPosts).filter(post => matchingPosts.includes(post)); // Filter out all the hidden posts and only keep matching posts
              blogPostList.innerHTML = ''; // Clean current list
              filteredPosts.forEach(post => {
                  blogPostList.appendChild(post);
              })
          }
  });
});