import React, { useState } from "react";
import "./Counter.css";

function Counter({ counts }) {
  const [countplus, setCountplus] = useState(counts);

  return (
    <div>
      <div className="counter">
        <button
          onClick={(e) => {
            e.preventDefault();
            setCountplus(countplus +1 );
          }}
        >
          +
        </button>
        <p>{countplus}</p>
        <button
          onClick={(e) => {
            e.preventDefault();
            if (countplus > 0) setCountplus(countplus -1);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default Counter;
