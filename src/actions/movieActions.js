import { GET_POPULAR, GET_MOVIE_DETAILS, GET_VIDEO } from "./types.js";
import axios from "axios";

// const URL = "http://localhost:3000/movies";
const URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=59f1e4f28c3fd33b83142a88610cc03e&language=en-US&page=1";

export const getPopular = () => async dispatch => {
  await axios.get(`${URL}`).then(res => {
    // console.log(res.data);
    dispatch({
      type: GET_POPULAR,
      payload: res.data
    });
  });
};

export const getMovieDetails = id => async dispatch => {
  console.log(
    `https://api.themoviedb.org/3/movie/${id}?api_key=59f1e4f28c3fd33b83142a88610cc03e&language=en-US`
  );
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
