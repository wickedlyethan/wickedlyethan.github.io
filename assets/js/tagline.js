const taglines = [
    "Now with more blather",
    "Go tell Ea-Nassir",
    "Faux fox pass pas",
    "Needlepeets",
    "Sharp sighs",
    "Always listening for zebras",
    "Tomorrow, tomorrow, tomorrow",
    "Red Dead Rococco",
    '"But, masters, remember that I am an ass"',
    "What's your convention?",
    "Fighting fires with a squirt gun",
    "No dice",
    "Thrive in my absence",
    "doing the rotten work",
    "Mess with the best, die like the rest",
    "Through hardships, to the stars!",
    "Misery made manifest",
    "You really need to get that looked at",
    "(thoughtful beeps)",
    "Because I knew you so well",
    "Blood in the gums of a sensitive mouth",
    "We're here because we're because we're here",
    "I've got the yips"
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
