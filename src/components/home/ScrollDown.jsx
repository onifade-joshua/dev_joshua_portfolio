import React from 'react';
import "./home.css";


const ScrollDown = () => {
  return (
    <div className="scroll_down">
      <a href="#about" className="mouse_wrapper">
        <span className="mouse">
          <span className="wheel"></span>
        </span>
      </a>
    </div>
  )
}

export default ScrollDown;