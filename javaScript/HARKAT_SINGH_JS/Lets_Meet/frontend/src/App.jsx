import { Route, Routes } from "react-router-dom";
import Main from "./pages/mainPart/Main";
import Login from "./pages/auth/LogIn";
import Signup from "./pages/auth/Signup";
import EmailVerification from "./pages/auth/EmailVerification";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const colorMode = JSON.parse(window.localStorage.getItem("color-theme"));

    const className = "dark";

    const bodyClass = window.document.body.classList;

    colorMode === "dark"
      ? bodyClass.add(className)
      : bodyClass.remove(className);
  }, []);
  return (
    <>
      <Routes>
        <Route index={true} element={<Main />} />
        <Route path="auth/login" element={<Login />} />
        <Route path="auth/signup" element={<Signup />} />
        <Route path="auth/verify" element={<EmailVerification length={4} />} />
      </Routes>
    </>
  );
}
export default App;
