import React from 'react';
import { SocialIcon } from 'react-social-icons';

function Footer() {
  return (
    <footer className="marginBot">
      <SocialIcon url="https://www.linkedin.com/in/gregoryjohncarter/" className="iconHover"/>
      <SocialIcon url="https://github.com/gregoryjohncarter" className="iconHover" bgColor="#b1da6f"/>
      <SocialIcon url="https://stackoverflow.com/users/18726394/kurama52" className="iconHover"/>
    </footer>
  );
}

export default Footer;
