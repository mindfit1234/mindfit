document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('form');
    const usernameInput = document.getElementById('usernameinput');
    const passwordInput = document.getElementById('passwordinput');
    const messageDisplay = document.getElementById('errormsg1');
    const home = document.getElementById('homebtn');
    messageDisplay.style.color = 'red'
    // --- Simulated User Data (DO NOT USE IN PRODUCTION!) ---
    // In a real application, this data would be securely stored and checked on a server.
    const USERS = {
        "mind": "cbl",
        "khushi": "123",
        "guest": "welcome"
    };
    // --------------------------------------------------------

    loginForm.addEventListener('submit', (event) => {
        // Prevent the default form submission behavior (which would reload the page)
        event.preventDefault();

        // Clear previous messages
        messageDisplay.classList.add('hidden');
        messageDisplay.classList.remove('error', 'success');
        messageDisplay.innerText = '';

        const username = usernameInput.value.trim(); // .trim() removes leading/trailing whitespace
        const password = passwordInput.value.trim();

        if (username === '' || password === '') {
            displayMessage('Please enter both username and password.', 'error');
            return; // Stop execution if fields are empty
        }

        // Simulate authentication
        if (USERS.hasOwnProperty(username) && USERS[username] === password) {
            displayMessage(`Login successful! Welcome, ${username}!`, 'success');
            home.style.opacity = 1;


            loginForm.reset(); 
        } else {
            displayMessage('Invalid username or password.', 'error');
        }
    });

    function displayMessage(text, type) {
        messageDisplay.innerText = text;
        messageDisplay.classList.remove('hidden'); // Make the message visible
        messageDisplay.classList.add(type); // Add the appropriate class for styling
    }
});