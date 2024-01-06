import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  cart: false,
  chat: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);
  const [isVisible, setVisible] = useState(true);

  const setMode = (event) => {
    setCurrentMode(event.target.value);
    localStorage.setItem("themeMode", event.target.value);

    setThemeSettings(false);
  };
  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);

    setThemeSettings(false);
  };
  const handleClick = (item) => {
    setIsClicked((prevIsClicked) => {
      // Close all other components
      let newState = Object.keys(prevIsClicked).reduce((values, current) => {
        values[current] = current === item ? !prevIsClicked[current] : false;
        return values;
      }, {});
      return newState;
    });
    // Set a separate state for visibility
    setVisible(true);
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        currentMode,
        setCurrentColor,
        setCurrentMode,
        themeSettings,
        setThemeSettings,
        setMode,
        setColor,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
