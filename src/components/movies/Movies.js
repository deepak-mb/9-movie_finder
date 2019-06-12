import React, { Component } from "react";
import {
  getPopular,
  getLatest,
  getNowPlaying,
  getTopRated,
  getUpcoming
} from "../../actions/movieActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Movie from "./Movie";
import InfiniteScroll from "react-infinite-scroll-component";

class Movies extends Component {
  state = {
    movieType: "",
    movies: []
  };
  // componentDidMount() {
  //   this.props.getPopular();
  // }
  onClick = e => {
    this.setState({ movieType: e.target.name });
    if (e.target.name === "popular") {
      this.props.getPopular();
    } else if (e.target.name === "latest") {
      this.props.getLatest();
    } else if (e.target.name === "nowplaying") {
      this.props.getNowPlaying();
    } else if (e.target.name === "toprated") {
      this.props.getTopRated();
    } else if (e.target.name === "upcoming") {
      this.props.getUpcoming();
    }
  };
  componentWillReceiveProps(nextProps) {
    const { movieType } = this.state;
    if (movieType === "nowplaying") {
      this.setState({ movies: nextProps.nowplaying });
    } else if (movieType === "popular") {
      this.setState({ movies: nextProps.popularmovies });
    } else if (movieType === "toprated") {
      this.setState({ movies: nextProps.toprated });
    } else if (movieType === "upcoming") {
      this.setState({ movies: nextProps.upcoming });
    }
  }
  render() {
    const { movies } = this.state;
    // console.log(movies);
    if (movies) {
      return (
        <div className="container py-3">
          <div className="row types-container my-3">
            <input
              type="button"
              value="Popular"
              className="btn btn-light mx-2"
              name="popular"
              onClick={this.onClick}
            />
            {/* <input
              type="button"
              value="Latest"
              className="btn btn-light mx-2"
              name="latest"
              onClick={this.onClick}
            /> */}
            <input
              type="button"
              value="Now Playing"
              className="btn btn-light mx-2"
              name="nowplaying"
              onClick={this.onClick}
            />
            <input
              type="button"
              value="Top Rated"
              className="btn btn-light mx-2"
              name="toprated"
              onClick={this.onClick}
            />
            <input
              type="button"
              value="Upcoming"
              className="btn btn-light mx-2"
              name="upcoming"
              onClick={this.onClick}
            />
          </div>
          {/* <div className="card-columns">
            {movies.map(movie => (
              <Movie key={movie.id} movie={movie} />
            ))}
          </div> */}
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
  popularmovies: PropTypes.array.isRequired,
  latestmovies: PropTypes.array.isRequired,
  nowplaying: PropTypes.array.isRequired,
  toprated: PropTypes.array.isRequired,
  upcoming: PropTypes.array.isRequired,
  getPopular: PropTypes.func.isRequired,
  getLatest: PropTypes.func.isRequired,
  getNowPlaying: PropTypes.func.isRequired,
  getTopRated: PropTypes.func.isRequired,
  getUpcoming: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  page: state.movies.page,
  popularmovies: state.movies.popularmovies,
  latestmovies: state.movies.latestmovies,
  nowplaying: state.movies.nowplaying,
  toprated: state.movies.toprated,
  upcoming: state.movies.upcoming,
  total_pages: state.movies.total_pages,
  total_results: state.movies.total_results
});

export default connect(
  mapStateToProps,
  { getPopular, getLatest, getNowPlaying, getTopRated, getUpcoming }
)(Movies);
