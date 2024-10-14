import './App.css';
import BodyMain from './components/LandingPage/mainbody';
import NavBar from './components/Commons/navbar';
import Contact from './components/Modules/Contact Us/contact';
import SideLogo from './components/Commons/sideLogo';
import Footer from './components/Commons/Footer';
import Error from './components/Commons/404Error';
import Journey from './components/Modules/MyJourney/journey';
import Skills from './components/Modules/Skills/skills';
import GetLatestRepos from './components/Modules/Projects/getlatestrepo';
import {
  Routes,
  Route,
} from "react-router-dom";
import React from 'react';

function App() {
 
  return (
    <div>
    <NavBar />
    <Routes>
    <Route path="/Portfolio" element={<BodyMain />} />
    <Route path="/Portfolio/contact" element={<Contact />} />
    <Route path="/Portfolio/journey" element={<Journey />} />
    <Route path="/Portfolio/skills" element={<Skills />} />
    <Route path="/Portfolio/projects" element={<GetLatestRepos />} />
    <Route
      path="*"
      element={
        <Error />
      }
    />
    </Routes>
    <SideLogo />
    <Footer />
    </div>
  );
}

export default App;
