document.addEventListener("DOMContentLoaded", function () {
    const main = document.querySelector(".main");
  
    let isLoggedIn = false;
  
    function renderLoginForm() {
      main.innerHTML = `
        <section>
          <div class="login-container">
            <h2>Login</h2>
            <form id="loginForm">
              <div class="input-group">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required>
              </div>
              <div class="input-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required>
              </div>
              <button type="submit">Login</button>
            </form>
            <div id="loginMessage"></div>
          </div>
        </section>`;
      
      const loginForm = document.getElementById("loginForm");
      const loginMessage = document.getElementById("loginMessage");
  
      loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
  
        // Here you can perform validation or send the data to a server for authentication
        if (username === "admin" && password === "password") {
          isLoggedIn = true;
          renderLoggedIn(); // Switch to "LoggedIn" state
        } else {
          loginMessage.innerText = "Invalid username or password";
        }
      });
    }
  
    function renderLoggedIn() {
      main.innerHTML = ``;
    }
  
    if (isLoggedIn === false) {
      renderLoginForm();
    }
  });
  