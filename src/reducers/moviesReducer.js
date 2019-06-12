import {
  GET_POPULAR,
  GET_LATEST,
  GET_NOW_PLAYING,
  GET_TOP_RATED,
  GET_UPCOMING,
  GET_MOVIE_DETAILS,
  GET_VIDEO
} from "../actions/types";

const initialState = {
  page: "",
  popularmovies: [],
  latestmovies: [],
  nowplaying: [],
  toprated: [],
  upcoming: [],
  total_pages: "",
  total_results: "",
  movieDetails: {},
  videoDetails: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_POPULAR:
      // console.log(action.payload);
      return {
        ...state,
        page: action.payload.page,
        popularmovies: action.payload.results,
        total_pages: action.payload.total_pages,
        total_results: action.payload.total_results
      };

    case GET_LATEST:
      // console.log(action.payload);
      return {
        ...state,
        page: action.payload.page,
        latestmovies: action.payload.results,
        total_pages: action.payload.total_pages,
        total_results: action.payload.total_results
      };

    case GET_NOW_PLAYING:
      // console.log(action.payload);
      return {
        ...state,
        page: action.payload.page,
        nowplaying: action.payload.results,
        total_pages: action.payload.total_pages,
        total_results: action.payload.total_results
      };

    case GET_TOP_RATED:
      // console.log(action.payload);
      return {
        ...state,
        page: action.payload.page,
        toprated: action.payload.results,
        total_pages: action.payload.total_pages,
        total_results: action.payload.total_results
      };

    case GET_UPCOMING:
      // console.log(action.payload);
      return {
        ...state,
        page: action.payload.page,
        upcoming: action.payload.results,
        total_pages: action.payload.total_pages,
        total_results: action.payload.total_results
      };

    case GET_MOVIE_DETAILS:
      console.log(action.payload);
      return {
        ...state,
        movieDetails: action.payload
      };

    case GET_VIDEO:
      console.log(action.payload);
      return {
        ...state,
        videoDetails: action.payload
      };
    default:
      return state;
  }
}
