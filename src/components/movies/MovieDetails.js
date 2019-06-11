import React, { Component } from "react";
import { getMovieDetails } from "../../actions/movieActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class MovieDetails extends Component {
  state = {
    backdrop: ""
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(id);
    this.props.getMovieDetails(id);
  }

  render() {
    const { movieDetails } = this.props;
    console.log(this.props.movieDetails);
    if (movieDetails.backdrop_path) {
      return (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${
              movieDetails.backdrop_path
            }`}
            alt="Backdrop"
            className="w-100"
          />
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
