import './App.css';
import Profile from './Components/Profile';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Internship from './Components/Internship';
import Projects from './Components/Project'
import Contact from './Components/Contact';
import { NavBar } from './Components/Navbar_comp';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <>
    <HashRouter>
    <NavBar/>
    <section id="profile">
        <Profile />
      </section>
      <section id="edu">
        <Education />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="intern">
        <Internship />
      </section>
      <section id="project">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </HashRouter>
    </>
  );
}

export default App;