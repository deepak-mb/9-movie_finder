import React, { Component } from "react";
import { getPopular } from "../../actions/movieActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Movie from "./Movie";

class Movies extends Component {
  componentDidMount() {
    this.props.getPopular();
  }
  render() {
    const { movies } = this.props;
    // console.log(movies);
    if (movies) {
      return (
        <div className="container py-3">
          <div className="card-columns">
            {movies.map(movie => (
              <Movie key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      );
    } else {
      return <p>Loading</p>;
    }
  }
}

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
  getPopular: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  page: state.movies.page,
  movies: state.movies.movies,
  total_pages: state.movies.total_pages,
  total_results: state.movies.total_results
});

export default connect(
  mapStateToProps,
  { getPopular }
)(Movies);
