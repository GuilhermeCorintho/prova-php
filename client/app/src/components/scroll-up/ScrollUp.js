import React from 'react';
import './ScrollUp.css';

const ScrollUp = () => {
  return (
    <div>
      <a href="/#" className="ScrollUp" onClick={() => { window.scrollTo(0,0)}}>
      </a>
    </div>
  )
}

export default ScrollUp;