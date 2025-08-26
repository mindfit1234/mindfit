// --- Element Selection ---
// Select all the radio buttons for anxiety
const a1 = document.getElementById("1a");
const a2 = document.getElementById("2a");
const a3 = document.getElementById("3a");
const a4 = document.getElementById("4a");
const a5 = document.getElementById("5a");

// Select all the radio buttons for energy
const b1 = document.getElementById("1b");
const b2 = document.getElementById("2b");
const b3 = document.getElementById("3b");
const b4 = document.getElementById("4b");
const b5 = document.getElementById("5b");

// Select all the radio buttons for focus
const c1 = document.getElementById("1c");
const c2 = document.getElementById("2c");
const c3 = document.getElementById("3c");
const c4 = document.getElementById("4c");
const c5 = document.getElementById("5c");

// Select all the radio buttons for productivity
const d1 = document.getElementById("1d");
const d2 = document.getElementById("2d");
const d3 = document.getElementById("3d");
const d4 = document.getElementById("4d");
const d5 = document.getElementById("5d");

// Select all the radio buttons for work/school
const e1 = document.getElementById("1e");
const e2 = document.getElementById("2e");
const e3 = document.getElementById("3e");
const e4 = document.getElementById("4e");
const e5 = document.getElementById("5e");

// Select the form elements
const forma = document.getElementById("a");
const formb = document.getElementById("b");
const formc = document.getElementById("c");
const formd = document.getElementById("d");
const forme = document.getElementById("e");

const list = document.getElementById("list");

// Initialize mood score and message elements
var mood = 0;
var message = document.getElementById("message");
var tips = document.getElementById("tips");
tips.style.display = "none";

const btn1 = document.getElementById("submit1");

// Initial state for message
message.textContent = "";
message.classList.remove("success", "error");

/**
 * Disables a form and applies a grayed-out style to its elements.
 * @param {HTMLElement} form The form element to disable.
 */
function disableFormAndStyle(form) {
    // Disable all form controls within the form
    Array.from(form.elements).forEach((element) => {
        element.disabled = true;
    });

    // Get the container elements and labels to apply the gray style
    const optionContainers = form.querySelectorAll(
        ".option, .option2, .option3, .option4, .option5",
    );
    const questionHeader = form.querySelector("h3");

    // Apply the new background color, text color, and cursor style to the containers
    optionContainers.forEach((container) => {
        container.style.backgroundColor = "#d3d3d3"; // Light gray background
        container.style.color = "#888"; // Darker gray text
        container.style.cursor = "not-allowed";
        container.style.boxShadow = "1px 1px 1px 1px #888"; // Softer shadow
    });

    // Apply the new color to the question header
    if (questionHeader) {
        questionHeader.style.color = "#888";
    }
}

// --- Event Listeners for Anxiety Form (forma) ---
a1.addEventListener("click", function () {
    mood = mood + 5;
    disableFormAndStyle(forma);
});

a2.addEventListener("click", function () {
    mood = mood + 4;
    disableFormAndStyle(forma);
});

a3.addEventListener("click", function () {
    mood = mood + 3;
    disableFormAndStyle(forma);
});

a4.addEventListener("click", function () {
    mood = mood + 2;
    disableFormAndStyle(forma);
});

a5.addEventListener("click", function () {
    mood = mood + 1;
    disableFormAndStyle(forma);
});

// --- Event Listeners for Energy Form (formb) ---
b1.addEventListener("click", function () {
    mood = mood + 5;
    disableFormAndStyle(formb);
});

b2.addEventListener("click", function () {
    mood = mood + 4;
    disableFormAndStyle(formb);
});

b3.addEventListener("click", function () {
    mood = mood + 3;
    disableFormAndStyle(formb);
});

b4.addEventListener("click", function () {
    mood = mood + 2;
    disableFormAndStyle(formb);
});

b5.addEventListener("click", function () {
    mood = mood + 1;
    disableFormAndStyle(formb);
});

// --- Event Listeners for Focus Form (formc) ---
c1.addEventListener("click", function () {
    mood = mood + 5;
    disableFormAndStyle(formc);
});

c2.addEventListener("click", function () {
    mood = mood + 4;
    disableFormAndStyle(formc);
});

c3.addEventListener("click", function () {
    mood = mood + 3;
    disableFormAndStyle(formc);
});

c4.addEventListener("click", function () {
    mood = mood + 2;
    disableFormAndStyle(formc);
});

c5.addEventListener("click", function () {
    mood = mood + 1;
    disableFormAndStyle(formc);
});

// --- Event Listeners for Productivity Form (formd) ---
d1.addEventListener("click", function () {
    mood = mood + 5;
    disableFormAndStyle(formd);
});

d2.addEventListener("click", function () {
    mood = mood + 4;
    disableFormAndStyle(formd);
});

d3.addEventListener("click", function () {
    mood = mood + 3;
    disableFormAndStyle(formd);
});

d4.addEventListener("click", function () {
    mood = mood + 2;
    disableFormAndStyle(formd);
});

d5.addEventListener("click", function () {
    mood = mood + 1;
    disableFormAndStyle(formd);
});

// --- Event Listeners for Work/School Form (forme) ---
e1.addEventListener("click", function () {
    mood = mood + 5;
    disableFormAndStyle(forme);
});

e2.addEventListener("click", function () {
    mood = mood + 4;
    disableFormAndStyle(forme);
});

e3.addEventListener("click", function () {
    mood = mood + 3;
    disableFormAndStyle(forme);
});

e4.addEventListener("click", function () {
    mood = mood + 2;
    disableFormAndStyle(forme);
});

e5.addEventListener("click", function () {
    mood = mood + 1;
    disableFormAndStyle(forme);
});

// Function to display all saved scores from local storage
function displayScores() {
    // Clear any existing content in the list
    list.innerHTML = "";

    // Retrieve the scores from local storage and parse them
    // Use an empty array as a fallback if no scores are found
    const savedScores = JSON.parse(localStorage.getItem("moodScores")) || [];

    // Loop through each saved score and create a new list item
    savedScores.forEach((scoreData) => {
        const p = document.createElement("p");
        p.textContent = `${scoreData.date} - ${scoreData.score}/25`;
        list.appendChild(p);
    });
}

// Event listener for the submit button
btn1.addEventListener("click", function () {
    // Hide forms and button
    forma.style.display = "none";
    formb.style.display = "none";
    formc.style.display = "none";
    formd.style.display = "none";
    forme.style.display = "none";
    this.style.display = "none";

    // Get the current date in a readable format
    const today = new Date();
    const dateString = `${today.getDate()} ${today.toLocaleString("default", { month: "long" })} ${today.getFullYear()}`;

    // Create a score object with the current mood and date
    const newScore = {
        score: mood,
        date: dateString,
    };

    // Retrieve existing scores from local storage
    const savedScores = JSON.parse(localStorage.getItem("moodScores")) || [];

    // Add the new score to the array
    savedScores.push(newScore);

    // Save the updated array back to local storage
    localStorage.setItem("moodScores", JSON.stringify(savedScores));

    // Display the success message
    message.innerHTML = "Your mood score is " + mood + "/25";
    if (mood <= 12) {
        tips.style.display = "block";
    }

    // Call the function to display the updated list of scores
    displayScores();
});

// Initial display on page load
// Call displayScores() to show any previously saved scores
document.addEventListener("DOMContentLoaded", () => {
    displayScores();
});
