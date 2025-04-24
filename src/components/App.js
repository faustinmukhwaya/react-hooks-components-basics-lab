
// App.js
import React from 'react';

// Home component (already defined)
function Home() {
  return (
    <div id="home">
      <h1>Welcome to my portfolio!</h1>
    </div>
  );
}

// Navbar component (already defined)
function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  );
}

// New About component
function About() {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  );
}

// App component
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
