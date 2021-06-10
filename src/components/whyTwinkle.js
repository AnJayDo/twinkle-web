import { Component } from "react";

//Items
import barberSVG from '../svg/undraw_barber_3uel.svg'

//Css
import "../styles/whyTwinkle.css";

export default class WhyTwinkle extends Component {
  render() {
    return (
      <section id="why">
        <svg
          className="invertedWave"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            className="wavePath-haxJK1"
            d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z"
            fill="currentColor"
          ></path>
        </svg>
        <div className="whyContent">
            <div className="halfWhyContent">
                <div className="whyText">
                    <h4>Why Twinkle?</h4>
                    <p>Twinkle will help busy people at work can easily choose the time to go to the salon according to their schedule. Easily to choose the salon, staff, and services for themselves.
                    <br/>Twinkle will not only help you, but it can help many people like you save time for booking and avoid crowded waiting during this covid-19 epidemic.
                    </p>
                </div>
            </div>
            <div className="halfWhyContent"><img src={barberSVG}></img></div>
        </div>
        <svg
          className="wave"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            className="wavePath-haxJK1"
            d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z"
            fill="currentColor"
          ></path>
        </svg>
      </section>
    );
  }
}
