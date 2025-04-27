document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typing-text");
    const words = [
        "Full Stack Developer",
        "AI Enthusiast",
        "Open-Source Contributor",
        "Software Engineer",
        "Car Enthusiast",
        "I love swimming",
        "Watch Enthusiast"
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
});

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

// // ========== PROJECT FILTER FUNCTIONALITY ==========
// document.querySelectorAll('.filter-btn').forEach(button => {
//     button.addEventListener('click', () => {
//         const skill = button.getAttribute('data-skill');
//         const cards = document.querySelectorAll('.project-card');
//
//         cards.forEach(card => {
//             const tags = card.getAttribute('data-tags') || '';
//             if (skill === "all" || tags.includes(skill)) {
//                 card.style.display = "block";
//             } else {
//                 card.style.display = "none";
//             }
//         });
//     });
// });

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

// ========== EXPERIENCE POPUP FUNCTIONALITY ==========
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

if (closeButton) {  // Check if the close button exists before adding the event
    closeButton.addEventListener("click", closemenu);
}

if (menu && menuToggle) {
    function openmenu() {
        menu.style.display = "block";
    }

    function closemenu() {
        menu.style.display = "none";
    }

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
