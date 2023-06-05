<h1>Rick and Morty Characters</h1>
<p>
    Welcome to the Rick and Morty Character Viewer, a React application that allows you to browse and search through over 800 characters from the popular TV show "Rick and Morty." Powered by the Rick and Morty API, this application provides detailed information about each character, including their image, character number, name, status (alive, dead, or unknown), species, origin place, last known location, and the number of episodes they appeared in.
</p>
<p>
    Additionally, the application features 126 unique places from the Rick and Morty universe. These places include various dimensions, planets, and other fascinating locations that have been featured in the show. By exploring the origin place and last known location of the characters, you can uncover the vast and diverse world they inhabit.
</p>
<h2>Features</h2>
<ul>
    <li>
        Infinite Scroll: As you scroll through the character list, the application dynamically loads additional characters for a seamless browsing experience. When you reach the 10% mark of the scrollbar, the next 10 characters are loaded, ensuring optimal performance.
    </li>
    <li>
        Search Functionality: Use the search bar at the top of the page to find characters by their names. The search feature makes it easy to locate specific characters without scrolling through the entire list.
    </li>
    <li>
        Responsive Design: The application is designed to provide an optimal viewing experience across various devices. It adapts its layout and user interface to smaller screens using media queries, ensuring usability on mobile devices.
    </li>
    <li>
        Favorite Characters: Each character card features a star icon that allows you to mark characters as favorites. The selected characters are saved in the browser's local storage, enabling you to revisit them later conveniently.
    </li>
    <li>
        Explore Locations: Clicking on the origin place or last known location of a character opens a page with detailed information about that location. This includes information such as the type and dimension of the location, along with a list of residents. Clicking on a resident's name or photo provides full information about that resident.
    </li>
    <li>
        React Router Integration: The application utilizes react-router-dom for seamless navigation and includes a fully functional 404 page to handle any invalid routes.
    </li>
</ul>
<h2>Getting Started</h2>
<p>
    To run the Rick and Morty Character Viewer locally, follow these steps:
</p>
<ol>
    <li>Clone the repository.</li>
    <li>Navigate to the project directory: <code>cd rick-and-morty-characters</code>.</li>
    <li>Install the dependencies: <code>npm install</code>.</li>
    <li>Start the development server: <code>npm start</code>.</li>
    <li>Open your web browser and visit <code>http://localhost:3000</code> to access the application.</li>
</ol>
<h2>Acknowledgements</h2>
<p>
    The Rick and Morty Character Viewer was developed as a personal project and served as a challenge for me. I would like to express my gratitude to the creators of the Rick and Morty API for providing the character and location data used in this application. Their API made it possible to create a comprehensive character browsing experience and explore the vast and fascinating world of Rick and Morty.
</p>