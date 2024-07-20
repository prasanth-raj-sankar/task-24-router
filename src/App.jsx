import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ParentRoute from "./ParentRoute";
import Home from "./Page/Home";
import Fullstack from "./Page/Fullstack";
import Datascience from "./Page/Datascience";
import Cybersecurity from "./Page/Cybersecurity";
import Career from "./Page/Career";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ParentRoute />}>
          <Route path="/" element={<Home />} />
          <Route path='/full-stack-development' element={<Fullstack />} />
          <Route path='/data-science' element={<Datascience />} />
          <Route path='/cyber-security' element={<Cybersecurity />} />
          <Route path='/career' element={<Career />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
