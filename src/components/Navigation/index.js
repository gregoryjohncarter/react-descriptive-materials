import React, { useEffect } from 'react';
import M from 'materialize-css';

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    showAbout,
    showPortfolio,
    showContact,
    showResume,
    setShowAbout,
    setShowPortfolio,
    setShowContact,
    setShowResume
  } = props;

  useEffect(() => {
    document.title = currentCategory.section;
  }, [currentCategory]);

  return (
    <header>
      <h2 className="bg fontTwo">
        <a data-testid="link" href="/">
          Gregory Carter
        </a>
      </h2>
      <nav className="blue darken-4">
        <div className="nav-wrapper">
          <ul data-testid="nav-mobile" className="left">
            {categories.map((category) => (
              <li
                className={`${
                  currentCategory.section === category.section && `navActive`
                  }`}
                key={category.section}
              >
                <span className='iconHover fontOne' onClick={() => { 
                    setCurrentCategory(category);
                    category.section === 'About Me' && (setShowPortfolio(false), setShowContact(false), setShowResume(false), setShowAbout(true));
                    category.section === 'Portfolio' && (setShowAbout(false), setShowContact(false), setShowResume(false), setShowPortfolio(true));
                    category.section === 'Contact' && (setShowPortfolio(false), setShowAbout(false), setShowResume(false), setShowContact(true));
                    category.section === 'Resume' && (setShowAbout(false), setShowPortfolio(false), setShowContact(false), setShowResume(true));
                  }
                }
                >
                  {category.section}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Nav;