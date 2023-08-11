import React, { useState } from "react";
import "./Shopinglist.css";
import Counter from "./Counter";
import Labels from "./Lables";

function Shopinglist() {
  const [userInput, setUserInput] = useState("");
  const [shopList, setShopList] = useState([]);
  const [count, setCount] = useState(0);

  const incCount = () => {
    setCount(count + 1);
  };

  const decCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="title">Shoping List !</div>
        <form>
          <input
            value={userInput}
            onChange={(e) => {
              setUserInput(e.target.value);
            }}
          ></input>
          <div className="counter">
            <button
              onClick={(e) => {
                e.preventDefault();
                incCount();
              }}
            >
              +
            </button>
            <p>{count}</p>
            <button
              onClick={(e) => {
                e.preventDefault();
                if (count > 0) decCount();
              }}
            >
              -
            </button>
          </div>
          <select id="unit">
            <option value="litr"> Litr</option>
            <option value="kg"> Kilo gram</option>
            <option value="num"> number</option>
          </select>
          <button
            onClick={(e) => {
              e.preventDefault();
              if (userInput !== "") {
                let newshop = {
                  name: userInput,
                  id: Math.random(),
                  cnt: count,
                };
                let temp = [...shopList];
                temp.push(newshop);
                setShopList(temp);
                setUserInput("");
              }
            }}
          >
            Add
          </button>
        </form>
      </div>
      <div className="contain-list">
        <div className="items">
          {shopList.map((item, index) => {
            return (
              <div key={index}  className="items_div"  >
                <Labels elementName={item.name} />
                <Counter counts={item.cnt} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Shopinglist;
