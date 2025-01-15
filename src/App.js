import React from 'react';
import { Navbar } from './components/Navbar';
import {Hero} from './components/HeroSection'
import { Experience } from './components/Exprience';
import { About } from './components/About';
import GitHubSection from './components/GitHubSection';  
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <About/>
      <Experience/>
      <GitHubSection/>
      <Footer />
    </div>
  );
}

export default App;
