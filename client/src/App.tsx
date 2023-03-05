import Navbar from './components/Navbar';
import HomeSection from './sections/Home';
import AboutSection from './sections/About';
import ProjectsSection from './sections/Projects';
import ContactSection from './sections/Contact';
import FooterSection from './components/Footer';
import './App.css';

function App() {

  return (
    <div className="App">
      <Navbar  />      
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection/>
    </div>
  );
}

export default App;

