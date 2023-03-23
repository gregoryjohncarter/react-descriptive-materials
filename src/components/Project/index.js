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
            <div className="secondary screen-title" onClick={(event) => { handleClick('https://make-notes-4-viewing.herokuapp.com/', event); }} style={{cursor:"pointer"}}> 
              <SocialIcon url='https://github.com/gregoryjohncarter/makenotes4viewing' className="iconHover" bgColor="#2d2d2d" fgColor="#e8e8e8" style={{ height: 45, width: 45}} target="_blank"/><p className="fontTwoA" onClick={(event) => { handleClick('https://make-notes-4-viewing.herokuapp.com/', event); }}>Make Notes 4 Viewing <span className="fontOneA" onClick={(event) => { handleClick('https://make-notes-4-viewing.herokuapp.com/', event); }}>&rarr; React, Material UI</span></p>
            </div>
          </div>
          <div className="col s12 l6 colFlex">
            <div className="secondary thought" onClick={(event) => { handleClick('https://news-to-attend-to.herokuapp.com/', event); }} style={{cursor:"pointer"}}>
              <SocialIcon url='https://github.com/gregoryjohncarter/news-to-attend-to' className="iconHover" bgColor="#2d2d2d" fgColor="#e8e8e8" style={{ height: 45, width: 45}} target="_blank"/><p className="fontTwoA" onClick={(event) => { handleClick('https://news-to-attend-to.herokuapp.com/', event); }}>News to Attend to<span className="fontOneA" onClick={(event) => { handleClick('https://news-to-attend-to.herokuapp.com/', event); }}>&rarr; React, News API</span></p>
            </div>
          </div>
        </div>
        <div className="other-container">
          <div className="row">
            <div className="col s12 l6 colFlex">
              <div className="secondary wo" onClick={(event) => { handleClick('https://workout-assistant-mern.herokuapp.com/', event); }} style={{cursor:"pointer"}}>
                <SocialIcon url='https://github.com/gregoryjohncarter/Workout-Assistant' className="iconHover" bgColor="#2d2d2d" fgColor="#e8e8e8" style={{ height: 45, width: 45}} target="_blank"/><p className="fontTwoA" onClick={(event) => { handleClick('https://workout-assistant-mern.herokuapp.com/', event); }}>Workout Assistant<span className="fontOneA" onClick={(event) => { handleClick('https://workout-assistant-mern.herokuapp.com/', event); }}>&rarr; MERN, Apollo</span></p>
              </div>
            </div>
            <div className="col s12 l6 colFlex">
              <div className="secondary blackjack" onClick={(event) => { handleClick('https://gregoryjohncarter.github.io/betwixt-blackjack/', event); }} style={{cursor:"pointer"}}> 
                <SocialIcon url='https://github.com/gregoryjohncarter/betwixt-blackjack' className="iconHover" bgColor="#2d2d2d" fgColor="#e8e8e8" style={{ height: 45, width: 45}} target="_blank"/><p className="fontTwoA" onClick={(event) => { handleClick('https://gregoryjohncarter.github.io/betwixt-blackjack/', event); }}>Betwixt Blackjack <span className="fontOneA" onClick={(event) => { handleClick('https://gregoryjohncarter.github.io/betwixt-blackjack/', event); }}>&rarr; React, CSS</span></p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s12 l6 colFlex">
              <div className="secondary codeq" onClick={(event) => { handleClick('https://literatureleadsledger.herokuapp.com/', event); }} style={{cursor:"pointer"}}>
                <SocialIcon url='https://github.com/gregoryjohncarter/literature-leads-ledger' className="iconHover" bgColor="#2d2d2d" fgColor="#e8e8e8" style={{ height: 45, width: 45}} target="_blank"/><p className="fontTwoA" onClick={(event) => { handleClick('https://literatureleadsledger.herokuapp.com/', event); }}>Literature Leads Ledger<span className="fontOneA" onClick={(event) => { handleClick('https://literatureleadsledger.herokuapp.com/', event); }}>&rarr; MERN, Google Books API</span></p>
              </div>
            </div>
            <div className="col s12 l6 colFlex">
              <div className="secondary citizenship" onClick={(event) => { handleClick('https://thought-bubble-boards.herokuapp.com/', event); }} style={{cursor:"pointer"}}>
                <SocialIcon url='https://github.com/gregoryjohncarter/thought-bubble-boards' className="iconHover" bgColor="#2d2d2d" fgColor="#e8e8e8" style={{ height: 45, width: 45}} target="_blank"/><p className="fontTwoA" onClick={(event) => { handleClick('https://thought-bubble-boards.herokuapp.com/', event); }}>Thought Bubble Boards <span className="fontOneA" onClick={(event) => { handleClick('https://thought-bubble-boards.herokuapp.com/', event); }}>&rarr; Handlebars.js, MySQL2</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;