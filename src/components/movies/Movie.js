import React, { Component } from "react";
import { getVideo } from "../../actions/movieActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

class Movie extends Component {
  state = {
    show: false,
    videoKey: "",
    url: ""
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = id => {
    this.props.getVideo(id);
    this.setState({ show: true });
  };
  componentWillReceiveProps(nextProps) {
    nextProps.videoDetails.map(d =>
      this.setState({
        videoKey: d.key,
        url: `https://www.youtube.com/embed/${d.key}?autoplay=1`
      })
    );
  }
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
    const { videoKey } = this.state;
    // console.log(`https://www.youtube.com/embed/${videoKey}?autoplay=1`);
    // console.log(this.state.videoKey);
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
        <div className="div">
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="embed-container">
                <iframe
                  src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            </Modal.Body>
            <Modal.Footer className="py-1">
              <input
                type="button"
                value="Close"
                onClick={this.handleClose}
                className="btn btn-dark links"
              />
            </Modal.Footer>
          </Modal>
        </div>
      </div>
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
