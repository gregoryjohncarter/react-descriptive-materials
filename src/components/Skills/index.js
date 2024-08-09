import React from 'react';

function Skills({ currentCategory }) {
  const { section, description, icon } = currentCategory;
  return (
    <div className="mobileResume box-bottom">
      <section className="fontOne">
        <h3 data-testid="h3tag" className="bodyFontAlt animate__animated animate__fadeIn resume"><i className="small material-icons">{icon}</i>{section}</h3>
      </section>
      <section className="skills">
        <article className="wrapper">
          <div className="marquee">
            <div className="marquee__group">
              <i className="devicon-python-plain icon-dimensions"></i>
              <i className="devicon-javascript-plain icon-dimensions"></i>
              <i className="devicon-nodejs-plain-wordmark icon-dimensions"></i>
              <i className="devicon-react-original-wordmark icon-dimensions"></i>
              <i className="devicon-bootstrap-plain-wordmark icon-dimensions"></i>
              <i className="devicon-css3-plain-wordmark icon-dimensions"></i>
              <i className="devicon-mongodb-plain-wordmark icon-dimensions"></i>
            </div>
            <div aria-hidden="true" className="marquee__group">
            <i className="devicon-python-plain icon-dimensions"></i>
              <i className="devicon-javascript-plain icon-dimensions"></i>
              <i className="devicon-nodejs-plain-wordmark icon-dimensions"></i>
              <i className="devicon-react-original-wordmark icon-dimensions"></i>
              <i className="devicon-bootstrap-plain-wordmark icon-dimensions"></i>
              <i className="devicon-css3-plain-wordmark icon-dimensions"></i>
              <i className="devicon-mongodb-plain-wordmark icon-dimensions"></i>
            </div>
          </div>
          <div className="marquee marquee--reverse reverse">
            <div className="marquee__group">
              <i className="devicon-java-plain-wordmark icon-dimensions"></i>
              <i className="devicon-materialui-plain icon-dimensions"></i>
              <i className="devicon-mysql-plain-wordmark icon-dimensions"></i>
              <i className="devicon-git-plain-wordmark icon-dimensions"></i>
              <i className="devicon-csharp-plain icon-dimensions"></i>
              <i className="devicon-html5-plain-wordmark icon-dimensions"></i>
              <i className="devicon-spring-original-wordmark icon-dimensions"></i>
            </div>
            <div aria-hidden="true" className="marquee__group">
            <i className="devicon-java-plain-wordmark icon-dimensions"></i>
              <i className="devicon-materialui-plain icon-dimensions"></i>
              <i className="devicon-mysql-plain-wordmark icon-dimensions"></i>
              <i className="devicon-git-plain-wordmark icon-dimensions"></i>
              <i className="devicon-csharp-plain icon-dimensions"></i>
              <i className="devicon-html5-plain-wordmark icon-dimensions"></i>
              <i className="devicon-spring-original-wordmark icon-dimensions"></i>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Skills;