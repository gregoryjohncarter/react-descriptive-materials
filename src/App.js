import './App.css';
import M from 'materialize-css';
import { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [showAbout, setShowAbout] = useState(true);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showResume, setShowResume] = useState(false);

  const [categories] = useState([
    {
      section: 'About Me',
      description: 'Web developer with a thoughtful and positive perspective. Possesses a strong foundation in JavaScript and React. Gained experience during completion of a full stack boot camp. Proficiencies include HTML5, CSS3, Node.js, Bootstrap, Redux, Python, Java, RESTful API, and jQuery.',
      icon: 'account_circle' 
    },
    { section: 'Portfolio', description: 'Please consider browsing through some of my projects. Also see additional GitHub links for more info.', icon:'dashboard' },
    { section: 'Contact', description: 'Use this form to contact me with any questions or inquiries.', icon:'message' },
    { section: 'Resume', description: 'This resume reflects upon my acquired skills and qualifications.', icon:'note' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const about = (showAbout && <About currentCategory={currentCategory}></About>);
  const portfolio = (showPortfolio && <Portfolio currentCategory={currentCategory}></Portfolio>);
  const contact = (showContact && <ContactForm currentCategory={currentCategory}></ContactForm>);
  const resume = (showResume && <Resume currentCategory={currentCategory}></Resume>);

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
            setShowResume={setShowResume}
            showResume={showResume}
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
              {resume}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
