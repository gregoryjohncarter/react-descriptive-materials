import React, { useEffect, useState } from 'react';
import M from 'materialize-css';
import { SocialIcon } from 'react-social-icons';

function ContactForm({ currentCategory }) {
  const { section, description, icon } = currentCategory;
  const [displayContact, setDisplayContact] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDisplayContact(true);
    }, 400);
  }, []);
  
  return (
    <>
      {displayContact && <div className="mobileContact wiper-enter box-bottom">
        <section className="fontOne aboutMargin">
          <h3 data-testid="h3tag" className="bodyFontAlt animate__animated animate__fadeIn"><i className="small material-icons">{icon}</i>{section}</h3>
        </section>
        <form id="contact-form">
          <div className="width">
            <label htmlFor="name" className="contact">Phone:</label>
            <p className="input-field gray">(203) 841-7713</p>
          </div>
          <div className="width">
            <label htmlFor="email" className="contact">Email:</label>
            <p className="input-field gray">gregoryjohncarter@gmail.com</p>
          </div>
          <footer className="marginBot">
            <SocialIcon url="https://www.linkedin.com/in/gregoryjohncarter/" className="socialHover" target="_blank"/>
            <SocialIcon url="https://github.com/gregoryjohncarter" className="socialHover" bgColor="#b1da6f" target="_blank"/>
          </footer>
        </form>
      </div>}
   </>
  )
}
  
export default ContactForm;