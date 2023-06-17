import { useState } from 'react';
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleDarkMode = () => {
    if (mode !== 'dark') {
      setMode('dark');
      document.body.style.backgroundColor = "#000000e6";
      showAlert("Dark mode has been enabled", "success");
      unToggleSwitches('darkModeSwitch');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white"
      showAlert("Default mode has been enabled", "success");
    }
  }

  const toggleLightDarkMode = () => {
    if (mode !== 'lightDark') {
      setMode('lightDark');
      document.body.style.backgroundColor = "gray";
      showAlert("Light dark mode has been enabled", "success");
      unToggleSwitches('lightDarkModeSwitch');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white"
      showAlert("Default mode has been enabled", "success");
    }
  }

  const toggleBlueDarkMode = () => {
    if (mode !== 'blueDark') {
      setMode('blueDark');
      document.body.style.backgroundColor = "#0A2647";
      showAlert("Blue dark mode has been enabled", "success");
      unToggleSwitches('blueDarkModeSwitch');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white"
      showAlert("Default mode has been enabled", "success");
    }
  }

  const toggleGreenDarkMode = () => {
    if (mode !== 'greenDark') {
      setMode('greenDark');
      document.body.style.backgroundColor = "#004953";
      showAlert("Blue dark mode has been enabled", "success");
      unToggleSwitches('greenDarkModeSwitch');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white"
      showAlert("Default mode has been enabled", "success");
    }
  }

  const unToggleSwitches = (s) => {
    let switches = document.querySelectorAll(".modeSwitch");

    switches.forEach(element => {
      if (element.getAttribute("id") !== s) {
        element.checked = false;
      }
    });

  }

  return (
    <>
      <Router>
        <Navbar title="Text Utilities" aboutUs="About" mode={mode} toggleDarkMode={toggleDarkMode} toggleLightDarkMode={toggleLightDarkMode} toggleBlueDarkMode={toggleBlueDarkMode} toggleGreenDarkMode={toggleGreenDarkMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/" element={<TextForm heading="Enter your text below" mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
        </div>
      </Router >

    </>
  );
}

export default App;
