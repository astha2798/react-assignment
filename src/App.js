import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

// import Navbar from "./components/navbar.component"
// import EditExercise from "./components/edit-exercise.component";
import Home from "./components/home";
function App() {
  return (
      <div className="container">
      <Home/>      
      </div>
  );
}

export default App;
