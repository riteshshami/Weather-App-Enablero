# Weather-App-Enablero

This is a simple weather application built with HTML, CSS, and JavaScript. It fetches weather data from the OpenWeatherMap API and displays it for various cities around the world. The application also includes a login functionality to switch between login and logged-in states.

# Setup Process

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Open the project in your preferred code editor.

# Prerequisites

A web server to run the application locally. You can use any server like Live Server for VS Code.

# Create an OpenWeatherMap Account and Obtain the API Key

1. Go to the OpenWeatherMap website and sign up for a free account.
2. After signing up, log in to your account and navigate to the API keys section.
3. Create a new API key and copy it. You will need this key to fetch weather data from the API.

# Instructions to Run the Application Locally

1. Clone or download the project files to your local machine.
2. Open the project folder in your code editor.
3. Start your web server by right-clicking on index.html and select "Open with Live Server".
4. Open your web browser and go to http://localhost:8000 (or the appropriate port if using a different server).

# Libraries or Frameworks Used

jQuery - Used for making AJAX requests to the OpenWeatherMap API.

# Code Structure

## index.html

The HTML file sets up the structure of the weather app, including the header and main content areas. It includes links to external stylesheets and scripts.

## script.js

The JavaScript file handles the application logic, including user authentication and fetching weather data from the OpenWeatherMap API.

### Event Listener for DOM Content Loaded
When the DOM content is fully loaded, the script initializes the main content area and checks the login state.

### Render Login Form
This function displays the login form. If the correct credentials are entered (admin and password), the user is logged in and the weather data is displayed.

## style.css
The CSS file defines the styles for the application, including the layout, colors, and typography.

