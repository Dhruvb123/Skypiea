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
import { FavoritesProvider } from "./context/FavouritesContext";
import MyCities from "./components/MyCities/MyCities";

function App() {
  return (
    <>
      <Toaster />
      <ThemeProvider>
        <AuthProvider>
          <FavoritesProvider>
            <Routes>
              <Route path="/" element={<AppLayout />}>
                <Route index element={<Home />} />
                <Route path="about/" element={<About />} />
                <Route path="contact/" element={<MyCities />}></Route>
                <Route path="mycities/" element={<MyCities />}></Route>
                <Route path="*" element={<>Not Found</>}></Route>
              </Route>
            </Routes>
          </FavoritesProvider>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
