import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <StrictMode>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
        </Routes>
      </Router>
    </StrictMode>
  );
}

export default App;

