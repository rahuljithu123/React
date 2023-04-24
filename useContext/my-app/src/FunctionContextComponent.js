import React from 'react'
// import { ThemeContext } from './App'

import { useTheme,useThemeUpdate } from './ThemeProvider'

const FunctionContextComponent = () => {
    // const darkTheme=useContext(ThemeContext)
    const darkTheme = useTheme();
    const toggleTheme=useThemeUpdate();
    const themeStyles={
        backgroundColor:darkTheme ? '#333' :'#CCC',
        color:darkTheme?'#CCC':'#333',
        padding:'2rem',
        margin:'2rem'
    }
  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyles}>FunctionContextComponent</div>
    </>
  );
}

export default FunctionContextComponent