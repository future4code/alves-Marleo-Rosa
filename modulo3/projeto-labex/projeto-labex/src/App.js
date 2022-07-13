import React from "react";
// import { Router } from "react-router-dom";
import { Router } from "./routes/Router";
import GlobalStyle from "./assets/globalstyle/GlobalStyle";
// import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Router />
      {/* <Home /> */}
    </div>
  );
}

export default App;