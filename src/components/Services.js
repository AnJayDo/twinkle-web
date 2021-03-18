import { Component } from "react";

//Css
import '../styles/services.css'

export default class Services extends Component {
  render() {
    return (
      <section id="services">
        <div className="servicesContent">
          <div>
            <div className="blinkImage">
              <img
                src="/assets/a188414ce83f2454b9d71a47c3d95909.svg"
                alt=""
              ></img>
            </div>
            <h4 className="serviceHeadtext">Many services for you to choose</h4>
            <div className="serviceContainer">
                <div className="serviceItem" style={{backgroundImage: "url('/Beauty Salon.jpg')"}}>
                    <div className="serviceItemInner">
                        <p style={{marginTop: "238px"}}>Beauty Salon</p>
                    </div>
                </div>
                <div className="serviceItem" style={{backgroundImage: "url('/Hair Salon.jpg')"}}>
                    <div className="serviceItemInner">
                        <p style={{marginTop: "238px"}}>Hair Salon</p>
                    </div>
                </div>
                <div className="serviceItem" style={{backgroundImage: "url('/Massage and Spa.jpg')"}}>
                    <div className="serviceItemInner">
                        <p style={{marginTop: "238px"}}>Massage & Spa</p>
                    </div>
                </div>
                <div className="serviceItem" style={{backgroundImage: "url('/Nail Salon.jpg')"}}>
                    <div className="serviceItemInner">
                        <p style={{marginTop: "238px"}}>Nail Salon</p>
                    </div>
                </div>
                <div className="serviceItem" style={{backgroundImage: "url('/Tattoo and Piercing.jpg')"}}>
                    <div className="serviceItemInner">
                        <p style={{marginTop: "238px"}}>Tattoo & Piercing</p>
                    </div>
                </div>
                <div className="serviceItem" style={{backgroundImage: "url('/Barbershop.jpg')"}}>
                    <div className="serviceItemInner">
                        <p style={{marginTop: "238px"}}>Barbershop</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
