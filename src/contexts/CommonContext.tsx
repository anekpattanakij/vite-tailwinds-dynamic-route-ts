import React, { useState, createContext } from "react";
import { useStorageState } from "react-storage-hooks";

//Create Store Context
export const ContextRef = React.createRef();

const defaultState = {
  darkmode: {
    darkMode: false,
    setDarkMode: (input: boolean) => {},
  },
};

export const CommonContext = createContext(defaultState);

interface Process {
  browser: boolean;
}
declare var process: Process;

export const CommonContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  let [currentState, setState] = useStorageState(
    localStorage,
    "raritimism-state",
    {
      darkmode: false,
    }
  );
  // define initial state
  let darkModeInitialState = false;
  const safelySetMode = (mode: boolean) => {
    if (!import.meta.env.SSR) {
      if (mode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  };

  if (currentState && currentState.darkmode) {
    darkModeInitialState = currentState.darkmode;
    safelySetMode(currentState.darkmode);
  }
  // set initial State
  const [darkMode, setDarkMode] = useState(darkModeInitialState);

  const setDarkModeWithState = (input: boolean) => {
    setDarkMode(input);
    //safelySetMode(input);
    safelySetMode(input);
    setState({ darkmode: input });
  };

  // set to store for context use
  const store = {
    darkmode: { darkMode, setDarkMode: setDarkModeWithState },
  };
  React.useImperativeHandle(ContextRef, () => store);
  return (
    <CommonContext.Provider value={store}>{children}</CommonContext.Provider>
  );
};
