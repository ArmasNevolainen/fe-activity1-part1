import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

export default function Button({ children }) {
  const { theme, toggleTheme } = useContext(ThemeContext); // Access theme and toggle function
  const className = "button-" + theme; // Dynamic class based on theme

  return (
    <button className={className} onClick={toggleTheme}>
      {children}
    </button>
  );
}
