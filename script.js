let newX = 0, newY = 0, startX = 0, startY = 0;
let activeCard = null;
let zIndexCounter = 1; // Initialize a global z-index counter

// Select all the cards with a common class, e.g., 'card'
const cards = document.querySelectorAll('.card');

// Loop through each card and add the 'mousedown' event listener
cards.forEach(card => {
    card.addEventListener('mousedown', mouseDown);
});

function mouseDown(e) {
    e.preventDefault(); // Prevent default behavior like text selection

    // Set the active card to the one being dragged
    activeCard = e.target;

    // Set start positions
    startX = e.clientX;
    startY = e.clientY;
  
    // Increment z-index for the active card to ensure it stays on top
    zIndexCounter++;
    activeCard.style.zIndex = zIndexCounter;

    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);
}

function mouseMove(e) {
    if (!activeCard) return;

    // Calculate the distance moved
    newX = startX - e.clientX;
    newY = startY - e.clientY;

    // Update the start positions to the current mouse position
    startX = e.clientX;
    startY = e.clientY;

    // Move the active card
    activeCard.style.top = (activeCard.offsetTop - newY) + 'px';
    activeCard.style.left = (activeCard.offsetLeft - newX) + 'px';
}

function mouseUp(e) {
    // Remove the 'mousemove' listener when the mouse button is released
    document.removeEventListener('mousemove', mouseMove);
    document.removeEventListener('mouseup', mouseUp);

    // Reset the active card to null
    activeCard = null;
}
