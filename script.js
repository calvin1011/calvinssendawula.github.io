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

        let typingSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && letterIndex === currentWord.length) {
            typingSpeed = 1000; // Pause before deleting
            isDeleting = true;
        } else if (isDeleting && letterIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typingSpeed = 500; // Pause before typing the next word
        }

        setTimeout(typeEffect, typingSpeed);
    }

    typeEffect();
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

if (menu && menuToggle) {  // Prevents errors if elements are missing
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
