import { useState } from "react";
import { Link } from "react-router-dom";
// import "./navbar.css";

function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMode() {
    setDarkMode(!darkMode);

    if (darkMode) {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  }

  return (
    <nav className="navbar">
      <h2>Dashboard</h2>

      <ul className={menuOpen ? "active" : ""}>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/todo">Todo</Link></li>
        <li><Link to="/timer">Timer</Link></li>
        <li><Link to="/notes">Notes</Link></li>
        <li><Link to="/weather">Weather</Link></li>
      </ul>

      <div className="nav-buttons">
        <button onClick={toggleMode}>
          {darkMode ? "☀️" : "🌙"}
        </button>

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>
    </nav>
  );
}

export default Navbar;