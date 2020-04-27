import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import  Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </Wrapper>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
