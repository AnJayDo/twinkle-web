import { Component } from "react";

//Items
import queueSVG from '../svg/undraw_Queue_j6ij.svg'
import mobileAppSVG from '../svg/undraw_Mobile_app_re_catg.svg'
import appleStore from '../svg/AppleStore.svg'
import googleStore from '../svg/GoogleStore.svg'
//Css
import "../styles/cover.css"

export default class Cover extends Component {
    render() {
        return (
          <section id="cover">
            <div className="coverContent">
                <img src={mobileAppSVG}></img>
                <div className="coverText">
                    <h1 className="gradientText">
                        Place to create beauty care schedule
                    </h1>
                    <p className="coverWords">
                        Don't waste your precious time waiting at the spa<br></br>
                        Try Twinkle and finish the job comfortably and then head over to
                        the relaxation salon<br></br>
                        <b>Free to download here</b>
                    </p>
                    <div className="storeContainer">
                        <img src={appleStore}></img>
                        <img src={googleStore}></img>
                    </div>
                </div>
                <img src={queueSVG}></img>
            </div>
            {/* <svg
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
            </svg> */}
          </section>
        );
    }
}