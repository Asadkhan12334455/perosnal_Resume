// Function to toggle the visibility of the Skills section
function toggleSkills() {
    // Get the skills list element by its ID
    const skillsList = document.getElementById("skills");

    // Check if the skills list element exists, and toggle display style
    if (skillsList) {
        skillsList.style.display = skillsList.style.display === "none" ? "block" : "none";
    }
}

// Check if the button exists before adding the event listener
const toggleButton = document.getElementById("toggle-skills");
if (toggleButton) {
    toggleButton.addEventListener("click", toggleSkills);
}
