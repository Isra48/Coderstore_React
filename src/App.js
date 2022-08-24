import './index.css';
import Navbar from './Components/NavBar.js';
import List from "./Components/itemListContainer";
import { useState } from "react";



function App() {
  const [message, setMessage] = useState("esta es una prop");
  return (
    <div className="App">
      <Navbar> </Navbar>
      <List message={message} />
        
    
    </div>
  );
}

export default App;
