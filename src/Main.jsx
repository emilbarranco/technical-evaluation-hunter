import React from 'react';
import './styles/main_style.css';

function Main() {
  return (
    <div className="Main">
      <input type="checkbox" id="Check"/>
      <label for="Check">
        <ion-icon name="menu" id="Btn"></ion-icon>
        <ion-icon name="close" id="Cancel"></ion-icon>
      </label>
      <div className="Sidebar">
        <header>Movie Manager</header>
        <ul>
          <li><a href="#"><ion-icon name="home"></ion-icon>Actors</a></li>
          <li><a href="#"><ion-icon name="videocam"></ion-icon>Movies</a></li>
          <li><a href="#"><ion-icon name="information-circle"></ion-icon>More</a></li>
        </ul>
      </div>
      <section>
        <h1>Dashboard</h1>
      </section>
    </div>
  );
}

export default Main;
