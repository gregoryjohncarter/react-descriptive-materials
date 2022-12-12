import React from 'react';
import M from 'materialize-css';

function ContactForm({ currentCategory }) {
  const { section, description, icon } = currentCategory;
  
  return (
    <div className="marginBot mobileContact">
      <section className="fontOne">
        <h3 data-testid="h3tag" className="bodyFontAlt"><i className="small material-icons">{icon}</i>{section}</h3>
        {/* <p className = "bodyFont">{description}</p> */}
      </section>
      <form id="contact-form">
        <div className="width">
          <label htmlFor="name" className="contact">Mobile phone:</label>
          <p className="input-field gray">(203) 841 7713</p>
        </div>
        <div className="width">
          <label htmlFor="email" className="contact">Email address:</label>
          <p className="input-field gray">gregoryjohncarter@gmail.com</p>
        </div>
      </form>
    </div>
  )
}
  
export default ContactForm;