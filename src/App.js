import React from 'react';
import imgCactus from './img/cactus.jpeg';
import imgMonstera from './img/monstera.jpeg';
import imgRubberPlant from './img/rubberplant.jpeg';
import imgSnakePlant from './img/snakeplant.jpeg';
import './scss/index.scss';
import Header from './Header';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const plantFam = [
  {
    name: 'Cactus',
    img: imgCactus,
    lastUpdated: 'July 3, 2020',
  },
  {
    name: 'Monstera',
    img: imgMonstera,
    lastUpdated: 'June 29, 2020',
  },
  {
    name: 'Rubber Plant',
    img: imgRubberPlant,
    lastUpdated: 'June 29, 2020',
  },
  {
    name: 'Senseveria',
    img: imgSnakePlant,
    lastUpdated: 'July 3, 2020',
  }
];

function PlantList(props) {
  const plants = props.plants;
  return plants.map((plant) => 
    <article>
      <a href="#">
        <img src={plant.img} alt={plant.name} />
        <h1>
          { plant.name }
        </h1>
      </a>
    </article>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="meat">
          <div className="meat__container">
            <Switch>
              <Route path="/plants">
                <Plants />
              </Route>
              <Route path="/feed">
                <Feed />
              </Route>
              <Route path="/account">
                <Account />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function Plants() {
  return (
    <div>
      <h1>
        The Fam
      </h1>

      <div className="plantList">
        <PlantList plants={plantFam} />
      </div>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

function Feed() {
  return (
    <div>
      <h1>Feed</h1>
    </div>
  );
}

function Account() {
  return (
    <div>
      <h1>Account</h1>
    </div>
  );
}

export default App;
