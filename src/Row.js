import React, { useState, useEffect } from "react";
import "./App.css";
import instance from "./axios";
import "./Row.css";


const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchURL);
      setmovies(request.data.results);
      console.log(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);
  console.log(movies);

  return (
    <div className="row">
      {title}
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row_poster ${isLargeRow} && row_posterLarge`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
