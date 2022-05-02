import React from 'react';
import Pdf from '../../assets/GJCResumeMay2022.pdf'

function Resume({ currentCategory }) {
  const { section, description, icon } = currentCategory;
  return (
    <div className="mobileResume">
      <section className="fontOne">
        <h3 data-testid="h3tag" className="bodyFontAlt"><i className="small material-icons">{icon}</i>{section}</h3>
        <p className="bodyFont">{description}</p>
      </section>
      <iframe className="pdf marginBot marginLeft" src={`${Pdf}#view=fitH`} title="GregorysResume" height="100%" width="100%"/>
    </div>
  );
}

export default Resume;