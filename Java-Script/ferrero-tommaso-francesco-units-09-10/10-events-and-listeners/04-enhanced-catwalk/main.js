const cat = document.getElementById('cat');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const fasterBtn = document.getElementById('fasterBtn');
const slowerBtn = document.getElementById('slowerBtn');
const speedDisplay = document.getElementById('speedDisplay');

const WINDOW_WIDTH = window.innerWidth - 100;
let currentSpeed = 10;
let walkInterval;
let isMovingRight = true;

function updateSpeedDisplay() {
    speedDisplay.textContent = currentSpeed;
}

function updateButtonStates(isWalking) {
    startBtn.disabled = isWalking;
    stopBtn.disabled = !isWalking;
    fasterBtn.disabled = !isWalking;
    slowerBtn.disabled = !isWalking || currentSpeed <= 5;
}

function catWalk() {
    let currentLeft = parseInt(cat.style.left) || 0;
    
    if (isMovingRight) {
        currentLeft += currentSpeed;
        cat.style.transform = 'scaleX(1)';
    } else {
        currentLeft -= currentSpeed;
        cat.style.transform = 'scaleX(-1)';
    }
    
    if (currentLeft >= WINDOW_WIDTH) {
        isMovingRight = false;
    } else if (currentLeft <= 0) {
        isMovingRight = true;
    }
    
    cat.style.left = currentLeft + 'px';
}

startBtn.addEventListener('click', () => {
    walkInterval = setInterval(catWalk, 50);
    updateButtonStates(true);
});

stopBtn.addEventListener('click', () => {
    clearInterval(walkInterval);
    updateButtonStates(false);
});

fasterBtn.addEventListener('click', () => {
    currentSpeed += 5;
    updateSpeedDisplay();
    slowerBtn.disabled = false;
});

slowerBtn.addEventListener('click', () => {
    if (currentSpeed > 5) {
        currentSpeed -= 5;
        updateSpeedDisplay();
        slowerBtn.disabled = currentSpeed <= 5;
    }
});

// Initialize
updateSpeedDisplay();
updateButtonStates(false);