document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('form');
  const loginusername = document.getElementById('usernameinput');
  const loginpassword = document.getElementById('passwordinput');
  const messageDisplay = document.getElementById('errormsg1');
  const home = document.getElementById('homebtn');
  messageDisplay.style.color = 'red'
  const signupForm = document.getElementById('form1');
  const usernameInput = document.getElementById('usernameinput1');
  const emailInput = document.getElementById('emailinput1');
  const passwordInput = document.getElementById('passwordinput1');
  const confirmPasswordInput = document.getElementById('repeatpasswordinput1');
  const messageElement = document.getElementById('errormsg');
  messageElement.style.color = 'red'
  let USERS = JSON.parse(localStorage.getItem('users')) || [ ];
   signupForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent the default form submission

      // Clear previous messages
      messageElement.textContent = '';
      messageElement.classList.remove('success', 'error');

      const username1 = usernameInput.value.trim();
      const email1 = emailInput.value.trim();
      const password1 = passwordInput.value.trim();
      const confirmPassword1 = confirmPasswordInput.value.trim();

      // Basic validation
      if (username1 === '' || email1 === '' || password1 === '' || confirmPassword1 === '') {
        displayMessage('All fields are required!', 'error');
        return;
      }

      if (password1.length < 6) {
        displayMessage('Password must be at least 6 characters long.', 'error');
        return;
      }

      if (password1 !== confirmPassword1) {
        displayMessage('Passwords do not match!', 'error');
        return;
      }

      // Simulate a successful sign-up (in a real application, you'd send this to a server)
      displayMessage('Sign up successful! Welcome, ' + username1 + '!', 'success');
     const newUser = {
       username: username1,
       password: password1,
     };
     USERS.push(newUser);
     localStorage.setItem('users', JSON.stringify(USERS));
      home.style.opacity = 1;


    });

    function displayMessage(msg, type) {
      messageElement.textContent = msg;
      messageElement.classList.add(type);
    }
  // --------------------------------------------------------

  loginForm.addEventListener('submit', (event) => {
    // Prevent the default form submission behavior (which would reload the page)
    event.preventDefault();

    // Clear previous messages
    messageDisplay.classList.add('hidden');
    messageDisplay.classList.remove('error', 'success');
    messageDisplay.innerText = '';

    const username = loginusername.value.trim(); // .trim() removes leading/trailing whitespace
    const password = loginpassword.value.trim();

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
