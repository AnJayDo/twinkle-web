import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import NavBar from './components/NavBar'
import Cover from './components/Cover'
import Footer from './components/Footer'
import Devices from './components/Devices'
import Services from './components/Services';
import WhyTwinkle from './components/whyTwinkle';

class App extends Component {
  render() {
    return(
      <div style={{backgroundColor: "#f9f9f9"}}>
        <NavBar />
        <Cover />
        <WhyTwinkle />
        <Services />
        <Devices />
        <Footer />
      </div>
    )
  }
}

export default App;
