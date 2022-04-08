import React from 'react';
import Project from '../Project';

function Portfolio({ currentCategory }) {
  const { section, description, icon } = currentCategory;
  return (
    <div className="container">
      <section className="fontOne">
        <h3 data-testid="h3tag" className="bodyFontAlt"><i className="small material-icons">{icon}</i>{section}</h3>
        <p className="bodyFont">{description}</p>
        
      </section>
      <div className="box">
        <Project></Project>
      </div>
    </div>
  );
}

export default Portfolio;