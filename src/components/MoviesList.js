import React from "react";
import { Link } from "react-router-dom";

function MoviesList({ movies }) {
  return (
    <div>
      {movies.map((movie) => (
        <Link key={movie.id} to={`/movies/${movie.id}`}>
          {movie.title}
        </Link>
      ))}
    </div>
  );
}

export default MoviesList;
