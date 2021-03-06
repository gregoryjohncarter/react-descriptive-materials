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
    showResume,
    setShowAbout,
    setShowPortfolio,
    setShowContact,
    setShowResume,
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
        setShowResume={setShowResume}
        showResume={showResume}
      ></Nav>
    </div>
  );
}

export default Header;

