import React from "react";
import {HashRouter as Router, Route, Routes} from "react-router-dom"
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<b>Hi!</b>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
