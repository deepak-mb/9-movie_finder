import {
  GET_POPULAR,
  GET_LATEST,
  GET_NOW_PLAYING,
  GET_TOP_RATED,
  GET_UPCOMING,
  GET_MOVIE_DETAILS,
  GET_VIDEO
} from "./types.js";
import axios from "axios";

// const URL = "http://localhost:3000/movies";
const URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=59f1e4f28c3fd33b83142a88610cc03e&language=en-US&page=1";

export const getPopular = page => async dispatch => {
  await axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=59f1e4f28c3fd33b83142a88610cc03e&language=en-US&page=${page}`
    )
    .then(res => {
      // console.log(res.data);
      dispatch({
        type: GET_POPULAR,
        payload: res.data
      });
    });
};

export const getLatest = () => async dispatch => {
  await axios
    .get(
      `https://api.themoviedb.org/3/movie/latest?api_key=59f1e4f28c3fd33b83142a88610cc03e&language=en-US`
    )
    .then(res => {
      // console.log(res.data);
      dispatch({
        type: GET_LATEST,
        payload: res.data
      });
    });
};

export const getNowPlaying = () => async dispatch => {
  await axios
    .get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=59f1e4f28c3fd33b83142a88610cc03e&language=en-US
      `
    )
    .then(res => {
      // console.log(res.data);
      dispatch({
        type: GET_NOW_PLAYING,
        payload: res.data
      });
    });
};

export const getTopRated = () => async dispatch => {
  await axios
    .get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=59f1e4f28c3fd33b83142a88610cc03e&language=en-US
      `
    )
    .then(res => {
      // console.log(res.data);
      dispatch({
        type: GET_TOP_RATED,
        payload: res.data
      });
    });
};

export const getUpcoming = () => async dispatch => {
  await axios
    .get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=59f1e4f28c3fd33b83142a88610cc03e&language=en-US
      `
    )
    .then(res => {
      // console.log(res.data);
      dispatch({
        type: GET_UPCOMING,
        payload: res.data
      });
    });
};

export const getMovieDetails = id => async dispatch => {
  await axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=59f1e4f28c3fd33b83142a88610cc03e&language=en-US`
    )
    .then(res => {
      // console.log(res.data);
      dispatch({
        type: GET_MOVIE_DETAILS,
        payload: res.data
      });
    });
};

export const getVideo = id => async dispatch => {
  await axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=59f1e4f28c3fd33b83142a88610cc03e&language=en-US`
    )
    .then(res => {
      console.log(res);
      dispatch({
        type: GET_VIDEO,
        payload: res.data.results
      });
    });
};
