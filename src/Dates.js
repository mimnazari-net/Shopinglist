import React from "react";
import "./Dates.css";
function Dates() {
  let color = "blue";

  let arrdates = [
    "12/02/2022",
    "12/06/2022",
    "12/05/2022",
    "12/04/2022",
    "12/02/2022",
    "12/07/2022",
    "12/06/2022",
    "12/03/2022",
    "12/04/2022",
    "12/04/2022",
  ];

  return (
    <div className="conDate">
      {arrdates.map((item,index) => {
        if(index == 0){
            color = 'blue'
        }
        else{
            if(arrdates[index] === arrdates[index -1]){

            }else{

                if(color == 'blue') color='red'
                else if(color == 'red') color='blue'
            }
        }
        return <div style={{ color: color }}>{item} </div>;
      })}
    </div>
  );
}

export default Dates;
