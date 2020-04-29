import React from 'react';

import './styles/main_style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

// Components
import Entry from './components/Entry'
import Actors from './components/Actors'
import Movies from './components/Movies'

function Main() {
  return (
    <div className="Main">
      <Router>
        <input type="checkbox" id="Check"/>
        <label htmlFor="Check">
          <ion-icon name="menu" id="Btn"></ion-icon>
          <ion-icon name="close" id="Cancel"></ion-icon>
        </label>
        <div className="Sidebar">
          <header>Movie Manager</header>
          <ul>
            <li><Link to="/"><ion-icon name="home"></ion-icon>Home</Link></li>
            <li><Link to="/Actors"><ion-icon name="people"></ion-icon>Actors</Link></li>
            <li><Link to="/Movies"><ion-icon name="videocam"></ion-icon>Movies</Link></li>
          </ul>
        </div>
        <section>
        <Switch>
          <Route path="/Actors">
            <Actors />
          </Route>
          <Route path="/Movies">
            <Movies />
          </Route>
          <Route path="/">
            <Entry />
          </Route>
        </Switch>
        </section>
      </Router>
    </div>
  );
}

export default Main;
