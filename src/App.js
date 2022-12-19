import logo from './logo.svg';
import './App.css';
import M from 'materialize-css';
import { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [showAbout, setShowAbout] = useState(true);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showResume, setShowResume] = useState(false);

  const [categories] = useState([
    {
      section: 'About Me',
      description: 'Web developer with a thoughtful and positive mindset, with foundation in JavaScript, HTML, CSS, React.js, and Node.js. Gained relevant experience across a range of topics during a full stack boot camp Nov. 2021 - May 2022. Other relevant skills include Bootstrap, Redux, Handlebars templating, RESTful API, GraphQL, and the jQuery library.',
      icon: 'account_circle' 
    },
    { section: 'Portfolio', description: 'Please consider browsing through some of my projects. Also see additional info via GitHub links next to the headings. Heroku pages may take a few seconds to load.', icon:'dashboard' },
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
      <div className='row'>
        <div className='col s12'>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default App;
