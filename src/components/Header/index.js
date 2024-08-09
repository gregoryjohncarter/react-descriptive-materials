import React from 'react';
import Nav from '../Navigation';

function Header(props) {
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
    setShowSkills,
  } = props;
  
  return (
    <div className="">
      <Nav
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
      ></Nav>
    </div>
  );
}

export default Header;

