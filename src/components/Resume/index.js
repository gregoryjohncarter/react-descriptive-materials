import React from 'react';

function Resume({ currentCategory }) {
  const { section, description } = currentCategory;
  return (
    <section>
      <h1 data-testid="h1tag">{section}</h1>
      <p>{description}</p>
    </section>
  );
}

export default Resume;