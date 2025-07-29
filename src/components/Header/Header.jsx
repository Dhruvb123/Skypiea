import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/Skypiea.png";

import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

import "./Header.css";
import toast from "react-hot-toast";

function Header() {
  const { theme, toggleTheme } = useTheme();
  const { isLoggedIn, login, logout } = useAuth();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleAuthClick = () => {
    // if (isLoggedIn) {
    //   logout();
    // } else {
    //   login({ name: "John Doe", email: "john@example.com" });
    // }
    toast.error("Not Implemented Yet");
    setMenuOpen(false);
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  //  console.log(theme);
  return (
    <>
      <header className="header-container">
        <div className="container-left">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Logo" className="logo-img" />
            </Link>
          </div>
          <nav className="nav-links">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/mycities"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Saved
            </NavLink>
          </nav>
        </div>

        <div className="container-right">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle light/dark mode"
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? (
              <LightModeRoundedIcon style={{ color: "white" }} />
            ) : (
              <DarkModeRoundedIcon style={{ color: "white" }} />
            )}
          </button>

          <button
            className="auth-button desktop-only"
            onClick={handleAuthClick}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>

          <button
            className="menu-icon mobile-only"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <MenuRoundedIcon style={{ color: "white", fontSize: "2rem" }} />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="overlay" onClick={closeMenu}>
          <div className="menu-panel" onClick={(e) => e.stopPropagation()}>
            <button
              className="auth-button menu-auth-button"
              onClick={handleAuthClick}
            >
              {isLoggedIn ? "Logout" : "Login"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
