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
import "firebase/auth";
import * as Firebase from "firebase/app";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd
} from "@react-firebase/auth";
import FirebaseConfig from './firebaseConfig';

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
    <FirebaseAuthProvider firebase={Firebase} {...FirebaseConfig}>
      <Router>
        <div className="app">
          <Header />
          <main className="meat">
            <div className="meat__container">
              <FirebaseAuthConsumer>
                {({ isSignedIn, user, providerId }) => {
                  return (
                    <pre>
                      {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
                    </pre>
                  );
                }}
              </FirebaseAuthConsumer>
              <button
                onClick={() => {
                  const googleAuthProvider = new Firebase.auth.GoogleAuthProvider();
                  Firebase.auth().signInWithPopup(googleAuthProvider);
                }}
              >
                Sign In with Google
              </button>
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
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/privacy">
                  <Privacy />
                </Route>
                <Route path="/accessibility">
                  <Accessibility />
                </Route>
                <Route path="/contact">
                  <Contact />
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
    </FirebaseAuthProvider>
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

function About() {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
}

function Privacy() {
  return (
    <div>
      <h1>Privacy Statement</h1>
    </div>
  );
}

function Accessibility() {
  return (
    <div>
      <h1>Accessibility</h1>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
    </div>
  );
}

export default App;
