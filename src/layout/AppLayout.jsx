import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useTheme } from "../context/ThemeContext";
import "./AppLayout.css";

function AppLayout() {
  const { theme } = useTheme();

  return (
    <div className="container">
      <Header />
      <main className={`main ${theme}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
