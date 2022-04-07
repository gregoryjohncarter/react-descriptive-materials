import React from 'react';
import { SocialIcon } from 'react-social-icons';

function Project() {
  function handleClick(myLink, event) {
    if (event.target == event.currentTarget) {
      window.open(
        myLink,
        '_blank'
      );
    }
  }
  return (
    <div className="main-container">
      <div className="main-program screen-title" onClick={(event) => { handleClick('https://yks2728.github.io/Screen-Title-Scanner/', event); }} style={{cursor:"pointer"}}> 
        <SocialIcon url='https://github.com/yks2728/Screen-Title-Scanner' className="iconHover" bgColor="#7fffd4" style={{ height: 45, width: 45}} target="_blank"/><p className="fontTwoA" onClick={(event) => { handleClick('https://yks2728.github.io/Screen-Title-Scanner/', event); }}>Screen Title Scanner <span className="fontOneA">&rarr; JavaScript, imdb API</span></p>
      </div>
      <div className="other-container">
        <div className="second-container">
          <div className="secondary citizenship" onClick={(event) => { handleClick('https://boiling-fortress-60978.herokuapp.com/login', event); }} style={{cursor:"pointer"}}>
            <SocialIcon url='https://github.com/tcampbell01/Citizenship-community' className="iconHover" bgColor="#7fffd4" style={{ height: 45, width: 45}} target="_blank"/><p className="fontTwoA" onClick={(event) => { handleClick('https://boiling-fortress-60978.herokuapp.com/login', event); }}>Citizenship Community <span className="fontOneA">&rarr; Sequelize, Handlebars, Express</span></p>
          </div>
          <div className="secondary calculator">
            <p className="fontTwoA">Calculator <span className="fontOneA">&rarr; React/JS/CSS</span></p>
          </div>
        </div>
        <div className="third-container">
          <div className="secondary pastel-puzzles">
            <p className="fontTwoA">Pastel Puzzles <span className="fontOneA">&rarr; MERN Stack</span></p>
          </div>
          <div className="secondary run-buddy">
            <p className="fontTwoA">Run Buddy <span className="fontOneA">&rarr; HTML/CSS</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;