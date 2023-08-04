

import Alert from './Alert';
import './App.css';
import Navbar from './Navbar';
// import About from './About';
import TextForm from './TextForm';
import React, { useState } from 'react'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import TextFormatter from './TextFormatter';



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)
  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#2a2869'
      showAlert('success', 'Dark mode has been enabled')
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('success', 'Light mode has been enabled')
    }

  }
  const toggleBlue = () => {
    if (mode === 'light') {
      setMode('blue')
      document.body.style.backgroundColor = '#328787'
      showAlert('success', 'Light to Blue')
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('success', 'Blue to Light')

    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title='TextUtils' text='Text Formatter' mode={mode} toggleMode={toggleMode} toggleBlue={toggleBlue} showAlert={showAlert} />
        <Alert alert={alert} />

        <div className="container" >
          {/* <Routes> */}
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/" element={<TextForm mode={mode} showAlert={showAlert} heading='Enter text to Analyze' />} /> */}
            {/* <Route path='/textFormatter' element={<TextFormatter/>}/> */}

          {/* </Routes> */}

          <TextForm mode={mode} showAlert={showAlert} heading='Enter text to Analyze' />
        </div>
      {/* // </Router> */}
    </>
  );
}

export default App;
