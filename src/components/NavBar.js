import { Component } from "react";
import '../styles/navbar.css'

export default class NavBar extends Component {
    render() {
        return (
        <nav id="navbar">
            <a href="/" className="logoHolder">
                <img id="logo" src="/Twinkle Logo.png"></img>
                <span className="gradientText">Twinkle</span>
            </a>
            <div className="navContent">
                <ul id="nav-list">
                    <li className="navhref"><a>Download</a></li>
                    <li className="navhref"><a>Why Twinkle?</a></li>
                    <li className="navhref"><a>Go with us</a></li>
                    <li className="navhref"><a>Support</a></li>
                </ul>
                <div><a href="/beAPartner" className="navLogin">Be Our Partner</a></div>
            </div>
        </nav>);
    }
}