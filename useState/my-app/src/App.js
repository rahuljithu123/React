import logo from './logo.svg';
import './App.css';
import {useState} from "react"

// function countInitial() {
//   console.log('run function')
//   return 4
// }

function App() {
   const [count,setCount]=useState(4)
   const [theme,setTheme]=useState('blue')
   
  //  const [state, setState] = useState({count:4,theme:'blue'});
  //  const count=state.count//destructuring
  //  const theme=state.theme



  // const [count, setCount] = useState(countInitial())  // run function will run every single time when our component renders

    //  const [count, setCount] = useState(()=>countInitial());  //run function will not run every single time our component renders


  //  const [count, setCount] = useState(()=>{
  //   console.log('run function')
  //   return 4;
  //  }) // this run function runs  only first time renders the component

  function decrementCount(){
   
      setCount((prevCount) => prevCount - 1)

    // setState(prevState=>{
    //   return {...prevState,count:prevState.count-1} //spread out previous state
    // })
  }
  function incrementCount(){
     setCount(prevCount=>prevCount+1)
     setTheme('red')
  }
  return (
    <div className="App">
     <button onClick={decrementCount}>-</button>
     <span>{count}</span>
     <span>{theme}</span>
     <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default App;
