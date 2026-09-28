import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [propertyOpen, setPropertyOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setPropertyOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

  const closeMenus = () => {
    setMenuOpen(false);
    setPropertyOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <a href="#home" className="logo" onClick={closeMenus}>
        ONE
        <span>PROPERTIES</span>
      </a>

      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        <a href="#home" onClick={closeMenus}>
          Home
        </a>

        {/* Properties Dropdown */}
        <div className="nav-dropdown" ref={dropdownRef}
        onMouseEnter={() => setPropertyOpen(true)}
        onMouseLeave={() => setPropertyOpen(false)}
        >
            
        <button
        className="nav-dropdown-button"
        onClick={() => {
            setPropertyOpen((prev) => !prev);
        }}
        >
        PROPERTIES
        <span className="dropdown-arrow">
            {propertyOpen ? "⌃" : "⌄"}
        </span>
        </button>


         <div
        className={`nav-dropdown-menu ${
            propertyOpen ? "dropdown-open" : ""
        }`}
        >
        <button
            onClick={() => {
            navigate("/residences/penthouse");
            closeMenus();
            }}
        >
            The Penthouse
        </button>

        <button
            onClick={() => {
            navigate("/residences/two-bedroom");
            closeMenus();
            }}
        >
            The Two Bedroom
        </button>

        <button
            onClick={() => {
            navigate("/residences/three-bedroom");
            closeMenus();
            }}
        >
            The Three Bedroom
        </button>

        <button
            onClick={() => {
            navigate("/residences/bungalow");
            closeMenus();
            }}
        >
            Bungalow
        </button>

        <button
            onClick={() => {
            navigate("/residences/duplex");
            closeMenus();
            }}
        >
            Duplex
        </button>
        </div>
        </div>

        <a href="#experience" onClick={closeMenus}>
          Experience
        </a>

        <a href="#location" onClick={closeMenus}>
          Location
        </a>

        </nav>

        <a href="/enquire" className="nav-contact">
        Enquire
        </a>

        <button 
        className={`menu-button ${menuOpen ? "menu-open" : ""}`}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
        >
        <span></span>
        <span></span>
        </button>
    </header>
  );
}

export default Navbar;