import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";


 function App() {
  const [mode, setMode] = useState('light'); //false tells whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#1b3660';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
      setInterval(() => {
        document.title = 'Textutils is Amazing';
      }, 2000);
      setInterval(() => {
        document.title = 'Install Textutil';
      }, 1500);
    }

    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  };

  return (
    <>
      {/* <Navbar title= 'TextUtils' aboutText="About TextUtils"/> */}


      <BrowserRouter>
        <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">


          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" onShowAlert={showAlert} mode={mode} />} />
            {/* <Route path="/users/*" element={<UserApp />} /> */}
          </Routes>
          {/* <About />
              <TextForm heading="Enter the text to analyze below" onShowAlert={showAlert } mode={mode}/> */}
        </div>
      </BrowserRouter>



    </>

  );
};

export default App;
