import "./App.scss";
import React, { useState } from "react";
import Navbar from "./components/navbar/navbar";
import Vanue from "./components/vanue/vanue";
import Slider from "./components/slider/slider";
import TopMovie from "./components/topMovie/topMovie";
import Exclusives from "./components/Exclusives/Exclusives";
import Search from "./components/Search/Search";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Vanue />
      <TopMovie />
      {/* <Exclusives /> */}
    </div>
  );
}

export default App;
