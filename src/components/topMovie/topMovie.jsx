import React from "react";
import MovieCard from "../movieCard/movieCard";
import { AiOutlinePlus } from "react-icons/ai";

export default function topMovie() {
  return (
    <section className="topMovie">
      <div className="top">
        <div className="line"></div>
        <h1>Top Movie</h1>
      </div>
      <div className="movie-container">
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
      <div className="show-all">
        <AiOutlinePlus className="show-all-movie" />
        <p>Show All Movie</p>
      </div>
    </section>
  );
}
