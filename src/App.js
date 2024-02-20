
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";

import About from "./Components/About";

import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const [mode, setMode] =useState(`light`);
  const toggleMode=()=>{
    if(mode ===`light`){
      setMode(`dark`)
      document.body.style.backgroundColor="black"
    }
   
    else{
      setMode(`light`)
      document.body.style.backgroundColor="white"
      
      
    }
    
  }
 
  return (
    <>
    <Router>
      <Navbar title="TextsUtils" mode={mode} toggleMode={toggleMode} />
        <div className="container">
        
               <Routes>
                 <Route path='/a' element={<About/>} />
              
                <Route path='/b' element={<TextForm heading="Enter the text to analyse" mode={mode} />} />
                </Routes>
        </div>
        </Router>
    
      
    </>
  );
}
export default App;
