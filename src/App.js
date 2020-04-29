import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
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

