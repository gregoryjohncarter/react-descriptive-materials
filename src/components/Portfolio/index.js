import React from 'react';
import Project from '../Project';

function Portfolio({ currentCategory }) {
  const { section, description, icon } = currentCategory;
  return (
    <div className="container">
      <section className="fontOne portfolioMargin">
        <h3 data-testid="h3tag" className="bodyFontAlt animate__animated animate__fadeIn"><i className="small material-icons">{icon}</i>{section}</h3>
        <p className="bodyFont animate__animated animate__fadeInDown">{description}</p>
      </section>
      <div className="box">
        <Project></Project>
      </div>
    </div>
  );
}

export default Portfolio;