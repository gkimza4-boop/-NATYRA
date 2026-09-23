// ================================
// DARK MODE
// ================================

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        darkModeBtn.textContent = "☀️";
    } else {
        darkModeBtn.textContent = "🌙";
    }

});


// ================================
// MESAZH INTERAKTIV
// ================================

const messageBtn = document.getElementById("messageBtn");
const dynamicMessage = document.getElementById("dynamicMessage");

const messages = [
    "🌱 Çdo pemë që mbjellim është një investim për të ardhmen.",
    "💧 Mos e shpërdoro ujin. Çdo pikë ka rëndësi.",
    "♻️ Riciklimi fillon me një zgjedhje të vogël.",
    "🌍 Ndryshimi fillon nga veprimet tona të përditshme.",
    "🐝 Mbrojtja e natyrës do të thotë mbrojtje e jetës."
];

let messageIndex = 0;

messageBtn.addEventListener("click", function () {

    dynamicMessage.textContent = messages[messageIndex];

    messageIndex++;

    if (messageIndex >= messages.length) {
        messageIndex = 0;
    }

});


// ================================
// FORMULARI
// ================================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    formMessage.textContent =
        `Faleminderit, ${name}! Mesazhi juaj u dërgua me sukses. 🌿`;

    contactForm.reset();

});


// ================================
// ANIMACION KUR SHFAQEN SEKSIONET
// ================================

const elements = document.querySelectorAll(
    ".card, .problem, .solution, .stat"
);

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


elements.forEach(function (element) {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "0.7s ease";

    observer.observe(element);

});