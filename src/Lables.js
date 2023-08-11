import React, { useState } from "react";
import "./Lables.css";
function Item({ elementName }) {
  
  const [colors, setColors] = useState("");
  const [click, setClick] = useState(1);

  return (
    <div className="conItem">
      <div
        className="shop"
        onClick={() => {
          setClick(click + 1);
          if (click <= 3) {
            if (click === 1) {
              setColors("red");
            } else if (click === 2) {
              setColors("blue");
            } else if (click === 3) {
              setColors("crimson");
              setClick(1);
            }
          }
        }}
        style={{
          backgroundColor: colors,
        }}
      >
        {console.log(click)}

        <p>{elementName} </p>
      </div>
    </div>
  );
}

export default Item;
