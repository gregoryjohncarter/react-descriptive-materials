import './App.css';
import M from 'materialize-css';
import { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Skills from './components/Skills';

function App() {
  const [showAbout, setShowAbout] = useState(true);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showSkills, setShowSkills] = useState(false);

  const [categories] = useState([
    {
      section: 'About Me',
      description: 'Full Stack Web Developer with well-rounded technical skills and teamwork experience. Completed a boot camp program from UConn in web development as well as additional self-guided learning and projects. Work experience includes employment as a stagehand and audio tech in NYC and currently in Atlantic City, NJ.',
      icon: 'account_circle' 
    },
    { 
      section: 'Portfolio', 
      description: 'Here are links to completed projects of mine hosted on Heroku, with additional GitHub repository links.', 
      icon:'dashboard' 
    },
    { 
      section: 'Skills', 
      description: 'These are some of my technical skills ', 
      icon:'note' 
    },
    { 
      section: 'Contact', 
      description: 'Here is my contact information with LinkedIn and GitHub profile links.', 
      icon:'message' 
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const about = (showAbout && <About currentCategory={currentCategory}></About>);
  const portfolio = (showPortfolio && <Portfolio currentCategory={currentCategory}></Portfolio>);
  const contact = (showContact && <ContactForm currentCategory={currentCategory}></ContactForm>);
  const skills = (showSkills && <Skills currentCategory={currentCategory}></Skills>);

  return (
    <div>
      <div className='row'>
        <div className='col s12'>
          <Header
            categories={categories}
            setCurrentCategory={setCurrentCategory}
            currentCategory={currentCategory}
            setShowAbout={setShowAbout}
            showAbout={showAbout}
            setShowPortfolio={setShowPortfolio}
            showPortfolio={showPortfolio}
            setShowContact={setShowContact}
            showContact={showContact}
            setShowSkills={setShowSkills}
            showSkills={showSkills}
          ></Header>
        </div>
      </div>
      <div className='row'>
        <div className='col s12 m10'>
          <main>
            <div>
              {about}
              {portfolio}
              {contact}
              {skills}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
