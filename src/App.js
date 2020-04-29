import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Wrapper>
        <Navbar />
          <Switch>
            <Route exact path="/">
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
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;

