const taglines = [
    "Innovating for a brighter future.",
    "Where ideas take flight.",
    "Crafting excellence, every day.",
    "Your vision, our mission.",
    "Connecting possibilities.",
    "Simplicity meets sophistication.",
    "Empowering your journey.",
    "Building dreams, together.",
    "The art of problem-solving.",
    "Experience the difference.",
];

function displayRandomTagline() {
    // Get a random index based on the length of the taglines array
    const randomIndex = Math.floor(Math.random() * taglines.length);

    // Get the tagline element by its ID
    const taglineElement = document.getElementById("tagline");

    // Check if the tagline element exists to prevent errors
    if (taglineElement) {
        // Set the innerText of the tagline element to the randomly selected tagline
        taglineElement.innerText = taglines[randomIndex];
    } else {
        // Log an error if the element is not found
        console.error("Element with ID 'tagline' not found.");
    }
}

// Call the function once when the page loads to display an initial tagline
window.onload = displayRandomTagline;
