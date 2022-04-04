import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [categories] = useState([
    {
      name: 'About Me',
      description: 'During the UConn web development boot camp 2021-2022, I have built a collection of applications which categorize as JavaScript, HTML5, CSS3, Node.js, Express.js, MySQL, and NoSQL, among others things. I\'ve gained proficiency in using technologies such as CSS frameworks (Materialize, Bootstrap), server-side web APIs, Handlebars templating, and the jQuery library.'
    },
    { name: 'Portfolio', description: 'Please consider examining any number of the following projects which were sourced from some of the more exemplary coursework of the boot camp.' },
    { name: 'Contact', description: 'Use this form to contact me with any questions or inquiries.' },
    { name: 'Resume', description: 'This resume is a work in progress to designate my skills and qualifications regarding web development.' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Header>
      <main>
        <div>
          <About></About>
          <Portfolio></Portfolio>
          <ContactForm></ContactForm>
          <Resume></Resume>
        </div>
      </main>
    </div>
  );
}

export default App;
