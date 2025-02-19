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
function openmenu() {
    document.getElementById("sidemenu").style.right = "0";
}

function closemenu() {
    document.getElementById("sidemenu").style.right = "-200px";
}
