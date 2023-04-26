import logo from './logo.svg';
import './App.css';
import Garage from './Garage';

function App() {
  const cars=['Ford','BMW','Audi','Ferrari','Volkswagen','Porsche']
  return (
    <div className="App">

      <Garage cars={cars}/>
    </div>
  );
}

export default App;
