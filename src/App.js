import React, { useState } from "react";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calcBmi = (event) => {
    //prevent submiting
    event.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Please enter valid weight and height");
    } else {
      let bmi = weight / (height * height);
      setBmi(bmi.toFixed(1));
      if (bmi < 18.5) {
        setMessage("You are underweight");
      } else if (bmi >= 18.5 && bmi < 25) {
        setMessage("You are a healthy weight");
      } else {
        setMessage("You are overweight");
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };
  let imgSrc;
  if (bmi < 1) {
    imgSrc = null;
  } else {
    if (bmi < 18.5) {
      imgSrc = require("../src/assets/underweight.png");
    } else if (bmi >= 18.5 && bmi < 25) {
      imgSrc = require("../src/assets/healthy.png");
    } else {
      imgSrc = require("../src/assets/overweight.png");
    }
  }

  return (
    <div className="app">
      <div className="container">
        <h2 className="center">BMI Calculater</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (kg)</label>
            <input
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            ></input>
          </div>
          <div>
            <label>Height(m)</label>
            <input
              value={height}
              onChange={(event) => setHeight(event.target.value)}
            ></input>
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" type="submit" onClick={reload}>
              Refresh
            </button>
          </div>
        </form>
        <div className="center">
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
        <div className="img-container">
          <img src={imgSrc} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default App;
