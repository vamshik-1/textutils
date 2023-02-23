import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
        setAlert(null);
    }, 3000);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode is activated","success");
      document.title = 'TextUtils - Dark mode';
      setInterval(()=>{
          document.title = 'TextUtils is Amazing mode';
      },2300);
      setInterval(()=>{
          document.title = 'Install TextUtils Now';
      },1900);

    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is activated","success");
      document.title = 'TextUtils - light mode';
    }
  }
  return (
    <>
  
    {/* <Navbar title="TextUtils" abouttext="About textUtils" />  */}
    
  
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    
    <Routes>
        <Route path="/about" element={<About />}>
          
        </Route>
        <Route path="/">
          
        </Route>
        
    </Routes>
    <TextForm heading="Enter the text to analyze below" mode={mode}/>
    </div>
  
    
    </>
  );
}

export default App;
