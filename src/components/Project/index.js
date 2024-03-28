import React, { useEffect, useState } from 'react';
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

  const [mobileWindow, setMobileWindow] = useState(window.matchMedia("(max-width: 450px)").matches);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      // clean up code
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const [defaultItem, setDefaultItem] = useState(false);
  const [defaultItem2, setDefaultItem2] = useState(false);

  const [item2, setItem2] = useState(false);
  const [item3, setItem3] = useState(false);
  const [item4, setItem4] = useState(false);
  const [item5, setItem5] = useState(false);

  useEffect(() => {
    if (mobileWindow) {
      setTimeout(() => {
        setDefaultItem(true);
        setTimeout(() => {
          setDefaultItem2(true);
        }, 250)
      }, 250);
      if (offset > 80) {
        setItem2(true);
      }
      if (offset > 287) {
        setItem3(true);
      }
      if (offset > 477) {
        setItem4(true);
      }
      if (offset > 672) {
        setItem5(true);
      }
    } else {
      setDefaultItem(true);
      setDefaultItem2(true);
      setItem2(true);
      setItem3(true);
      setItem4(true);
      setItem5(true);
    }
  }, [offset])

  return (
    <div className="border">
      <div className="main-container">
        <div className="row">
          <div className="col s12 l6 colFlex">
            <div className="secondary screen-title" onClick={(event) => { handleClick('https://makenotes4viewing-f4b5c41e614e.herokuapp.com/', event); }} style={{cursor:"pointer"}}> 
              {defaultItem && <><SocialIcon url='https://github.com/gregoryjohncarter/makenotes4viewing' className="iconHover animate__animated animate__fadeIn" bgColor="#2d2d2d" fgColor="#e8e8e8" style={{ height: 45, width: 45}} target="_blank"/><p className="fontTwoA animate__animated animate__flipInX" onClick={(event) => { handleClick('https://makenotes4viewing-f4b5c41e614e.herokuapp.com/', event); }}>MakeNotes4Viewing <span className="fontOneA" onClick={(event) => { handleClick('https://makenotes4viewing-f4b5c41e614e.herokuapp.com/', event); }}>&rarr; React.js, Python</span></p></>}
            </div>
          </div>
          <div className="col s12 l6 colFlex">
            <div className="secondary wo" onClick={(event) => { handleClick('https://writeabout2-077bb347dd31.herokuapp.com/', event); }} style={{cursor:"pointer"}}>
              {defaultItem2 && <><SocialIcon url='https://github.com/gregoryjohncarter/2WriteAbout' className={item3 ? "iconHover animate__animated animate__fadeIn" : "iconHover"} bgColor="#2d2d2d" fgColor="#e8e8e8" style={{ height: 45, width: 45}} target="_blank"/><p className={item3 ? "fontTwoA animate__animated animate__flipInX" : "fontTwoA"} onClick={(event) => { handleClick('https://writeabout2-077bb347dd31.herokuapp.com/', event); }}>2WriteAbout<span className="fontOneA" onClick={(event) => { handleClick('https://writeabout2-077bb347dd31.herokuapp.com/', event); }}>&rarr; React.js, Java</span></p></>}
            </div>
          </div>
        </div>
        <div className="other-container">
          <div className="row">
            <div className="col s12 l6 colFlex">
              <div className="secondary blackjack" onClick={(event) => { handleClick('https://gregoryjohncarter.github.io/betwixt-blackjack/', event); }} style={{cursor:"pointer"}}> 
                {item2 && <><SocialIcon url='https://github.com/gregoryjohncarter/betwixt-blackjack' className="iconHover animate__animated animate__fadeIn" bgColor="#2d2d2d" fgColor="#e8e8e8" style={{ height: 45, width: 45}} target="_blank"/><p className="fontTwoA animate__animated animate__flipInX" onClick={(event) => { handleClick('https://gregoryjohncarter.github.io/betwixt-blackjack/', event); }}>Betwixt Blackjack <span className="fontOneA" onClick={(event) => { handleClick('https://gregoryjohncarter.github.io/betwixt-blackjack/', event); }}>&rarr; React.js</span></p></>}
              </div>
            </div>
            <div className="col s12 l6 colFlex">
              <div className="secondary thought" onClick={(event) => { handleClick('https://news-to-attend-to.herokuapp.com/', event); }} style={{cursor:"pointer"}}>
                {item3 && <><SocialIcon url='https://github.com/gregoryjohncarter/news-to-attend-to' className={item2 ? "iconHover animate__animated animate__fadeIn" : "iconHover"} bgColor="#2d2d2d" fgColor="#e8e8e8" style={{ height: 45, width: 45}} target="_blank"/><p className={item2 ? "fontTwoA animate__animated animate__flipInX" : "fontTwoA"} onClick={(event) => { handleClick('https://news-to-attend-to.herokuapp.com/', event); }}>News to Attend to<span className="fontOneA" onClick={(event) => { handleClick('https://news-to-attend-to.herokuapp.com/', event); }}>&rarr; React.js, Node.js</span></p></>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;