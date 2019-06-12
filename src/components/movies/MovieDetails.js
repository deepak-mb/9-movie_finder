import React, { Component } from "react";
import { getMovieDetails } from "../../actions/movieActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./moviedetails.css";

class MovieDetails extends Component {
  state = {
    backdrop: ""
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getMovieDetails(id);
  }

  render() {
    const {
      backdrop_path,
      genres,
      overview,
      poster_path,
      production_companies,
      release_date,
      runtime,
      tagline,
      title,
      vote_average
    } = this.props.movieDetails;
    // console.log(this.props.movieDetails);
    if (this.props) {
      return (
        <div
          className="backdrop"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`
          }}
        >
          <div className="container my-5 my-md-auto">
            <div className="row my-2">
              <div className="col-12 col-sm-12 col-md-4 my-3">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt="Poster"
                />
              </div>
              <div className="col-12 col-sm-12 col-md-8 detail-section">
                <h3 className="title text-white">
                  {title}
                  <sup>
                    <i className="fas fa-star" style={{ color: "#f2b01e" }} />
                    {vote_average}/10
                  </sup>
                </h3>
                <h5 className="tagline">{tagline}</h5>
                <p className="overview text-white">{overview}</p>
                <p className="text-white">Release Date: {release_date}</p>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <p>Loading</p>;
    }
  }
}

MovieDetails.propTypes = {
  movieDetails: PropTypes.object.isRequired,
  getMovieDetails: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  movieDetails: state.movies.movieDetails
});

export default connect(
  mapStateToProps,
  { getMovieDetails }
)(MovieDetails);
