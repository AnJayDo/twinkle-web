import { Component } from "react";

//Items
import devicesSVG from "../svg/undraw_web_devices_ad58.svg";

//Css
import "../styles/devices.css";

export default class Cover extends Component {
  render() {
    return (
      <section id="devices">
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
        <div className="availableDevices">
            <h4 >Reliable tech for saving time</h4>
            <p>Free to booking your beauty-care schedule with your phone, your tablet or even your PC.<br></br> Or manage your salon with your small handy phone.</p>
            <img src={devicesSVG}></img>
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

        <div className="downloadBaseOnDevice">
          <div>
            <div aria-hidden="true" className="sparklesContainer-3Fo_ua">
              <img
                src="/assets/a188414ce83f2454b9d71a47c3d95909.svg"
                alt=""
              ></img>
            </div>
            <h4 className="readyJourney">Ready to start your journey?</h4>
            <a className="downloadButtonDevices">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g>
                  <path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"></path>
                  <path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"></path>
                </g>
              </svg>
              <span>Download</span>
            </a>
          </div>
        </div>
      </section>
    );
  }
}
