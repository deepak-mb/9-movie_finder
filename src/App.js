import React, { Component } from "react";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Navbar from "./components/layout/Navbar";
import Movies from "./components/movies/Movies";
import MovieDetails from "./components/movies/MovieDetails";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <div className="">
              <Navbar />
              <Switch>
                <Route exact path="/" component={Movies} />
                <Route
                  exact
                  path="/moviedetails/:id"
                  component={MovieDetails}
                />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
