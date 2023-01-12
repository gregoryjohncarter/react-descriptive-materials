import React from 'react';
import Pdf from '../../assets/GJCResumeJan23.pdf'

function Resume({ currentCategory }) {
  const { section, description, icon } = currentCategory;
  return (
    <div className="mobileResume">
      <section className="fontOne">
        <h3 data-testid="h3tag" className="bodyFontAlt animate__animated animate__fadeIn resume"><i className="small material-icons">{icon}</i>{section}</h3>
      </section>
      <iframe className="pdf marginLeft" src={`${Pdf}#view=fitH`} title="GregorysResume" height="100%" width="100%"/>
    </div>
  );
}

export default Resume;