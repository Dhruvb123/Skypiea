import React, { useEffect } from "react";
import { useTheme } from "./context/ThemeContext";

function AppWrapper({ children }) {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return <>{children}</>;
}

export default AppWrapper;
