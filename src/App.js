import React from 'react';
import imgCactus from './img/cactus.jpeg';
import imgMonstera from './img/monstera.jpeg';
import imgRubberPlant from './img/rubberplant.jpeg';
import imgSnakePlant from './img/snakeplant.jpeg';
import './scss/index.scss';
import Header from './Header';
import Footer from './Footer';

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
      <img src={plant.img} alt={plant.name} />
      <h1>
        { plant.name }
      </h1>
    </article>
  );
}

function App() {
  return (
    <div className="app">
      <Header />
      <main className="meat">
        <div className="meat__container">
          <h1>
            The Fam
          </h1>

          <div className="plantList">
            <PlantList plants={plantFam} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
