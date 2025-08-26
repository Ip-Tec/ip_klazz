### **Chapter 8: Day 8**
**Objectives:** Get introduced to HTML5 Web APIs, learn to use the Geolocation API to get the user's location, and understand how to use the Web Storage API for client-side data persistence.

---

### **Lesson: HTML5 APIs Overview**
**Explanation:**
HTML5 introduced a rich set of JavaScript APIs that allow web applications to interact with the browser and device hardware, enabling features that were previously only possible with native applications. These APIs provide standardized ways to access device capabilities like geolocation, local storage, cameras, and more.

**Key HTML5 APIs:**
- **Geolocation API:** Access the user's geographical location
- **Web Storage API:** Store data locally in the browser (localStorage and sessionStorage)
- **Canvas API:** Draw graphics and animations programmatically
- **Drag and Drop API:** Native drag-and-drop functionality
- **Web Workers:** Run scripts in background threads
- **Web Sockets:** Full-duplex communication channels over a single TCP connection
- **History API:** Manipulate the browser session history
- **File API:** Handle file uploads and manipulate file data

**How They Work:**
Most HTML5 APIs are accessed through JavaScript and follow a similar pattern:
1. Check if the API is supported by the browser
2. Request permission from the user (for sensitive APIs like geolocation)
3. Use the API methods and handle responses or errors

**Code Example:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>HTML5 APIs Overview</title>
</head>
<body>
    <h1>HTML5 APIs Demo</h1>
    
    <div id="support-check">
        <p>Checking browser support for HTML5 APIs...</p>
    </div>

    <script>
        // Check for API support
        const supportCheck = document.getElementById('support-check');
        const apisToCheck = [
            'geolocation', 'localStorage', 'sessionStorage', 
            'Worker', 'history', 'File', 'DragEvent'
        ];

        let supportHtml = '<h2>Browser Support</h2><ul>';
        
        apisToCheck.forEach(api => {
            const isSupported = api in navigator || api in window;
            supportHtml += `<li>${api}: ${isSupported ? '✅' : '❌'}</li>`;
        });
        
        supportHtml += '</ul>';
        supportCheck.innerHTML = supportHtml;
    </script>
</body>
</html>
```

**Practice Task:**
Create a browser support checker that tests for various HTML5 APIs:
1. Create a page that checks support for at least 5 different HTML5 APIs
2. Display the results in a clear, visually appealing way
3. For unsupported APIs, provide a fallback message or alternative approach
4. Use semantic HTML to structure your page

---

### **Lesson: Geolocation API**
**Explanation:**
The Geolocation API allows web applications to access the user's geographical location, with their permission. This enables location-aware web applications like mapping services, local business finders, and weather apps.

**Key Concepts:**
- **Privacy:** Browsers will always ask for user permission before sharing location data
- **Accuracy:** Location can be determined via GPS, WiFi, IP address, or cellular networks
- **Methods:**
  - `navigator.geolocation.getCurrentPosition()`: Gets the current position once
  - `navigator.geolocation.watchPosition()`: Continuously monitors position
  - `navigator.geolocation.clearWatch()`: Stops monitoring position

**Position Data Includes:**
- Latitude and longitude coordinates
- Accuracy of the position measurement
- Altitude (if available)
- Speed and heading (if available)
- Timestamp

**Code Example:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Geolocation API Demo</title>
    <style>
        #map {
            height: 300px;
            width: 100%;
            background-color: #f0f0f0;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    </style>
</head>
<body>
    <h1>Geolocation API Demo</h1>
    
    <button id="get-location">Get My Location</button>
    
    <div id="location-data" style="margin: 20px 0;">
        <p>Your location will appear here</p>
    </div>
    
    <div id="map">
        <p>Map will appear here</p>
    </div>

    <script>
        document.getElementById('get-location').addEventListener('click', () => {
            if (!navigator.geolocation) {
                alert('Geolocation is not supported by your browser');
                return;
            }
            
            // Request location with high accuracy
            const options = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            };
            
            navigator.geolocation.getCurrentPosition(
                // Success callback
                (position) => {
                    const { latitude, longitude, accuracy } = position.coords;
                    
                    // Display location data
                    document.getElementById('location-data').innerHTML = `
                        <h2>Your Location</h2>
                        <p>Latitude: ${latitude.toFixed(6)}</p>
                        <p>Longitude: ${longitude.toFixed(6)}</p>
                        <p>Accuracy: ${accuracy} meters</p>
                        <p>Timestamp: ${new Date(position.timestamp).toLocaleString()}</p>
                    `;
                    
                    // Show a static map (using Google Maps Static API as an example)
                    const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=15&size=600x300&markers=color:red%7C${latitude},${longitude}&key=YOUR_API_KEY`;
                    document.getElementById('map').innerHTML = `<img src="${mapUrl}" alt="Map of your location">`;
                },
                // Error callback
                (error) => {
                    let errorMessage;
                    switch(error.code) {
                        case error.PERMISSION_DENIED:
                            errorMessage = "User denied the request for Geolocation.";
                            break;
                        case error.POSITION_UNAVAILABLE:
                            errorMessage = "Location information is unavailable.";
                            break;
                        case error.TIMEOUT:
                            errorMessage = "The request to get user location timed out.";
                            break;
                        case error.UNKNOWN_ERROR:
                            errorMessage = "An unknown error occurred.";
                            break;
                    }
                    document.getElementById('location-data').innerHTML = `<p>Error: ${errorMessage}</p>`;
                },
                options
            );
        });
    </script>
