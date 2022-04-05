import React, { useEffect } from 'react';

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
    <header className="">
      <h2>
        <a data-testid="link" href="/">
          Gregory Carter
        </a>
      </h2>
      <nav>
        <ul className="">
          {categories.map((category) => (
            <li
              className={`${
                currentCategory.section === category.section && `navActive`
                }`}
              key={category.section}
            >
              <span onClick={() => { 
                  setCurrentCategory(category)
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
      </nav>
    </header>
  );
}

export default Nav;