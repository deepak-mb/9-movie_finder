import { GET_POPULAR, GET_MOVIE_DETAILS } from "../actions/types";

const initialState = {
  page: "",
  movies: [],
  total_pages: "",
  total_results: "",
  movieDetails: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_POPULAR:
      // console.log(action.payload);
      return {
        ...state,
        page: action.payload.page,
        movies: action.payload.results,
        total_pages: action.payload.total_pages,
        total_results: action.payload.total_results
      };

    case GET_MOVIE_DETAILS:
      console.log(action.payload);
      return {
        ...state,
        movieDetails: action.payload
      };

    default:
      return state;
  }
}
