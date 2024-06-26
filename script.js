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
    main.innerHTML = `<div id="weather-container"></div>`; // Initialize weather container

    const apiKey = "8d6b39a3d3f4fd90b2e0324e263720d9";
    const cities = [
      { name: "London", lat: 51.5074, lon: -0.1278 },
      { name: "New York", lat: 40.7128, lon: -74.006 },
      { name: "Tokyo", lat: 35.6895, lon: 139.6917 },
      { name: "Delhi", lat: 28.6139, lon: 77.209 },
      { name: "Sydney", lat: -33.8688, lon: 151.2093 },
    ];
    const delay = 10000; // 10 seconds

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

    function displayWeatherData(data) {
      const weatherContainer = $("#weather-container");
      const weatherInfo = `
        <div>
          <h3>${data.name}</h3>
          <p>Temperature: ${data.main.temp.toFixed(2)}°C</p>
          <p>Weather: ${data.weather[0].description}</p>
        </div>
      `;
      weatherContainer.append(weatherInfo);
    }

    cities.forEach((city, index) => {
      getWeatherData(city.name, city.lat, city.lon, index * delay);
    });
  }

  if (!isLoggedIn) {
    renderLoginForm();
  } else {
    renderLoggedIn();
  }
});
