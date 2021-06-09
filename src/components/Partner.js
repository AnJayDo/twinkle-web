import React, { Component } from "react";
import  { Redirect } from 'react-router-dom'

import referralSVG from '../svg/undraw_referral_4ki4.svg'

//Css
import "../styles/partner.css";

export default class Partner extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            address: "",
            email: "",
            phoneNumber: ""
        }
    }
    onPressSubmit = async () => {
        // let result = await fetch("149.28.137.174:5000/manager/createStore", {
        //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
        //     mode: 'cors', // no-cors, *cors, same-origin
        //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //     credentials: 'same-origin', // include, *same-origin, omit
        //     headers: {
        //       'Content-Type': 'application/json'
        //       // 'Content-Type': 'application/x-www-form-urlencoded',
        //     },
        //     redirect: 'follow', // manual, *follow, error
        //     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        //     body: JSON.stringify(this.state) 
        // }).then(res => res.json())
        // if(result.status) return <Redirect to="/" />
        alert('Your Register is Success. Wait for our email.');
    }
    render() {
        return (
            <section id="partner">
                <div className="signUpSVG">
                    <img src={referralSVG}></img>
                </div>
                <form onSubmit={this.onPressSubmit}  className="formSignUp">
                    <h3 className="gradientText">BECOME OUR PARTNER</h3>
                    <div>
                        <label>Name</label><br />
                        <input type="text" placeholder="Nguyen Van B" onChange={(event) => this.setState({name: event.target.value})}></input>
                    </div>
                    <div>
                        <label>address</label><br />
                        <input type="text" placeholder="123 Nguyen Van Linh, Danang City" onChange={(event) => this.setState({address: event.target.value})}></input>
                    </div>
                    <div>
                        <label>Email</label><br />
                        <input type="text" placeholder="cuahang@email.com" onChange={(event) => this.setState({email: event.target.value})}></input>
                    </div>
                    <div>
                        <label>Phone Number</label><br />
                        <input type="text" placeholder="0965897654" onChange={(event) => this.setState({phoneNumber: event.target.value})}></input>
                    </div>
                    <button type="submit" className="navLogin" style={{border: 'none'}}>Submit</button>
                </form>
            </section>
        );
    }
}
