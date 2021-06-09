import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import NavBar from './components/NavBar'
import Cover from './components/Cover'
import Footer from './components/Footer'
import Devices from './components/Devices'
import Services from './components/Services';
import WhyTwinkle from './components/whyTwinkle';
import Partner from './components/Partner';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route path="/beAPartner">
            <div>
              <Partner />
            </div>
          </Route>
          <Route path="/">
            <div style={{ backgroundColor: "#f9f9f9" }}>
              <Cover />
              <WhyTwinkle />
              <Services />
              <Devices />
            </div>
          </Route>
        </Switch>
        <Footer />
      </Router>
    )
  }
}

export default App;
