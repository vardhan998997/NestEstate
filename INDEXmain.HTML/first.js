// Ensure the script runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get references to the select elements and the result display
    const adultsSelect = document.getElementById('adults-select');
    const childrenSelect = document.getElementById('children-select');
    const resultDiv = document.getElementById('result');

    // Function to update the result display based on selections
    function updateResult() {
        const adults = adultsSelect.value;
        const children = childrenSelect.value;

        // Update the result display
        resultDiv.innerHTML = `Selected: ${adults} Adult(s) and ${children} Child(ren)`;
    }

    // Add event listeners to the select elements
    adultsSelect.addEventListener('change', updateResult);
    childrenSelect.addEventListener('change', updateResult);
});


document.querySelectorAll('.gallery-item img').forEach(image => {
    image.addEventListener('click', function (e) {
        createSprinkles(e, this.parentElement);
    });
});

function createSprinkles(event, container) {
    const sprinkleCount = 10; // Number of sprinkles
    const containerRect = container.getBoundingClientRect();
    const x = event.clientX - containerRect.left;
    const y = event.clientY - containerRect.top;

    for (let i = 0; i < sprinkleCount; i++) {
        const sprinkle = document.createElement('div');
        sprinkle.classList.add('sprinkle');

        // Set random direction for each sprinkle
        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * 50 + 20; // Distance sprinkles will move
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;

        // Set custom properties for animation
        sprinkle.style.setProperty('--x', `${dx}px`);
        sprinkle.style.setProperty('--y', `${dy}px`);

        // Set initial position of sprinkle
        sprinkle.style.left = `${x}px`;
        sprinkle.style.top = `${y}px`;

        container.appendChild(sprinkle);

        // Remove the sprinkle after animation ends
        setTimeout(() => {
            sprinkle.remove();
        }, 600); // Match the duration of the animation
    }
}

