import React from 'react';

import './styles/main_style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// Components
import Actors from './components/Actors'
import Movies from './components/Movies'

function Main() {
  return (
    <div className="Main">
      <input type="checkbox" id="Check"/>
      <label htmlFor="Check">
        <ion-icon name="menu" id="Btn"></ion-icon>
        <ion-icon name="close" id="Cancel"></ion-icon>
      </label>
      <div className="Sidebar">
        <header>Movie Manager</header>
        <ul>
          <li><a href="/Actors"><ion-icon name="home"></ion-icon>Actors</a></li>
          <li><a href="/Movies"><ion-icon name="videocam"></ion-icon>Movies</a></li>
          <li><a href="https://google.com"><ion-icon name="information-circle"></ion-icon>More</a></li>
        </ul>
      </div>
      <section>
      <Router>
        <Switch>
        <Route path="/Actors">
          <Actors />
        </Route>
        <Route path="/Movies">
          <Movies />
        </Route>
        </Switch>
      </Router>
      </section>
    </div>
  );
}

export default Main;
