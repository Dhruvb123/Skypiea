import React, { createContext, useState, useContext } from "react";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]); // array of city names

  const addFavorite = (city) => {
    setFavorites((prev) => {
      if (!prev.includes(city)) {
        return [...prev, city];
      }
      return prev; // no duplicates
    });
  };

  const removeFavorite = (city) => {
    setFavorites((prev) => prev.filter((c) => c !== city));
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
