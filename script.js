// script.js

// Фишка 62: Скрипт для основного слайдера
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000); // Фишка 63: Автоматическая смена слайдов каждые 5 секунд
}

// Фишка 64: Навигационные кнопки для слайдера
document.querySelector('.prev').addEventListener('click', () => {
    slideIndex -= 2;
    if (slideIndex < 0) {slideIndex = slides.length - 1;}
    showSlides();
});

document.querySelector('.next').addEventListener('click', () => {
    showSlides();
});

// Фишка 65: Кнопка "Наверх"
window.addEventListener('scroll', () => {
    const backToTop = document.querySelector('.back-to-top');
    if (window.scrollY > 500) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

// Фишка 66: Плавный скролл к началу страницы
document.querySelector('.back-to-top').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
});

// Фишка 67: Валидация формы обратной связи
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Простая валидация
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();

    if (name && email && message) {
        alert('Спасибо! Ваше сообщение отправлено.');
        this.reset(); // Фишка 68: Сброс формы после отправки
    } else {
        alert('Пожалуйста, заполните все поля.');
    }
});

// Фишка 81: Обработка формы подписки на новости
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.email.value.trim();
    if (email) {
        alert('Спасибо за подписку!');
        this.reset();
    } else {
        alert('Пожалуйста, введите ваш Email.');
    }
});

// Фишка 69: Переключение темы оформления (темный/светлый режим)
const themeToggle = document.createElement('div');
themeToggle.className = 'theme-toggle';
themeToggle.innerHTML = '🌙';
document.body.appendChild(themeToggle);

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.innerHTML = '🌞';
    } else {
        themeToggle.innerHTML = '🌙';
    }
});

// Фишка 70: Мобильное меню
const menuToggle = document.createElement('div');
menuToggle.className = 'menu-toggle';
menuToggle.innerHTML = '☰';
document.querySelector('header').appendChild(menuToggle);

menuToggle.addEventListener('click', () => {
    const nav = document.querySelector('nav ul');
    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
    }
});

// Фишка 71: Прелоадер
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
});

// Фишка 83: Анимация появления элементов при скролле
window.addEventListener('scroll', reveal);

function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

// Фишка 21: Таймер до следующего выпуска
// Установите дату следующего выпуска
const countDownDate = new Date("Dec 31, 2024 00:00:00").getTime();

const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const daysElem = document.getElementById("days");
    const hoursElem = document.getElementById("hours");
    const minutesElem = document.getElementById("minutes");
    const secondsElem = document.getElementById("seconds");

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60))/(1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60))/1000);

    daysElem.innerHTML = days < 10 ? '0' + days : days;
    hoursElem.innerHTML = hours < 10 ? '0' + hours : hours;
    minutesElem.innerHTML = minutes < 10 ? '0' + minutes : minutes;
    secondsElem.innerHTML = seconds < 10 ? '0' + seconds : seconds;

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("timer").innerHTML = "Эфир уже идет!";
    }
}, 1000);

// Фишка 82: Лайтбокс для галереи
const galleryLinks = document.querySelectorAll('.gallery a');
galleryLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        document.body.appendChild(lightbox);

        const img = document.createElement('img');
        img.src = this.href;
        lightbox.appendChild(img);

        lightbox.addEventListener('click', () => {
            lightbox.remove();
        });
    });
});

// Фишка 54: Свечение от курсора
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Фишка 75: Инициализация Google Maps
function initMap() {
    const options = {
        zoom: 10,
        center: {lat:55.7558, lng:37.6173} // Координаты Москвы
    };
    const map = new google.maps.Map(document.getElementById('google-map'), options);
}

// Фишка 76: Плавный скролл для якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Фишка 77: Слайдер отзывов
let testimonialIndex = 0;
showTestimonials();

function showTestimonials() {
    let testimonials = document.getElementsByClassName("testimonial");
    for (let i = 0; i < testimonials.length; i++) {
        testimonials[i].style.display = "none";
    }
    testimonialIndex++;
    if (testimonialIndex > testimonials.length) {testimonialIndex = 1}
    testimonials[testimonialIndex-1].style.display = "block";
    setTimeout(showTestimonials, 7000); // Меняем отзыв каждые 7 секунд
}

// Фишка 90: Навигация с клавиатуры
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowUp') {
        window.scrollBy(0, -100);
    } else if (e.key === 'ArrowDown') {
        window.scrollBy(0, 100);
    }
});

// Фишка 100: Установка приложения как PWA
let deferredPrompt;
const addBtn = document.createElement('button');
addBtn.textContent = 'Установить приложение';
addBtn.classList.add('install-button');
document.body.appendChild(addBtn);
addBtn.style.display = 'none';

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    addBtn.style.display = 'block';

    addBtn.addEventListener('click', () => {
        addBtn.style.display = 'none';
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            deferredPrompt = null;
        });
    });
});

// Фишка 99: Регистрация сервис-воркера для PWA
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
        console.log('Сервис-воркер зарегистрирован с областью:', registration.scope);
    }, function(err) {
        console.log('Регистрация сервис-воркера не удалась:', err);
    });
}
