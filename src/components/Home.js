import React, { useEffect, useState } from "react";
import "../styles/home.css";
import NewsItem from "./NewsItem";
import axios from "axios";

function Home(props) {
  const [showIcon, setShowIcon] = useState(false);
  const toggleShowIcon = () => setShowIcon(!showIcon);

  const [heading, setheading] = useState("");
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=d93dff059a5142c2b213c99bc33e23fb"
      )
      .then((res) => {
        setheading("General");
        setdata(res.data.articles);
      });
  }, []);

  const getGeneral = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=d93dff059a5142c2b213c99bc33e23fb"
      )
      .then((res) => {
        setheading("General");
        setdata(res.data.articles);
      });
  };
  const getBuisness = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=d93dff059a5142c2b213c99bc33e23fb"
      )
      .then((res) => {
        setheading("Buisenss");
        setdata(res.data.articles);
      });
  };
  const getEntertainment = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=d93dff059a5142c2b213c99bc33e23fb"
      )
      .then((res) => {
        setheading("Entertainment");
        setdata(res.data.articles);
      });
  };
  const getHealth = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=d93dff059a5142c2b213c99bc33e23fb"
      )
      .then((res) => {
        setheading("Health");
        setdata(res.data.articles);
      });
  };
  const getScience = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=d93dff059a5142c2b213c99bc33e23fb"
      )
      .then((res) => {
        setheading("Science");
        setdata(res.data.articles);
      });
  };
  const getSports = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=d93dff059a5142c2b213c99bc33e23fb"
      )
      .then((res) => {
        setheading("Sports");
        setdata(res.data.articles);
      });
  };
  const getTechnology = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=d93dff059a5142c2b213c99bc33e23fb"
      )
      .then((res) => {
        setheading("Technology");
        setdata(res.data.articles);
      });
  };
  const getIndia = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=d93dff059a5142c2b213c99bc33e23fb"
      )
      .then((res) => {
        setheading("India");
        setdata(res.data.articles);
      });
  };
  const getUsa = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=d93dff059a5142c2b213c99bc33e23fb"
      )
      .then((res) => {
        setheading("USA");
        setdata(res.data.articles);
      });
  };
  const getCanada = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=ca&apiKey=d93dff059a5142c2b213c99bc33e23fb"
      )
      .then((res) => {
        setheading("Canada");
        setdata(res.data.articles);
      });
  };

  let map = data.map((value, index) => {
    return (
      <NewsItem
        key={index}
        image={value.urlToImage}
        title={value.title}
        description={value.description}
        url={value.url}
      />
    );
  });
  return (
    <>
      <div className="container">
        
        <h1>Categories</h1>
        <input type="checkbox" name="" id="check" />
        <label className="icon" htmlFor="check" onClick={toggleShowIcon}>
          {showIcon ? (
            <i className="fa-solid fa-angle-up"></i>
            ) : (
              <i className="fa-solid fa-angle-down"></i>
          )}
        </label>

        <div className="btn-container">
          <button className="btn" type="button" onClick={getGeneral}>
            General
          </button>

          <button className="btn" type="button" onClick={getBuisness}>
            Buisness
          </button>
          <button className="btn" type="button" onClick={getEntertainment}>
            Entertainment
          </button>
          <button className="btn" type="button" onClick={getHealth}>
            Health
          </button>
          <button className="btn" type="button" onClick={getScience}>
            Science
          </button>
          <button className="btn" type="button" onClick={getSports}>
            Sports
          </button>
          <button className="btn" type="button" onClick={getTechnology}>
            Technology
          </button>
          <button className="btn" type="button" onClick={getIndia}>
            INDIA
          </button>
          <button className="btn" type="button" onClick={getUsa}>
            USA
          </button>
          <button className="btn" type="button" onClick={getCanada}>
            CANADA
          </button>
        </div>
      </div>
       <div className="newsitem">
         <h1 className="news-heading">{heading}</h1>
         <div className="map">{map}</div>
         </div>


    </>
  );
}

export default Home;
