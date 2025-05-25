/**
 * @fileoverview Cat Walk Animation - Simple implementation with 3 variants
 */

// Global variables
const cat = document.getElementById('cat');
let intervalId = null;
let catPosition = 0;
let direction = 1; // 1 = right, -1 = left
let isInMiddle = false;

/**
 * Base cat walk function - moves cat 10 pixels to the right
 */
function catWalk() {
    catPosition += 10;
    cat.style.left = catPosition + 'px';
}

/**
 * Resets cat to starting position and clears animations
 */
function resetCat() {
    if (intervalId) clearInterval(intervalId);
    catPosition = 0;
    direction = 1;
    isInMiddle = false;
    cat.style.left = '0px';
    cat.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
    cat.style.transform = 'scaleX(1)';
}

/**
 * Gets screen width minus cat width
 * @returns {number} Available screen width for cat movement
 */
function getScreenWidth() {
    return window.innerWidth - cat.offsetWidth;
}

/**
 * Variant 1: Cat restarts from left when reaching right side
 */
function catWalkVariant1() {
    catWalk();
    if (catPosition >= getScreenWidth()) {
        catPosition = 0;
    }
}

/**
 * Variant 2: Cat bounces between left and right sides
 */
function catWalkVariant2() {
    catPosition += 10 * direction;
    
    if (catPosition >= getScreenWidth()) {
        direction = -1;
        cat.style.transform = 'scaleX(-1)';
    } else if (catPosition <= 0) {
        direction = 1;
        cat.style.transform = 'scaleX(1)';
    }
    
    cat.style.left = catPosition + 'px';
}

/**
 * Variant 3: Cat stops in middle for 10 seconds with different image
 */
function catWalkVariant3() {
    if (isInMiddle) return;
    
    const middlePos = (window.innerWidth - cat.offsetWidth) / 2;
    
    // Check if reached middle
    if (direction === 1 && catPosition >= middlePos && catPosition < middlePos + 20) {
        catPosition = middlePos;
        cat.style.left = catPosition + 'px';
        cat.src = "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif";
        isInMiddle = true;
        
        setTimeout(() => {
            cat.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
            isInMiddle = false;
        }, 10000);
        return;
    }
    
    // Move like variant 2
    catPosition += 10 * direction;
    
    if (catPosition >= getScreenWidth()) {
        direction = -1;
        cat.style.transform = 'scaleX(-1)';
    } else if (catPosition <= 0) {
        direction = 1;
        cat.style.transform = 'scaleX(1)';
    }
    
    cat.style.left = catPosition + 'px';
}

/**
 * Starts variant 1 animation
 */
function startVariant1() {
    resetCat();
    intervalId = setInterval(catWalkVariant1, 50);
}

/**
 * Starts variant 2 animation
 */
function startVariant2() {
    resetCat();
    intervalId = setInterval(catWalkVariant2, 50);
}

/**
 * Starts variant 3 animation
 */
function startVariant3() {
    resetCat();
    intervalId = setInterval(catWalkVariant3, 50);
}