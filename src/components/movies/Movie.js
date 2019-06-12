import React, { Component } from "react";
import { getVideo } from "../../actions/movieActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

class Movie extends Component {
  render() {
    const {
      id,
      vote_count,
      vote_average,
      title,
      poster_path,
      backdrop_path,
      overview,
      release_date
    } = this.props.movie;
    // console.log();
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
          <Link
            to={`/moviedetails/${id}`}
            className="card-link btn btn-dark links"
          >
            Movie Details
          </Link>
          {/* <input
            type="button"
            value="Play Trailer"
            onClick={this.handleShow.bind(this, id)}
            className="card-link btn btn-dark links"
          /> */}
        </div>
      </div>
      // <div class="row no-gutters my-5">
      //   <div class="col-md-4">
      //     <img
      //       src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
      //       class="card-img"
      //       alt="Poster"
      //     />
      //     {/* <div
      //       style={{
      //         backgroundImage: `url(https://image.tmdb.org/t/p/w500/${poster_path})`,
      //         backgroundPosition: "center",
      //         backgroundAttachment: "scroll",
      //         backgroundSize: "cover",
      //         height: "100%",
      //         backgroundRepeat: "no-repeat"
      //       }}
      //     /> */}
      //   </div>
      //   <div class="col-md-8">
      //     <div class="card-body">
      //       <h5 class="card-title movie-title">{title}</h5>
      //       <span className="movie-rating">
      //         <i className="far fa-thumbs-up mx-1" />
      //         {vote_average}
      //       </span>
      //       <p class="card-text movie-overview">{overview}</p>
      //       <p class="card-text">
      //         <small class="text-muted">Release Date: {release_date}</small>
      //       </p>
      //       <Link
      //         to={`/moviedetails/${id}`}
      //         className="card-link btn btn-dark links"
      //       >
      //         Movie Details
      //       </Link>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

Movie.propTypes = {
  // videoDetails: PropTypes.object.isRequired,
  getVideo: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  videoDetails: state.movies.videoDetails
});

export default connect(
  mapStateToProps,
  { getVideo }
)(Movie);
