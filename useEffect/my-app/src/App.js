import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from "react"
function App() {

  const [resourceType,setResourceType]=useState('posts')
  const [items,setItems]=useState([])

  useEffect(()=>{
   fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
     .then((response) => response.json())
     .then((json) => setItems(json));
  },[resourceType])

  return (
    <div className="App">
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map(item=>{
        return <pre>{JSON.stringify(item)}</pre>
      })}
    </div>
  );
}

export default App;
