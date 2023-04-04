import React from "react";
import Navbar from "./components/Navbar";
import ToDo from "./components/ToDo";


export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <ToDo />



      </div>
    </div>
  );
}


