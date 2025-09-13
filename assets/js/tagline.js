const taglines = [
    "Now with more blather",
    "Go tell Ea-Nassir",
    "Faux fox pass pas",
    "Needlepeets",
    "Friends don't let friends publish shit",
    "Sharp sighs",
    "Always listening for zebras",
    "Tomorrow, tomorrow, tomorrow",
    "Red Dead Rococco",
    '"But, masters, remember that I am an ass"',
    "What's your convention?",
    "Fighting fires with a squirt gun",
    "No dice",
    "I think of you favorably",
    "Thrive in my absence",
    "doing the rotten work",
    "Mess with the best, die like the rest",
    
];

function displayRandomTagline() {
    const randomIndex = Math.floor(Math.random() * taglines.length);
    const taglineElement = document.getElementById("tagline");
    if (taglineElement) {
        taglineElement.innerText = taglines[randomIndex];
    } else {
        console.error("Element with ID 'tagline' not found.");
    }
}
window.onload = displayRandomTagline;
