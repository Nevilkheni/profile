import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../style/themeSwitcher.css";

const ThemeSwitcher = () => {
  const { changeTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  return (
    <div className="theme-switcher-container">
      <button className="toggle-button" onClick={() => setOpen(!open)}>🎨</button>

      {open && (
        <div className="theme-buttons">
          <button className="theme-button dark" onClick={() => changeTheme("dark")} />
          <button className="theme-button ocean" onClick={() => changeTheme("ocean")} />
          <button className="theme-button teal" onClick={() => changeTheme("teal")} />
          <button className="theme-button navy" onClick={() => changeTheme("navy")} />
          <button className="theme-button lightblue" onClick={() => changeTheme("lightblue")} />
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
