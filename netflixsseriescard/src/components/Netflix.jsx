import React from "react";
import "./netflix.css";
function Netflix(props) {
  return (
    <div>
      <div className="cards">
        <div className="card">
          <img src={props.image} alt="mypic" className="cardimg" />
          <div className="cardinfo">
            <span className="cardcategory">{props.title}</span>
            <h3 className="cardtitle">{props.sname}</h3>
            <a href={props.link}>
              <button className="btn1">watch now</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export { Netflix };
