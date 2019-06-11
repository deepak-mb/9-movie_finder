import React, { Component } from "react";
import { Link } from "react-router-dom";

class Movie extends Component {
  render() {
    const {
      id,
      vote_count,
      video,
      vote_average,
      title,
      poster_path,
      backdrop_path,
      overview,
      release_date
    } = this.props.movie;
    // const videoURl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=59f1e4f28c3fd33b83142a88610cc03e&language=en-US
    // `;
    // console.log(video);
    return (
      <div className="card">
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          className="card-img-top"
          alt="Poster"
        />
        <div className="card-body">
          <div className="title-container mb-2">
            <h5 className="card-title movie-title mb-0">{title}</h5>
            <span className="movie-rating">
              <i className="far fa-thumbs-up mx-1" />
              {vote_average}
            </span>
          </div>
          <p className="card-text movie-overview">{overview}</p>
        </div>
        {/* <ul className="list-group list-group-flush">
          <li className="list-group-item">Release Date: {release_date}</li>
        </ul> */}
        <div className="card-body">
          <Link to={`/moviedetails/${id}`} className="card-link btn btn-dark links">
            Movie Details
          </Link>
          <a href="!#" className="card-link btn btn-dark links">
            Trailer
          </a>
        </div>
      </div>
    );
  }
}

export default Movie;
