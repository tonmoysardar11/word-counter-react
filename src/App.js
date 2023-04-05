
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import React, { useState } from 'react';
import About from './Components/About';
import Alert from './Components/Alert';
import {
  // BrowserRouter,
  HashRouter,
  Routes,
  Route,
  // Link,
  // Outlet
} from "react-router-dom";





function App() {

  // toogle function for dark mode button of navbar
  const toggle = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black';
      showAlert('success', 'Dark Mode Enabled!!!');
      setBtnText('Enable Light Mode')
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert('success', 'Light Mode Enabled!!!');
      setBtnText('Enable Dark Mode')

    }
  }
  // toogle function for blue mode button of navbar
  const toggleBlue = () => {
    if (mode2 === null) {
      setMode2('blue')
      toggle();
      document.body.style.backgroundColor = '#081932';
      showAlert('success', 'Blue Mode Enabled!!!');
      setBtnText2('Enable Light Mode')
    }
    else {
      setMode2(null)
      toggle();
      document.body.style.backgroundColor = 'white';
      showAlert('success', 'Default Mode Enabled!!!');
      setBtnText2('Enable Blue Mode')
    }
  }

  // usestate for dark mode
  const [mode, setMode] = useState('light');
  // usestate for blue mode
  const [mode2, setMode2] = useState(null);
  // usestate for alerts
  const [alert, setAlert] = useState(null);


  // alert function
  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  //usestate dark mode button
  const [btnText, setBtnText] = useState('Enable Dark Mode')
  //usestate blue mode button
  const [btnText2, setBtnText2] = useState('Enable Blue Mode')







  // main display
  return (
    <>
    
    <HashRouter>
    <Navbar title='Word Counter' about='About App' mode={mode2} btnText={btnText} btnText2={btnText2} toggle={toggle} toggleBlue={toggleBlue} />
    <Alert alert={alert}/>
    <Routes>
      <Route exact path="/" element={
      <Home cardTitle='Try Word Counter, Character Counter, To Lowercase, To Uppercase' showAlert={showAlert} mode={mode} />
       } />
      <Route exact path="about" element={<About mode={mode} />} />
   </Routes>
  </HashRouter>
  </>
   

  );
}

export default App;
