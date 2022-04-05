import logo from './logo.svg';
import './App.css';
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
      description: 'During the UConn web development boot camp 2021-2022, I have built a collection of applications which categorize as JavaScript, HTML5, CSS3, Node.js, Express.js, MySQL, and NoSQL, among others things. I\'ve gained proficiency in using technologies such as CSS frameworks (Materialize, Bootstrap), server-side web APIs, Handlebars templating, and the jQuery library.'
    },
    { section: 'Portfolio', description: 'Please consider examining any number of the following projects which were sourced from some of the more exemplary coursework of the boot camp.' },
    { section: 'Contact', description: 'Use this form to contact me with any questions or inquiries.' },
    { section: 'Resume', description: 'This resume is a work in progress to designate my skills and qualifications regarding web development.' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const about = (showAbout && <About currentCategory={currentCategory}></About>);
  const portfolio = (showPortfolio && <Portfolio currentCategory={currentCategory}></Portfolio>);
  const contact = (showContact && <ContactForm currentCategory={currentCategory}></ContactForm>);
  const resume = (showResume && <Resume currentCategory={currentCategory}></Resume>);

  return (
    <div>
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
      <main>
        <div>
          {about}
          {portfolio}
          {contact}
          {resume}
        </div>
      </main>
    </div>
  );
}

export default App;
