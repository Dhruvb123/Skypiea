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
import AppWrapper from "./AppWrapper";

function App() {
  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            maxWidth: "400px",
            whiteSpace: "normal",
            wordBreak: "break-word",
          },
        }}
      />
      <ThemeProvider>
        <AuthProvider>
          <FavoritesProvider>
            <AppWrapper>
              <Routes>
                <Route path="/" element={<AppLayout />}>
                  <Route index element={<Home />} />
                  <Route path="about/" element={<About />} />
                  <Route path="contact/" element={<Contact />}></Route>
                  <Route path="mycities/" element={<MyCities />}></Route>
                  <Route path="*" element={<>Not Found</>}></Route>
                </Route>
              </Routes>
            </AppWrapper>
          </FavoritesProvider>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
