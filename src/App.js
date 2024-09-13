
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import AboutUs from './components/AboutUs';
import React, { useState } from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light') // dark mode is enable or not
const togglemode = ()=>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#1b1b1b';
    document.title = 'ConvertText - Dark Mode'
    setTimeout(() => {
    document.title = 'ConvertText'
    }, 1000);
    
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    document.title = 'ConvertText - Light Mode'
    setTimeout(() => {
      document.title = 'ConvertText'
      }, 1000);  
  }
}

return (
    <>
<Router>
  <Navbar title="ConvertText" mode={mode} togglemode={togglemode}/>
<div className={`container container-${mode}  bg-${mode}`}>

  <Routes>
    <Route exact path='/about' element={<AboutUs mode={mode}  />} />
    <Route exact path='/' element={ <Textform  mode={mode}  /> } />
    <Route exact path='/home' element={ <Textform  mode={mode}  /> } />
  </Routes>

</div>
</Router>
    </>
  );
}

export default App;
