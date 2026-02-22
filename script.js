window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 80) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Hi Falak! This is a demo. Your message has been "sent" successfully.');
    this.reset();
});