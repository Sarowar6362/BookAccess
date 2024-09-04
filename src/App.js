// src/App.js
import React from "react";
import "./styles/App.css";
import OpenLibrarySearch from "./components/OpenLibrarySearch";

const App = () => {
  return (
    <div className="app">
      <OpenLibrarySearch />
    </div>
  );
};

export default App;
