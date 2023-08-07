import React from "react";
import Navbar from "./Components/Navbar";
import MiniDrawer from "./Components/Navbar";
import Test from "./Components/Test";
import { Container } from "@mui/material";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Container>
        <MiniDrawer />
      </Container>

      {/* <Test /> */}
    </div>
  );
}

export default App;
