import React from "react";
import "../styles/NewsItem.css";

function NewsItem(props) {
  return (
    <>
      <div className="row">
        <div className="card">
          <div className="card-box">
            <div className="card-img">
              <img className="img" src={props.image} alt="" />
            </div>
            <div className="card-body">
              <h3>{props.title}</h3>
            <div className="link">
              <a href={props.url} className="see">
                See More
              </a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsItem;