import React, { useState } from "react"
import { BrowserRouter } from "react-router-dom"
import Header from "./components/Header"
import { Router } from "./routes/Router"

const App = () => {
  const token = localStorage.getItem("token")
  const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login")

  return (
    <div>
      <BrowserRouter>
        <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText} />
        <Router setRightButtonText={setRightButtonText} />
      </BrowserRouter>
    </div>
  );
}

export default App;
