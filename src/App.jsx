import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";

import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <ThemeProvider>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="about/" element={<About />} />
              <Route path="contact/" element={<Contact />}></Route>
            </Route>
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
