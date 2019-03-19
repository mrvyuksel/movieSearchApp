import React, { Component } from "react";
import { getMovieDetails } from "../actions";

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieData: {}
    };
  }

  componentDidMount() {
    const {
      match: { params }
    } = this.props;

    getMovieDetails(params.imdbId).then(res => {
      this.setState({
        movieData: res
      });
    });
  }

  render() {
    const { movieData } = this.state;

    return (
      <div
        className="movie-details"
      >
        {movieData && (
          <React.Fragment>
            <div className="poster-container">
              <img src={movieData.Poster} alt="" />
            </div>
            <div className="detail-container">
              <div>
                <span>Title</span>
                {movieData.Title}
              </div>
              <div>
                <span>Year</span>
                {movieData.Year}
              </div>
              <div>
                <span>Runtime</span>
                {movieData.Runtime}
              </div>
              <div>
                <span>Director</span>
                {movieData.Director}
              </div>
              <div>
                <span>Actors</span>
                {movieData.Actors}
              </div>
              <div>
                <span>Website</span>

                <a
                  href={movieData.Website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {movieData.Website}
                </a>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default Details;
