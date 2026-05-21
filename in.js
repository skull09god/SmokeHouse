document.addEventListener('DOMContentLoaded', () => {

    // --- Audio Branding ---
    const audio = document.getElementById('fire-audio');
    const audioBtn = document.getElementById('audio-toggle');
    const audioIcon = document.getElementById('audio-icon');

    if (audio) {
        audio.volume = 0.3; // Starting volume low for ambiance
    }

    let isPlaying = false;

    if (audioBtn) {
        audioBtn.addEventListener('click', () => {
            if (!isPlaying) {
                audio.play().catch(error => console.log("Audio play failed:", error));
                // Change icon to volume-on
                audioIcon.innerHTML = `
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                `;
                isPlaying = true;
            } else {
                audio.pause();
                // Change icon to volume-off
                audioIcon.innerHTML = `
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <line x1="23" y1="9" x2="17" y2="15"></line>
                    <line x1="17" y1="9" x2="23" y2="15"></line>
                `;
                isPlaying = false;
            }
        });
    }

    // --- Scroll Reveal Animations ---
    const fadeElements = document.querySelectorAll('.fade-up');

    const checkVisibility = () => {
        const triggerBottom = window.innerHeight * 0.85;

        fadeElements.forEach(item => {
            const boxTop = item.getBoundingClientRect().top;
            if (boxTop < triggerBottom) {
                item.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // initial check

    // --- Vibe Video Player ---
    const vibePlayBtn = document.getElementById('vibe-play-btn');
    const vibeVideoContainer = document.getElementById('vibe-video-container');
    const vibeVideo = document.getElementById('vibe-video');
    const vibeControls = document.getElementById('vibe-controls');
    const vibePlayPause = document.getElementById('vibe-play-pause');
    const vibeSeek = document.getElementById('vibe-seek');
    const vibeTime = document.getElementById('vibe-time');

    const playIcon = `<svg viewBox="0 0 24 24" fill="white" width="24" height="24"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`;
    const pauseIcon = `<svg viewBox="0 0 24 24" fill="white" width="24" height="24"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>`;

    function formatTime(seconds) {
        if (isNaN(seconds)) return "0:00";
        const min = Math.floor(seconds / 60);
        const sec = Math.floor(seconds % 60);
        return `${min}:${sec < 10 ? '0' : ''}${sec}`;
    }

    if (vibePlayBtn && vibeVideoContainer && vibeVideo) {
        vibePlayBtn.addEventListener('click', () => {
            vibeVideoContainer.classList.add('playing');
            vibeVideo.play().catch(e => console.error("Video playback failed", e));
            if (vibePlayPause) vibePlayPause.innerHTML = pauseIcon;
        });

        if (vibePlayPause) {
            vibePlayPause.addEventListener('click', () => {
                if (vibeVideo.paused) {
                    vibeVideo.play();
                    vibePlayPause.innerHTML = pauseIcon;
                } else {
                    vibeVideo.pause();
                    vibePlayPause.innerHTML = playIcon;
                }
            });
        }

        if (vibeSeek && vibeTime) {
            vibeVideo.addEventListener('timeupdate', () => {
                const current = vibeVideo.currentTime;
                const duration = vibeVideo.duration || 1;
                vibeSeek.value = (current / duration) * 100;
                vibeTime.textContent = `${formatTime(current)} / ${formatTime(duration)}`;
            });

            vibeSeek.addEventListener('input', () => {
                const time = (vibeSeek.value / 100) * vibeVideo.duration;
                vibeVideo.currentTime = time;
            });
        }
    }

    // --- Reviews Marquee Duplication ---
    const reviewsTrack = document.getElementById('reviews-track');
    if (reviewsTrack) {
        // Clone the reviews to make the infinite scroll seamless
        const reviewsContent = reviewsTrack.innerHTML;
        reviewsTrack.innerHTML += reviewsContent;
    }

    // --- Hero Slideshow ---
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 5000); // Change slide every 5 seconds
    }

    // --- Interactive Canvas Smoke ---
    const canvas = document.getElementById('smoke-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particlesArray = [];
        let mouse = {
            x: null,
            y: null
        }

        window.addEventListener('mousemove', (event) => {
            mouse.x = event.x;
            mouse.y = event.y;
            // Emit smoke particles strictly from current mouse position
            for (let i = 0; i < 3; i++) {
                particlesArray.push(new Particle(mouse.x, mouse.y, true));
            }
        });

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });

        class Particle {
            constructor(x, y, isMouse = false) {
                this.x = x || (canvas.width * 0.5);
                this.y = y || (canvas.height * 0.8);
                // Mouse particles are smaller, ambient ones are bigger
                this.size = isMouse ? (Math.random() * 20 + 5) : (Math.random() * 50 + 20);
                this.speedX = Math.random() * 1.5 - 0.75;
                this.speedY = Math.random() * -1.5 - 0.5; // Float upwards

                // Smoke transparency
                const opacity = isMouse ? (Math.random() * 0.08) : (Math.random() * 0.05);
                this.color = `rgba(200, 200, 200, ${opacity})`;

                this.life = isMouse ? 80 : 150;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.size += 0.3; // Expand as it rises
                this.life -= 1;
            }
            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function handleParticles() {
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
                particlesArray[i].draw();

                if (particlesArray[i].life <= 0) {
                    particlesArray.splice(i, 1);
                    i--;
                }
            }
        }

        // Ambient smoke at the bottom
        setInterval(() => {
            if (particlesArray.length < 100) {
                const x = Math.random() * canvas.width;
                const y = canvas.height + 50;
                particlesArray.push(new Particle(x, y));
            }
        }, 150);

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            handleParticles();
            requestAnimationFrame(animate);
        }

        animate();
    }

    // --- Dynamic Menu Data & Rendering ---
    const menuData = [
        // SOUPS
        { name: "Clear Soup (Veg/Non-Veg)", price: "140/160", category: "Soups", intensity: "light" },
        { name: "Sweet Corn Soup (Veg/Non-Veg)", price: "140/160", category: "Soups", intensity: "light" },
        { name: "Manchow Soup (Veg/Non-Veg)", price: "150/170", category: "Soups", intensity: "medium" },

        // VEG STARTERS
        { name: "Paneer Pepper Fry", price: "315", category: "Veg Starters", intensity: "medium" },
        { name: "Tandoori Paneer Tikka", price: "379", category: "Veg Starters", intensity: "heavy" },
        { name: "Barbeque Pineapple", price: "349", category: "Veg Starters", intensity: "heavy" },
        { name: "Cajun Spiced Potato", price: "269", category: "Veg Starters", intensity: "medium" },

        // NON-VEG STARTERS
        { name: "Tandoori Murgh Tikka", price: "315", category: "Non-Veg Starters", intensity: "heavy" },
        { name: "Charcoal Chicken Wings", price: "389", category: "Non-Veg Starters", intensity: "heavy" },
        { name: "Tandoori Prawns", price: "499", category: "Non-Veg Starters", intensity: "heavy" },
        { name: "Sea Food Platter", price: "899", category: "Non-Veg Starters", intensity: "medium" },
        { name: "The Ultimate Non-Veg Platter", price: "1099", category: "Non-Veg Starters", intensity: "heavy" },

        // ASIAN STARTERS/MAIN
        { name: "Chilli/Manchurian Chicken", price: "349", category: "Asian", intensity: "light" },
        { name: "Chicken Fried Rice", price: "319", category: "Asian", intensity: "light" },
        { name: "Prawn Schezwan Fried Rice", price: "359", category: "Asian", intensity: "medium" },

        // INDIAN MAIN COURSE
        { name: "Dal Makhani", price: "249", category: "Indian Main", intensity: "light" },
        { name: "Paneer Butter Masala", price: "379", category: "Indian Main", intensity: "light" },
        { name: "Murgh Lababdar", price: "419", category: "Indian Main", intensity: "medium" },
        { name: "Mutton Rogan Josh", price: "499", category: "Indian Main", intensity: "medium" },

        // DESSERTS
        { name: "Sizzling Brownie with Ice Cream", price: "249", category: "Dessert", intensity: "medium" },
        { name: "Gulab Jamun", price: "119", category: "Dessert", intensity: "light" }
    ];

    const menuContainer = document.getElementById('menu-container');
    const tabs = document.querySelectorAll('.intensity-tab');

    function renderMenu(filter) {
        if (!menuContainer) return;

        // Clear existing using animation
        menuContainer.style.opacity = '0';

        setTimeout(() => {
            menuContainer.innerHTML = '';

            const filtered = filter === 'all'
                ? menuData
                : menuData.filter(item => item.intensity === filter);

            filtered.forEach((item, index) => {
                const delayClass = `delay-${index % 3}`; // staggered animation
                const card = document.createElement('div');
                card.className = `menu-item glass-card fade-up visible ${delayClass}`;

                const badgeColor = item.intensity === 'heavy' ? 'var(--accent-molten)' : (item.intensity === 'medium' ? 'var(--accent-champagne)' : 'var(--text-primary)');

                card.innerHTML = `
                    <div class="menu-item-header">
                        <h3 class="menu-item-title">${item.name}</h3>
                        <span class="menu-item-price">₹${item.price}</span>
                    </div>
                    <p class="menu-item-desc">${item.category}</p>
                    <div style="margin-top: 15px;">
                        <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1.5px; color: ${badgeColor}; border: 1px solid currentColor; padding: 4px 10px; border-radius: 20px;">
                            ${item.intensity} smoke
                        </span>
                    </div>
                `;
                menuContainer.appendChild(card);
            });
            menuContainer.style.opacity = '1';
        }, 300);
    }

    // Initial render
    if (menuContainer) {
        menuContainer.style.transition = 'opacity 0.3s ease';
        renderMenu('all');
    }

    // Tab clicks
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Update active state
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const filter = tab.getAttribute('data-intensity');
            renderMenu(filter);
        });
    });

});

