import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(true);

  function change() {
    setCount(!count);   // ✅ toggle
  }

  return (
    <center>
      <div className={count ? "page-light" : "page-dark"}>
        <div className="counter">
          <h1>{count ? "White Mode" : "Dark Mode"}</h1>

          <div className={count ? "box-white" : "box-dark"}>
            Color Changing Box
          </div>

          <button onClick={change} className="btn-counter">
            Click
          </button>
        </div>
      </div>
    </center>
  );
};

export default Counter;