import React from "react";
import {HashRouter as Router, Route, Routes} from "react-router-dom"
import SearchTags from "../features/tags/SearchTags";
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SearchTags/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
