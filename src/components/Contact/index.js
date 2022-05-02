import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import M from 'materialize-css';

function ContactForm({ currentCategory }) {
  const { section, description, icon } = currentCategory;
//   const [formState, setFormState] = useState({ Name: '', Email: '', Message: '' });
//   const { Name, Email, Message } = formState;
//   const [errorMessage, setErrorMessage] = useState('');
  
//   function handleChange(e) {
//     if (e.target.name === 'Email') {
//       const isValid = validateEmail(e.target.value);
//       // console.log(isValid);
//       // isValid conditional statement
//       if (!isValid) {
//         setErrorMessage('Your email is invalid.');
//       } else {
//         setErrorMessage('');
//       }
//     } else {
//       if (!e.target.value.length) {
//         setErrorMessage(`${e.target.name} is required.`);
//       } else {
//         setErrorMessage('');
//       }
//       console.log('errorMessage', errorMessage);
//     }  

//     // if (!errorMessage) {
//       setFormState({ ...formState, [e.target.name]: e.target.value });
//     // }
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log(formState);
//   }
  
  return (
    <div className="marginBot mobileContact">
      <section className="fontOne">
        <h3 data-testid="h3tag" className="bodyFontAlt"><i className="small material-icons">{icon}</i>{section}</h3>
        {/* <p className = "bodyFont">{description}</p> */}
      </section>
        {/* <form id="contact-form" onSubmit={handleSubmit}> */}
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

        {/* text state input form */}
        {/* <form id="contact-form" onSubmit={handleSubmit}>
          <div className="width">
            <label htmlFor="name">Name:</label>
            <input type="text" defaultValue={Name} onBlur={handleChange} name="Name" className="input-field gray" maxLength="50"/>
          </div>
          <div className="width">
            <label htmlFor="email">Email address:</label>
            <input type="email" defaultValue={Email} onBlur={handleChange} name="Email" className="input-field gray" maxLength="50"/>
          </div>
          <div className="width">
            <label htmlFor="message">Message:</label>
            <textarea name="Message" defaultValue={Message} onBlur={handleChange} rows="5" maxLength="600" />
          </div>
          {errorMessage && (
            <div className="gray">
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button data-testid="button" type="submit" className="waves-effect waves-light indigo lighten-3 btn-small marginTop">Submit</button>
        </form> */}
    </div>
  )
}
  
export default ContactForm;