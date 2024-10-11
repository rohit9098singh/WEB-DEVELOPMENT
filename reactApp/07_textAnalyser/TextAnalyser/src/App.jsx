import { useState } from 'react';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import About from './component/About';
import Alert from './component/alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light");
  const [text, setText] = useState("Enable darkMode");
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
    if (Mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setText("Enable darkMode");
      showAlert("Light mode set successfully", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      setText("Enable LightMode");
      showAlert("Dark mode set successfully", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar title="Textutils" aboutText="About us" mode={Mode} toggleMode={toggleMode} Text={text} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            {/* Define or import these components if not already done */}
            <Route exact path="/About" element={<About/>} />
            <Route exact path="/users" element={<h2>Users Page</h2>} />
            <Route exact path="/" element={<Textform heading="Enter The Text To Analyse" mode={Mode} showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
