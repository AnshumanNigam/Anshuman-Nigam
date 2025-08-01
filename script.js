// Universe starfield background
const canvas = document.getElementById('universe-bg');
const ctx = canvas.getContext('2d');
let width, height;
let stars = [];

function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
}

function createStars(num) {
    stars = [];
    for (let i = 0; i < num; i++) {
        stars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            r: Math.random() * 1.1 + 0.3,
            d: Math.random() * 1.1 + 0.5,
            s: Math.random() * 0.5 + 0.08
        });
    }
}

function animate() {
    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.globalAlpha = 0.85;
    for (let star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
        ctx.fillStyle = "white";
        ctx.shadowColor = "#c9d5ff";
        ctx.shadowBlur = 4 + star.r*2.2;
        ctx.fill();
        // Animate
        star.x += star.s * star.d;
        if (star.x > width) {
            star.x = 0;
            star.y = Math.random() * height;
        }
    }
    ctx.restore();
    requestAnimationFrame(animate);
}

// Responsive and recreate on resize
window.addEventListener('resize', () => {
    resize();
    createStars(145);
});
resize();
createStars(145);
animate();

// Reveal sections animation
document.querySelectorAll('section, footer').forEach((section, i) => {
    section.style.opacity = 0;
    section.style.transform = "translateY(26px)";
    setTimeout(() => {
        section.style.transition = "opacity 0.6s cubic-bezier(.5,.2,.2,.9), transform 0.6s cubic-bezier(.5,.2,.2,.9)";
        section.style.opacity = 1;
        section.style.transform = "translateY(0)";
    }, 260 + i * 120);
});

// Smooth navbar scroll
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.hash) {
            e.preventDefault();
            const target = document.querySelector(this.hash);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 65, // Offset for sticky navbar
                    behavior: 'smooth'
                });
            }
        }
    });
});
