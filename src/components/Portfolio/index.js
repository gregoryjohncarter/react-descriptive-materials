import React from 'react';
import Project from '../Project';

function Portfolio({ currentCategory }) {
  const { section, description, icon } = currentCategory;
  return (
    <div className="container">
      <section className="fontOne">
        <h3 data-testid="h3tag" className="bodyFontAlt"><i className="small material-icons">{icon}</i>{section}</h3>
        <p className="bodyFont">{description}</p>
        <h2 style={{fontFamily: 'Trebuchet MS', fontSize: '20px', color: 'whitesmoke', overflow: 'hidden'}}><span style={{fontWeight: 'bold', color: 'red'}}>NOTE:</span> Some of these projects are not deployed. Sorry for the inconvenience. Stay tuned for migration to a paid Heroku plan soon.</h2>
      </section>
      <div className="box">
        <Project></Project>
      </div>
    </div>
  );
}

export default Portfolio;