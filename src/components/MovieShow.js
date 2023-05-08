import React from "react";
import { useParams } from "react-router-dom";

function MovieShow({ movies }) {
  const { movie_id } = useParams();
  const movie = movies.find((movie) => movie.id === movie_id);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
    </div>
  );
}

export default MovieShow;
