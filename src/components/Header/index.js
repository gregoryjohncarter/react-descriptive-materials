import React from 'react';

function Header(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected
  } = props;
  return (
    <header className="">
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
    </header>
  );
}

export default Header;

