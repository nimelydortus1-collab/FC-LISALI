// JavaScript for World Hope Worship Center Website

// Toggle sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

// Toggle mobile nav
function toggleNav() {
    const wrapper = document.getElementById('navLinks');
    const btn = document.querySelector('.nav-toggle');
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    if (wrapper) wrapper.classList.toggle('open');
    btn.setAttribute('aria-expanded', (!expanded).toString());
}

// Form submission handlers
function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (name && email && message) {
        alert('Thank you for your message, ' + name + '! We will get back to you soon.');
        // Reset form
        event.target.reset();
    } else {
        alert('Please fill in all fields.');
    }
    return false;
}

function signup(event) {
    event.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    if (name && email && password) {
        alert('Thank you for signing up, ' + name + '!');
        event.target.reset();
    } else {
        alert('Please fill in all fields.');
    }
    return false;
}

function signin(event) {
    event.preventDefault();
    const email = document.getElementById('signinEmail').value;
    const password = document.getElementById('signinPassword').value;

    if (email && password) {
        alert('Welcome back!');
        event.target.reset();
    } else {
        alert('Please enter your email and password.');
    }
    return false;
}

  const slides = document.querySelectorAll('.slides');
  const dots = document.querySelectorAll('.dot');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[index].classList.add('active');
    dots[index].classList.add('active');
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSlide = index;
      showSlide(currentSlide);
    });
  });

  setInterval(nextSlide, 5000); // change every 5 seconds

// Back to top button
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

