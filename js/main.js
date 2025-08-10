//   Navbar Scroll Behavior  
const navbar = document.querySelector('.header .navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;

    navbar.classList.toggle('scrolled', scrollTop > 50);

    if (scrollTop === 0) {
        navbar.style.transform = 'translateY(0)';
    } else if (scrollTop > lastScrollTop) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }

    lastScrollTop = scrollTop;
});

//   Mobile Menu Toggle  
const menuToggle = document.getElementById('menuToggle');
const links = document.querySelector('.navbar .links');

menuToggle.addEventListener('click', () => {
    links.classList.toggle('show');
    menuToggle.classList.toggle('open');
});

//   Active Nav Link on Scroll  
const navLinks = document.querySelectorAll('.navbar a[href^="#"]');
const sections = document.querySelectorAll("section[id], header[id]");

function setActiveLink(id) {
    navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${id}`));
}

window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY + 150;
    sections.forEach(section => {
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            setActiveLink(section.id);
        }
    });
});

//   Typed.js Animation  
new Typed('#type', {
    strings: ['Designer', 'Developer'],
    typeSpeed: 150,
    backSpeed: 100,
    loop: true
});

//   Portfolio Filter  
const filterLinks = document.querySelectorAll('.portfolio-filters a');
const items = document.querySelectorAll('.portfolio-items .item');

filterLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        filterLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        const filter = link.dataset.filter;
        items.forEach(item => {
            const show = filter === 'all' || item.classList.contains(filter);
            item.style.display = show ? 'block' : 'none';
            item.classList.toggle('hide', !show);
        });
    });
});

//   Testimonial Slider  
const clients = document.querySelectorAll('.client');
const dots = document.querySelectorAll('.dot');

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        clients.forEach(c => c.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));
        clients[index].classList.add('active');
        dots[index].classList.add('active');
    });
});

//   Form Validation  
const form = document.querySelector('form');
const inputs = form.querySelectorAll('input[required], textarea[required]');
const submitBtn = form.querySelector('button[type="submit"]');

function checkFields() {
    let allFilled = true;
    inputs.forEach(input => {
        const errorMsg = input.parentElement.querySelector('.error-message');
        const isEmpty = !input.value.trim();
        errorMsg.style.display = isEmpty ? 'block' : 'none';
        if (isEmpty) allFilled = false;
    });
    submitBtn.disabled = !allFilled;
}

inputs.forEach(input => input.addEventListener('input', checkFields));
form.addEventListener('submit', e => {
    checkFields();
    if (submitBtn.disabled) e.preventDefault();
});
checkFields();

