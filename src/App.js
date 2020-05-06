import React, {  useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Navbar from "./components/Navbar";


function App() {
const [currentPage, setCurrentPage] = useState("home")

function setPage(page) {
  setCurrentPage(page);
  console.log(page, currentPage)
};
  return (
    <Router>
      <div className='main'>
          <Navbar setPage={setPage} />
          <Switch>
            <Route exact path="/" >
              <Home />
            </Route>
            <Route exact path="/about">
            <About />
          </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;

// 
// 
