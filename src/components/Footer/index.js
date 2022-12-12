import React from 'react';
import { SocialIcon } from 'react-social-icons';

function Footer() {
  return (
    <>
      <footer className="marginBot">
        <SocialIcon url="https://www.linkedin.com/in/gregoryjohncarter/" className="socialHover" target="_blank"/>
        <SocialIcon url="https://github.com/gregoryjohncarter" className="socialHover" bgColor="#b1da6f" target="_blank"/>
        <SocialIcon url="https://stackoverflow.com/users/18726394/kurama52" className="socialHover" target="_blank"/>
      </footer>
      <div className="marginTop">

      </div>
    </>
  );
}

export default Footer;
