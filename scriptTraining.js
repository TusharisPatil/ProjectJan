document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
  
    // Temporary credentials
    const validUsername = "acmetusharpatil@gmail.com";
    const validPassword = "Tushar@123";
  
    if (username === validUsername && password === validPassword) {
      message.style.color = "green";
      message.textContent = "Login successful!";
      setTimeout(() => {
        // Redirect to the home page
        window.location.href = "homeTraining.html";
      }, 1000); // Wait for 1 second to show the success message
    } else {
      message.style.color = "red";
      message.textContent = "Invalid credentials. Please try again.";
      document.getElementById('password').value = ''; // Clear password field
    }
  });
  
  // Toggle password visibility
  const togglePassword = document.getElementById('togglePassword');
  const passwordInput = document.getElementById('password');
  
  togglePassword.addEventListener('click', function () {
    const isPassword = passwordInput.getAttribute('type') === 'password';
    passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
  
    // Update the eye icon
    togglePassword.textContent = isPassword ? '🙈' : '👁️';
  });
  