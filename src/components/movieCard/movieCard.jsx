import React from "react";
import DunePoster from "../../assets/duneposter.jpg";
import { VscPlayCircle } from "react-icons/vsc";

export default function MovieCard() {
  // const days = [
  //   "Sunday",
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thursday",
  //   "Friday",
  //   "Saturday",
  // ];
  // const d = new Date();
  // const dayName = days[d.getDay()];
  return (
    <div className="card">
      <div className="top-card">
        <img src={DunePoster} alt="" />
        <div className="text-card">
          <h3>Name of the Movie</h3>
          <div className="staring">
            <h5>Staring</h5>
            <p>
              Rakha Zufar, Rakha Zufar, Rakha Zufar, Rakha Zufar, Rakha Zufar,
              Rakha Zufar, Rakha Zufar
            </p>
          </div>

          <div className="running-time">
            <h5>Running Time</h5>
            <p>2.5 Hours</p>
          </div>
        </div>
      </div>

      <VscPlayCircle className="play-button" />
    </div>
  );
}
