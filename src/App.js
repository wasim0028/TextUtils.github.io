import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import About from './components/About'
import { BrowserRouter, Routes, Route, } from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light')// wheather dark mode is enabled or not 
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <BrowserRouter>
      <Navbar aboutTextutis="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} mode={mode} />
      <div className="container my-3">
        <Routes>
          <Route path='/' element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
          <Route path='/about' element={<About mode = {mode} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
