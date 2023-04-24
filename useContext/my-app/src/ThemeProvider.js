import React, { useState, useContext } from "react";
const ThemeContext = React.createContext();
const ThemeUpdateContext=React.createContext()
// import React from "react";

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}


export function ThemeProvider ({ children }) {
  
const [darkTheme, setDarkTheme] = useState(true);

function toggleTheme() {
  setDarkTheme(prevDarkTheme => !prevDarkTheme);
}
return (
  <ThemeContext.Provider value={darkTheme}>
    <ThemeUpdateContext.Provider value={toggleTheme}>
      {children}
      </ThemeUpdateContext.Provider>
  </ThemeContext.Provider>
);
};

// export default ThemeProvider;

// import React,{useState,useContext} from 'react'

// const ThemeContext=React.createContext()
// const ThemeUpdateContext=React.createContext()

// export function useTheme(){
//     return useContext(ThemeContext)
// }

// export function useThemeUpdate() {
//   return useContext(ThemeUpdateContext);
// }

// const ThemeProvider = ({children}) => {

// const [darkTheme, setDarkTheme] = useState(true);

// function toggleTheme() {
//   setDarkTheme((prevDarkTheme) => !prevDarkTheme);
// }
//   return (
//     <ThemeContext.Provider>
//         <ThemeUpdateContext.Provider>
//             {children}
//         </ThemeUpdateContext.Provider>
//     </ThemeContext.Provider>
//   )
// // }

// // export default ThemeProvider
