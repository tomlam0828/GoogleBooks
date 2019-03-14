import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Saved from "./components/pages/saved";
import Search from "./components/pages/search";
import Nav from "./components/Nav";
import Title from "./components/Title";
// import API from "./utils/API"


class App extends Component {

  render() {
    return(
      <BrowserRouter>
        <div>
          <Nav />
          <Title />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/saved" component={Saved} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
