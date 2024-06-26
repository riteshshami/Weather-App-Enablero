// Login page rendering on page reloading
document.addEventListener("DOMContentLoaded", function () {
  const main = document.querySelector(".main");

  let isLoggedIn = false;

  // login page html structure
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

    // Selecting element from the dom
    const loginForm = document.getElementById("loginForm");
    const loginMessage = document.getElementById("loginMessage");

    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      // Performing validation
      if (username === "admin" && password === "password") {
        isLoggedIn = true;
        renderLoggedIn(); // Switch to "LoggedIn" state
      } else {
        loginMessage.innerText = "Invalid username or password";
      }
    });
  }
  // Function executing after logging in
  function renderLoggedIn() {
    main.innerHTML = `
    <div id="weather-container">
        <table>
          <tr>
            <th>City</th>
            <th>(°C)</th>
            <th>Description</th>
          </tr>
        </table>
    </div>
    `; // Initialize weather container

    // API Key
    const apiKey = "8d6b39a3d3f4fd90b2e0324e263720d9";
    const cities = [
      { name: "London", lat: 51.5074, lon: -0.1278 },
      { name: "New York", lat: 40.7128, lon: -74.006 },
      { name: "Tokyo", lat: 35.6895, lon: 139.6917 },
      { name: "Delhi", lat: 28.6139, lon: 77.209 },
      { name: "Sydney", lat: -33.8688, lon: 151.2093 },
      { name: "Toronto", lat: 43.65107, lon: -79.347015 },
      { name: "Manhattan", lat: 40.7831, lon: -73.9712 },
      { name: "Rio de Janeiro", lat: -22.9068, lon: -43.1729 },
      { name: "Montevideo", lat: -34.9011, lon: -56.1645 },
      { name: "Paris", lat: 48.8566, lon: 2.3522 },
      { name: "Berlin", lat: 52.52, lon: 13.405 },
      { name: "Rome", lat: 41.9028, lon: 12.4964 },
      { name: "Cairo", lat: 30.0444, lon: 31.2357 },
      { name: "Seoul", lat: 37.5665, lon: 126.978 },
      { name: "Shanghai", lat: 31.2304, lon: 121.4737 },
    ];
    const delay = 10000; // 10 seconds

    // Using ajax for fetching information
    function getWeatherData(city, lat, lon, delay) {
      setTimeout(() => {
        $.ajax({
          url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`,
          method: "GET",
          success: function (data) {
            displayWeatherData(data);
          },
          error: function (error) {
            console.error("Error fetching weather data:", error);
          },
        });
      }, delay);
    }

    // Display data after fetching information
    function displayWeatherData(data) {
      const weatherContainer = $("#weather-container");
      const weatherInfo = `
          <tr>
            <td>${data.name}</td>
            <td>${data.main.temp.toFixed(2)}</td>
            <td>${data.weather[0].description}</td>
          </tr>
      `;
      weatherContainer.append(weatherInfo);
    }

    cities.forEach((city, index) => {
      getWeatherData(city.name, city.lat, city.lon, index * delay);
    });
  }

  // Logic for checking if the user is loggedIn or not
  if (!isLoggedIn) {
    renderLoginForm();
  } else {
    renderLoggedIn();
  }
});
