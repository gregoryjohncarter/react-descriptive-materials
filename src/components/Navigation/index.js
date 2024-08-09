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
    showSkills,
    setShowAbout,
    setShowPortfolio,
    setShowContact,
    setShowSkills
  } = props;

  useEffect(() => {
    document.title = currentCategory.section;
  }, [currentCategory]);

  return (
    <header className='z-index-top'>
      <h2 className="bg fontTwo">
        <a data-testid="link" href="." className='pointer palatino'>
          Gregory Carter
        </a>
      </h2>
      <nav className="nav-color">
        <div className="nav-wrapper">
          <ul data-testid="nav-mobile" className="left">
            {categories.map((category) => (
              <li
                className={`${
                  currentCategory.section === category.section && `navActive`
                  }`}
                key={category.section}
              >
                <span className={currentCategory.section === category.section ? 'navStyle fontOne navGlow' : 'navStyle fontOne'} onClick={() => { 
                    return (setCurrentCategory(category),
                    category.section === 'About Me' && (setShowPortfolio(false), setShowContact(false), setShowSkills(false), setShowAbout(true)),
                    category.section === 'Skills' && (setShowAbout(false), setShowPortfolio(false), setShowContact(false), setShowSkills(true)),
                    category.section === 'Portfolio' && (setShowAbout(false), setShowContact(false), setShowSkills(false), setShowPortfolio(true)),
                    category.section === 'Contact' && (setShowPortfolio(false), setShowAbout(false), setShowSkills(false), setShowContact(true))
                    )
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