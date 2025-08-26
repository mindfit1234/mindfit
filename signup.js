document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('form');
  const usernameInput = document.getElementById('usernameinput');
  const emailInput = document.getElementById('emailinput');
  const passwordInput = document.getElementById('passwordinput');
  const confirmPasswordInput = document.getElementById('repeatpasswordinput');
  const messageElement = document.getElementById('errormsg');
  const home = document.getElementById('homebtn');
  messageElement.style.color = 'red'
  signupForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Clear previous messages
    messageElement.textContent = '';
    messageElement.classList.remove('success', 'error');

    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    // Basic validation
    if (username === '' || email === '' || password === '' || confirmPassword === '') {
      displayMessage('All fields are required!', 'error');
      return;
    }

    if (password.length < 6) {
      displayMessage('Password must be at least 6 characters long.', 'error');
      return;
    }

    if (password !== confirmPassword) {
      displayMessage('Passwords do not match!', 'error');
      return;
    }

    // Simulate a successful sign-up (in a real application, you'd send this to a server)
    displayMessage('Sign up successful! Welcome, ' + username + '!', 'success');
    home.style.opacity = 1;

    
  });

  function displayMessage(msg, type) {
    messageElement.textContent = msg;
    messageElement.classList.add(type);
  }
  
});

