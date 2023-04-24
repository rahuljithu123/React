import logo from './logo.svg';
import './App.css';
import React from "react"
import FunctionContextComponent from './FunctionContextComponent';
import ClassContextComponent from './ClassContextComponent';
import {ThemeProvider} from "./ThemeProvider"

// export const ThemeContext=React.createContext()

function App() {
  // const [darkTheme,setDarkTheme]=useState(true)

  // function toggleTheme(){
  //   setDarkTheme(prevDarkTheme=>!prevDarkTheme)
  // }

  return (
    <>
      {/* <ThemeContext.Provider value={darkTheme}> */}
      <ThemeProvider>
        {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
        <FunctionContextComponent />
        {/* <ClassContextComponent /> */}
      </ThemeProvider>

      {/* </ThemeContext.Provider> */}
    </>
  );
}

export default App;