</body>
</html>
```

**Practice Task:**
Create a location-based application that:
1. Requests the user's location with their permission
2. Displays the latitude, longitude, and accuracy of the location
3. Shows a static map of the location (you can use Google Maps Static API or similar)
4. Handles errors gracefully with appropriate messages
5. Includes a button to refresh the location

---

### **Lesson: Web Storage API**
**Explanation:**
The Web Storage API provides mechanisms for browsers to store key-value pairs locally in a user's browser. It offers two main storage mechanisms that are more intuitive and capable than cookies:

1. **localStorage:** Stores data with no expiration date
2. **sessionStorage:** Stores data for one session (data is lost when the browser tab is closed)

**Key Features:**
- Storage limit is much larger than cookies (typically 5-10MB)
- Data is not sent to the server with every HTTP request
- Simple API with straightforward methods:
  - `setItem(key, value)`: Store data
  - `getItem(key)`: Retrieve data
  - `removeItem(key)`: Remove specific data
  - `clear()`: Remove all stored data
  - `key(index)`: Get the key at a specific index
  - `length`: Get the number of stored items

**Code Example:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Web Storage API Demo</title>
    <style>
        .storage-demo {
            margin: 20px;
            padding: 20px;
            border: 1px solid #ccc;
        }
        .storage-data {
            margin: 10px 0;
            padding: 10px;
            background-color: #f9f9f9;
        }
    </style>
</head>
<body>
    <h1>Web Storage API Demo</h1>
    
    <div class="storage-demo">
        <h2>Local Storage</h2>
        <input type="text" id="localInput" placeholder="Enter data to store locally">
        <button onclick="saveToLocalStorage()">Save to Local Storage</button>
        <button onclick="clearLocalStorage()">Clear Local Storage</button>
        
        <div class="storage-data">
            <h3>Stored Local Data:</h3>
            <div id="localData"></div>
        </div>
    </div>
    
    <div class="storage-demo">
        <h2>Session Storage</h2>
        <input type="text" id="sessionInput" placeholder="Enter data to store in session">
        <button onclick="saveToSessionStorage()">Save to Session Storage</button>
        <button onclick="clearSessionStorage()">Clear Session Storage</button>
        
        <div class="storage-data">
            <h3>Stored Session Data:</h3>
            <div id="sessionData"></div>
        </div>
    </div>

    <script>
        // Display stored data on page load
        document.addEventListener('DOMContentLoaded', () => {
            displayStoredData();
        });
        
        // Local Storage functions
        function saveToLocalStorage() {
            const input = document.getElementById('localInput');
            if (input.value) {
                localStorage.setItem('userData', input.value);
                input.value = '';
                displayStoredData();
            }
        }
        
        function clearLocalStorage() {
            localStorage.clear();
            displayStoredData();
        }
        
        // Session Storage functions
        function saveToSessionStorage() {
            const input = document.getElementById('sessionInput');
            if (input.value) {
                sessionStorage.setItem('sessionData', input.value);
                input.value = '';
                displayStoredData();
            }
        }
        
        function clearSessionStorage() {
            sessionStorage.clear();
            displayStoredData();
        }
        
        // Display all stored data
        function displayStoredData() {
            // Display local storage data
            const localData = localStorage.getItem('userData');
            document.getElementById('localData').textContent = localData || 'No data stored locally';
            
            // Display session storage data
            const sessionData = sessionStorage.getItem('sessionData');
            document.getElementById('sessionData').textContent = sessionData || 'No data stored in session';
        }
    </script>
</body>
</html>
```

**Practice Task:**
Create a simple notes application using the Web Storage API:
1. Create a text area where users can write notes
2. Provide buttons to save the note to localStorage and to clear all notes
3. Automatically load and display saved notes when the page loads
4. Add a feature to save multiple notes with unique identifiers
5. Add the ability to delete individual notes
6. Use sessionStorage to remember the current note being edited during the session

---

### **Homework:**
Create a "Weather Dashboard" application that combines both the Geolocation API and Web Storage API:

1. Use the Geolocation API to get the user's current location
2. Use a weather API (like OpenWeatherMap) to fetch weather data for that location
3. Display the current weather conditions, temperature, and forecast
4. Use localStorage to remember:
   - The user's preferred location (if they want to save it)
   - Temperature unit preference (Celsius/Fahrenheit)
   - Recent weather searches
5. Create an intuitive interface that allows users to:
   - Refresh the weather data
   - Switch between Celsius and Fahrenheit
   - Save locations to their favorites
   - View their search history
6. Handle errors gracefully (e.g., if geolocation is denied or weather API fails)
7. Make sure your application is responsive and works on different screen sizes

Save this as `weather-dashboard.html` and ensure all functionality works correctly.