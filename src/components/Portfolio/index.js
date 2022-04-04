import React from 'react';

function Porfolio({ currentCategory }) {
  const { section, description } = currentCategory;
  return (
    <section>
      <h1 data-testid="h1tag">{section}</h1>
      <p>{description}</p>
    </section>
  );
}

export default Portfolio;