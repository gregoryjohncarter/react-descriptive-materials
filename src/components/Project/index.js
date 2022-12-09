import React from 'react';
import { SocialIcon } from 'react-social-icons';

function Project() {
  function handleClick(myLink, event) {
    if (event.target === event.currentTarget) {
      window.open(
        myLink,
        '_blank'
      );
    }
  }
  return (
    <div className="border">
      <div className="main-container">
        <div className="row">
          <div className="col s12 l6 colFlex">
            <div className="secondary blackjack" onClick={(event) => { handleClick('https://gregoryjohncarter.github.io/betwixt-blackjack/', event); }} style={{cursor:"pointer"}}> 
              <SocialIcon url='https://github.com/gregoryjohncarter/betwixt-blackjack' className="iconHover" bgColor="#e0d4ec" fgColor="#2d2d2d" style={{ height: 45, width: 45}} target="_blank"/><p className="fontTwoA">Betwixt Blackjack <span className="fontOneA">&rarr; React, CSS</span></p>
            </div>
          </div>
          <div className="col s12 l6 colFlex">
            <div className="secondary screen-title" onClick={(event) => { handleClick('https://yks2728.github.io/Screen-Title-Scanner/', event); }} style={{cursor:"pointer"}}> 
              <SocialIcon url='https://github.com/yks2728/Screen-Title-Scanner' className="iconHover" bgColor="#e0d4ec" fgColor="#2d2d2d" style={{ height: 45, width: 45}} target="_blank"/><p className="fontTwoA">Screen Title Scanner <span className="fontOneA">&rarr; jQuery, imdb API</span></p>
            </div>
          </div>
        </div>
        <div className="other-container">
          <div className="row">
          <div className="col s12 l6 colFlex">
              <div className="secondary wo" onClick={(event) => { handleClick('https://powerful-beach-20504.herokuapp.com/', event); }} style={{cursor:"pointer"}}>
                <SocialIcon url='https://github.com/ryanweiler92/Workout-Assistant' className="iconHover" bgColor="#e0d4ec" fgColor="#2d2d2d" style={{ height: 45, width: 45}} target="_blank"/><p className="fontTwoA grating">Workout Assistant<span className="fontOneA">&rarr; MERN, Apollo Client</span></p>
              </div>
            </div>
            <div className="col s12 l6 colFlex">
              <div className="secondary citizenship" onClick={(event) => { handleClick('https://boiling-fortress-60978.herokuapp.com/login', event); }} style={{cursor:"pointer"}}>
                <SocialIcon url='https://github.com/tcampbell01/Citizenship-community' className="iconHover" bgColor="#e0d4ec" fgColor="#2d2d2d" style={{ height: 45, width: 45}} target="_blank"/><p className="fontTwoA" onClick={(event) => { handleClick('https://boiling-fortress-60978.herokuapp.com/login', event); }}>Citizenship Community <span className="fontOneA">&rarr; MySQL2, Socket.IO</span></p>
              </div>
            </div>
            
          </div>
          <div className="row">
            <div className="col s12 l6 colFlex">
              <div className="secondary codeq" onClick={(event) => { handleClick('https://literatureleadsledger.herokuapp.com/', event); }} style={{cursor:"pointer"}}>
                <SocialIcon url='https://github.com/gregoryjohncarter/literature-leads-ledger' className="iconHover" bgColor="#e0d4ec" fgColor="#2d2d2d" style={{ height: 45, width: 45}} target="_blank"/><p className="fontTwoA">Literature Leads Ledger<span className="fontOneA">&rarr; MERN, Google Books API</span></p>
              </div>
            </div>
            <div className="col s12 l6 colFlex">
              <div className="secondary thought" onClick={(event) => { handleClick('https://github.com/gregoryjohncarter/news-to-attend-to', event); }} style={{cursor:"pointer"}}>
                <SocialIcon url='https://github.com/gregoryjohncarter/news-to-attend-to' className="iconHover" bgColor="#e0d4ec" fgColor="#2d2d2d" style={{ height: 45, width: 45}} target="_blank"/><p className="fontTwoA grating">News to Attend to<span className="fontOneA">&rarr; React, News API</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;