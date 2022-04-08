import React from 'react';
// import coverImage from "../../assets/cover/cover-image.jpg";

function About({ currentCategory }) {
  const { section, description, icon } = currentCategory;
  return (
    <div className="mobileAbout">
      <section className="fontOne">
        <h3 id="" className="bodyFontAlt"><i className="small material-icons">{icon}</i>{section}</h3>
        <p className="bodyFont">{description}</p>
      </section>
      <div className="inline">
        <p className="gt">
          &gt;
        </p>
        <img className="imgGreg" src={require("../../assets/images/linkedinselfie.jpg")} alt="greg-pic" height="230px" width="230px"/>
      </div>
    </div>
  );
}

export default About;