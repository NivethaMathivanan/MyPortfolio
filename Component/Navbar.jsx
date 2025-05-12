import React, { useEffect, useState } from "react";
import "../Component/Css/Navbar.css";

function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      setScrolled(window.scrollY > 10);
      
      // Active section detection
      const sections = ["hero", "blog", "about", "Skills", "portfolio", "contact"];
      for (let sec of sections) {
        const section = document.getElementById(sec);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`hamburger-line ${menuOpen ? "open" : ""}`}></div>
        <div className={`hamburger-line ${menuOpen ? "open" : ""}`}></div>
        <div className={`hamburger-line ${menuOpen ? "open" : ""}`}></div>
      </div>
      
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <a 
            href="#hero" 
            className={activeSection === "hero" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            <span>Home</span>
          </a>
        </li>
        <li>
          <a 
            href="#Skills" 
            className={activeSection === "Skills" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            <span>Skills</span>
          </a>
        </li>
        <li>
          <a 
            href="#portfolio" 
            className={activeSection === "portfolio" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            <span>Project</span>
          </a>
        </li>
        <li>
          <a 
            href="#blog" 
            className={activeSection === "blog" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            <span>Blog</span>
          </a>
        </li>
        <li>
          <a 
            href="#about" 
            className={activeSection === "about" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            <span>About</span>
          </a>
        </li>
        <li>
          <a 
            href="#contact" 
            className={activeSection === "contact" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            <span>Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;