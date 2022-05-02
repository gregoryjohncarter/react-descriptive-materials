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
      description: 'During the UConn web development boot camp 2021-2022, I have built a collection of applications which categorize as JavaScript, HTML5, CSS3, Node.js, Express.js, MySQL, Sequelize (ORM), and MongoDB. I\'ve gained proficiency in using technologies such as CSS frameworks (Materialize, Bootstrap), server-side web APIs, Handlebars templating, React, and the jQuery library.',
      icon: 'account_circle' 
    },
    { section: 'Portfolio', description: 'Please consider examining any number of the following projects, which were sourced from some of the more exemplary coursework of the boot camp.', icon:'dashboard' },
    { section: 'Contact', description: 'Use this form to contact me with any questions or inquiries.', icon:'message' },
    { section: 'Resume', description: 'This resume reflects upon my acquired skills and qualifications regarding web development.', icon:'note' },
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
