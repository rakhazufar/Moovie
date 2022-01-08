import React from "react";

export default function Vanue() {
  return (
    <div className="vanue">
      <div className="choose-vanue">
        <select type="select" id="input-vanue">
          <option value="">Select Category</option>
          <option value="latest">Latest Movie</option>
          <option value="nowPlaying"> Now Playing</option>
          <option value="topRated">Top Rated</option>
          <option value="upcoming">Upcoming Movie</option>
        </select>
      </div>

      <div className="location">
        <a href="#">Region</a>
      </div>
    </div>
  );
}
