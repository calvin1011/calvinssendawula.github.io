document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typing-text");
    const words = [
        "A Full Stack Developer",
        "An AI Enthusiast",
        "An Open-Source Contributor",
        "A Software Engineer",
        "A Car Enthusiast",
        "A Swimmer",
        "A Watch Enthusiast",
        "A Chef"
    ];

    let wordIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        let currentWord = words[wordIndex];

        if (isDeleting) {
            textElement.innerHTML = currentWord.substring(0, letterIndex - 1);
            letterIndex--;
        } else {
            textElement.innerHTML = currentWord.substring(0, letterIndex + 1);
            letterIndex++;
        }

        let typingSpeed = isDeleting ? 25 : 50;

        if (!isDeleting && letterIndex === currentWord.length) {
            isDeleting = true;
        } else if (isDeleting && letterIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

        setTimeout(typeEffect, typingSpeed);
    }

    typeEffect();

    // Project carousel functionality
    initProjectCarousel();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: "smooth"
            });
        }
    });
});

// Project filter functionality (uncommented and updated)
function initProjectFilters() {
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });

            // Add active class to clicked button
            button.classList.add('active');

            const skill = button.getAttribute('data-skill');
            const cards = document.querySelectorAll('.project-card');

            cards.forEach(card => {
                const tags = card.getAttribute('data-tags') || '';
                if (skill === "all" || tags.includes(skill)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });

            // Reset carousel position
            const projectsContainer = document.querySelector('.projects-container');
            if (projectsContainer) {
                projectsContainer.style.transform = 'translateX(0)';
                currentIndex = 0;
            }
        });
    });
}

//Academic section
function showTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    // Remove active class from all buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Show selected tab content
    document.getElementById(tabName).classList.add('active');

    // Add active class to clicked button
    event.target.classList.add('active');
}

// Project carousel functionality
let currentIndex = 0;
const itemsPerView = window.innerWidth < 768 ? 1 : 3;

function initProjectCarousel() {
    const projectsContainer = document.querySelector('.projects-container');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');

    if (!projectsContainer || !prevBtn || !nextBtn) return;

    const projectCards = document.querySelectorAll('.project-card');
    const maxIndex = Math.max(0, projectCards.length - itemsPerView);

    function updateCarousel() {
        const cardWidth = projectCards[0].offsetWidth;
        const gap = 20; // gap between cards
        const offset = -(currentIndex * (cardWidth + gap));
        projectsContainer.style.transform = `translateX(${offset}px)`;

        // Update button states
        prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
        nextBtn.style.opacity = currentIndex >= maxIndex ? '0.5' : '1';
    }

    // Previous button click
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    // Next button click
    nextBtn.addEventListener('click', () => {
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateCarousel();
        }
    });

    // Initialize button states
    updateCarousel();

    // Handle window resize
    window.addEventListener('resize', () => {
        // Recalculate items per view based on screen width
        const newItemsPerView = window.innerWidth < 768 ? 1 : 3;

        if (newItemsPerView !== itemsPerView) {
            // Reset current index if needed
            currentIndex = 0;
            updateCarousel();
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const bubbleContainer = document.createElement("div");
    bubbleContainer.setAttribute("id", "bubble-container");
    document.body.appendChild(bubbleContainer);

    function createBubble() {
        if (!bubbleContainer) return;

        const bubble = document.createElement("div");
        bubble.classList.add("bubble");

        // Randomize size, position, and animation
        const size = Math.random() * 30 + 10 + "px";
        bubble.style.width = size;
        bubble.style.height = size;
        bubble.style.left = Math.random() * window.innerWidth + "px";
        bubble.style.animationDuration = Math.random() * 5 + 3 + "s";

        bubbleContainer.appendChild(bubble);

        // Remove bubble after animation
        setTimeout(() => {
            bubble.remove();
        }, 8000);
    }

    // Generate bubbles every 600ms
    setInterval(createBubble, 600);
});

// Experience popup functionality
function openExperience(id) {
    document.getElementById(id).classList.add("active");
    document.getElementById("overlay").classList.add("active");
}

function closeExperience(id) {
    document.getElementById(id).classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
}

function closeAllExperience() {
    document.querySelectorAll(".experience-popup").forEach(popup => {
        popup.classList.remove("active");
    });
    document.getElementById("overlay").classList.remove("active");
}

// ========== MENU FUNCTIONALITY ==========
const menu = document.getElementById("sidemenu");
const menuToggle = document.querySelector(".menu-toggle");
const closeButton = document.querySelector("#sidemenu .fa-times");

function openmenu() {
    menu.classList.add("active");
}

function closemenu() {
    menu.classList.remove("active");
}

if (closeButton) {
    closeButton.addEventListener("click", closemenu);
}

if (menu && menuToggle) {
    menuToggle.addEventListener("click", openmenu);

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
            closemenu();
        }
    });

    // Close menu when clicking a link
    document.querySelectorAll("#sidemenu a").forEach(link => {
        link.addEventListener("click", closemenu);
    });
}

// ====== Hero Section Dots ======
document.addEventListener("DOMContentLoaded", function () {
    const heroBackground = document.getElementById("hero-background");

    function createDot() {
        const dot = document.createElement("div");
        dot.classList.add("dot");

        // Random starting position
        dot.style.left = Math.random() * window.innerWidth + "px";
        dot.style.top = Math.random() * window.innerHeight + "px";

        // Random animation duration
        dot.style.animationDuration = Math.random() * 5 + 10 + "s";

        heroBackground.appendChild(dot);

        // Remove dot after animation
        setTimeout(() => {
            dot.remove();
        }, 20000);
    }

    // Create dots every 500ms
    setInterval(createDot, 500);
});

/* skill filtering*/
document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    let activeFilters = new Set();

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            const skill = this.getAttribute("data-skill");

            if (skill === "all") {
                activeFilters.clear();
                filterButtons.forEach(btn => btn.classList.remove("active"));
                this.classList.add("active");
            } else {
                // Toggle the skill selection
                if (activeFilters.has(skill)) {
                    activeFilters.delete(skill);
                    this.classList.remove("active");
                } else {
                    activeFilters.add(skill);
                    this.classList.add("active");
                    document.querySelector(".filter-btn[data-skill='all']").classList.remove("active");
                }
            }

            filterProjects();
        });
    });

    function filterProjects() {
        projectCards.forEach(card => {
            const cardTags = card.getAttribute("data-tags").split(" ");

            if (activeFilters.size === 0) {
                card.style.display = "block"; // Show all if no filters selected
            } else {
                const matches = Array.from(activeFilters).every(filter => cardTags.includes(filter));
                card.style.display = matches ? "block" : "none";
            }
        });
    }
});

/* Github API calling to update project section synchronously"*/
document.addEventListener("DOMContentLoaded", async function () {
    const username = "calvin1011"; // <-- your GitHub username
    const apiUrl = `https://api.github.com/users/${username}/repos?sort=updated&per_page=1`;

    try {
        const response = await fetch(apiUrl);
        const repos = await response.json();

        if (repos.length > 0) {
            const latestRepo = repos[0];
            const repoName = latestRepo.name;
            const updatedAt = new Date(latestRepo.updated_at);
            const today = new Date();
            const diffTime = today - updatedAt;
            const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

            // Update the elements
            const projectDaysAgoElement = document.getElementById("project-days-ago");
            const projectNameElement = document.getElementById("project-name");

            projectNameElement.textContent = repoName;
            projectDaysAgoElement.innerHTML = `<strong style="color: red;">${diffDays} days ago</strong>`;
        }
    } catch (error) {
        console.error("Error fetching GitHub repos:", error);
    }
});


