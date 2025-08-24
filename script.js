// Small JS to add more flair if you like
const heroTitle = document.getElementById('hero-title');

heroTitle.addEventListener('mouseover', () => {
    heroTitle.style.color = '#00ff99';
    heroTitle.style.transform = 'scale(1.2) rotate(5deg)';
});

heroTitle.addEventListener('mouseout', () => {
    heroTitle.style.color = '#ffdd00';
    heroTitle.style.transform = 'scale(1) rotate(0deg)';
});

// Make bots bounce on hover
const bots = document.querySelectorAll('.bot');

bots.forEach(bot => {
    bot.addEventListener('mouseover', () => {
        bot.style.transform = 'translateY(-20px) rotate(20deg)';
    });
    bot.addEventListener('mouseout', () => {
        bot.style.transform = 'translateY(0) rotate(0deg)';
    });
});