import React from 'react';

function Resume({ currentCategory }) {
  const { section, description, icon } = currentCategory;
  return (
    <section className="fontOne">
      <h3 data-testid="h3tag" className="bodyFontAlt"><i className="small material-icons">{icon}</i>{section}</h3>
      <p className="bodyFont">{description}</p>
    </section>
  );
}

export default Resume;