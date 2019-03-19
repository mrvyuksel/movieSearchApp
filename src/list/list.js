import React from "react";
import { Link } from "react-router-dom";

const ListComponent = ({ movies, totalResults }) => {
  const renderMovies = () => {
    return (
      movies &&
      movies.map((movie, key) => {
        return (
          <Link to={`/details/${movie.imdbID}`} className="movies" key={key}>
            <img
              className="poster-img"
              alt=""
              style={{
                backgroundImage: `url(${movie.Poster})`
              }}
            />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
          </Link>
        );
      })
    );
  };

  return <div className="movie-container">{renderMovies()}</div>;
};

export default ListComponent;
