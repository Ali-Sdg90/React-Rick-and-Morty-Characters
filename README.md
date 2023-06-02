<h1>Rick and Morty Characters</h1>
<p>
    This is a React application that allows you to browse and search through
    over 800 characters from the popular TV show "Rick and Morty." It retrieves
    character information from the
    <a href="https://rickandmortyapi.com/" target="_new">Rick and Morty API</a>
    and provides details such as images, character number, name, status (alive,
    dead, or unknown), species, origin place, last known location, and the
    number of episodes the character appeared in.
</p>
<h2>Features</h2>
<ul>
    <li>
        Infinite Scroll: The application dynamically loads additional characters
        as you scroll through the list. When you reach the 10% end of the
        scrollbar, the next 10 characters are loaded for better performance and
        smoother user experience.
    </li>
    <li>
        Search Functionality: The application includes a search bar at the top
        of the page, allowing you to search for characters based on their names.
        The search feature provides a convenient way to quickly find specific
        characters.
    </li>
    <li>
        Responsive Design: The application is designed to provide an optimal
        viewing experience across various devices. It utilizes media queries to
        ensure that the layout and user interface adapt to smaller screens,
        enhancing usability on mobile devices.
    </li>
    <li>
        Favorite Characters: Each character card features a star icon, enabling
        you to mark characters as favorites. The selected characters are saved
        in the browser's local storage, allowing you to easily find and revisit
        them later.
    </li>
</ul>
<h2>Getting Started</h2>
<p>To run the Rick and Morty Character Viewer locally, follow these steps:</p>
<ol>
    <li>Clone the repository</li>
    <li>Navigate to the project directory: <code>cd rick-and-morty-characters</code></li>
    <li>Install the dependencies: <code>npm install</code></li>
    <li>Start the development server: <code>npm start</code></li>
    <li>
        Open your web browser and visit
        <code>http://localhost:3000</code> to access the application.
    </li>
</ol>
<h2>Acknowledgements</h2>
<p>
    The Rick and Morty Character Viewer was developed as a personal project and
    served as a challenge for me. It took approximately 10 hours to complete. I
    would like to thank the creators of the Rick and Morty API for providing the
    character data used in this application.
</p>
