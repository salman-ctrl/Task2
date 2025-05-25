function startClock() {
    setInterval(() => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        document.getElementById("clock").value = `${hours}:${minutes}:${seconds}`;
    }, 1000);
}

// Calculator function
function hitung(operator) {
    let bil1 = parseFloat(document.getElementById("bil1").value);
    let bil2 = parseFloat(document.getElementById("bil2").value);
    let hasil = 0;

    if (isNaN(bil1) || isNaN(bil2)) {
        document.getElementById("hasil").value = "Masukkan angka yang valid!";
        return;
    }

    switch (operator) {
        case "+": hasil = bil1 + bil2; break;
        case "-": hasil = bil1 - bil2; break;
        case "*": hasil = bil1 * bil2; break;
        case "/":
            if (bil2 === 0) {
                document.getElementById("hasil").value = "Tidak bisa dibagi nol!";
                return;
            }
            hasil = bil1 / bil2;
            break;
    }

    document.getElementById("hasil").value = hasil;
}

// Show box function with animation
function showBox(boxId, buttonElement) {
    // Hide all boxes
    const boxes = document.getElementsByClassName('box');
    for (let box of boxes) {
        box.classList.remove('active');
    }

    // Remove active class from all buttons
    const buttons = document.getElementsByClassName('nav-button');
    for (let btn of buttons) {
        btn.classList.remove('active');
    }

    // Show selected box and mark button as active
    document.getElementById(boxId).classList.add('active');
    if (buttonElement) {
        buttonElement.classList.add('active');
    }
}

// Hide all boxes
function hideAllBoxes() {
    const boxes = document.getElementsByClassName('box');
    for (let box of boxes) {
        box.classList.remove('active');
    }

    const buttons = document.getElementsByClassName('nav-button');
    for (let btn of buttons) {
        btn.classList.remove('active');
    }
}

// Create background animation particles
function createParticles() {
    const bgAnimation = document.getElementById('bgAnimation');

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.width = Math.random() * 10 + 5 + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
        bgAnimation.appendChild(particle);
    }
}

// Initialize when page loads
window.onload = function () {
    startClock();
    createParticles();
};