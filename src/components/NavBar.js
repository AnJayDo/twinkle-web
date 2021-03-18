import { Component } from "react";
import '../styles/navbar.css'

export default class NavBar extends Component {
    render() {
        return (
        <nav id="navbar">
            <div className="logoHolder">
                <img id="logo" src="/Twinkle Logo.png"></img>
                <span className="gradientText">Twinkle</span>
            </div>
            <div className="navContent">
                <ul id="nav-list">
                    <li className="navhref"><a>Download</a></li>
                    <li className="navhref"><a>Why Twinkle?</a></li>
                    <li className="navhref"><a>Go with us</a></li>
                    <li className="navhref"><a>Support</a></li>
                </ul>
                <div><a className="navLogin">Login</a></div>
            </div>
        </nav>);
    }
}