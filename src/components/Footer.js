import { Component } from "react";

//Items
import queueSVG from "../svg/undraw_Queue_j6ij.svg";
import mobileAppSVG from "../svg/undraw_Mobile_app_re_catg.svg";

//Css
import "../styles/footer.css";

export default class Cover extends Component {
  render() {
    return (
      <section id="footer">
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
        <div className="footerContent">
          <div className="contentRow">
            <div className="contentColumn">
              <div className="logoHolder">
                <img id="logo" src="/Twinkle Logo.png"></img>
                <span className="gradientText">Twinkle</span>
              </div>
              <div className="iconsContainer">
                <a
                  data-qa="fb-icon-link"
                  href="https://www.facebook.com/Fresha-1504479806470099/"
                  className="iconItem"
                >
                  <svg
                    className="Icon-c98r68-0 ipWlqP Icon-c98r68-1 hFwlVf"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none" fillRule="evenodd">
                      <path
                        d="M9.032 23L9 13H5V9h4V6.5C9 2.789 11.298 1 14.61 1c1.585 0 2.948.118 3.345.17v3.88H15.66c-1.8 0-2.15.856-2.15 2.112V9h5.241l-2 4h-3.24v10H9.032z"
                        fill="#DBDCE1"
                      ></path>
                    </g>
                  </svg>
                </a>
                <a
                  data-qa="twitter-icon-link"
                  href="https://twitter.com/"
                  className="iconItem"
                >
                  <svg
                    className="Icon-c98r68-0 ipWlqP Icon-c98r68-1 hFwlVf"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none" fillRule="evenodd">
                      <path
                        d="M24 4.6c-.9.4-1.8.7-2.8.8 1-.6 1.8-1.6 2.2-2.7-1 .6-2 1-3.1 1.2-.9-1-2.2-1.6-3.6-1.6-2.7 0-4.9 2.2-4.9 4.9 0 .4 0 .8.1 1.1-4.2-.2-7.8-2.2-10.2-5.2-.5.8-.7 1.6-.7 2.5 0 1.7.9 3.2 2.2 4.1-.8 0-1.6-.2-2.2-.6v.1c0 2.4 1.7 4.4 3.9 4.8-.4.1-.8.2-1.3.2-.3 0-.6 0-.9-.1.6 2 2.4 3.4 4.6 3.4-1.7 1.3-3.8 2.1-6.1 2.1-.4 0-.8 0-1.2-.1 2.2 1.4 4.8 2.2 7.5 2.2 9.1 0 14-7.5 14-14v-.6c1-.7 1.8-1.6 2.5-2.5z"
                        fill="#DBDCE1"
                      ></path>
                    </g>
                  </svg>
                </a>
                <a
                  data-qa="linkedin-icon-link"
                  href="https://www.linkedin.com/"
                  className="iconItem"
                >
                  <svg
                    className="Icon-c98r68-0 ipWlqP Icon-c98r68-1 hFwlVf"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none" fillRule="evenodd">
                      <path
                        d="M23 0H1C.4 0 0 .4 0 1v22c0 .6.4 1 1 1h22c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1zM7.1 20.5H3.6V9h3.6v11.5h-.1zM5.3 7.4c-1.1 0-2.1-.9-2.1-2.1 0-1.1.9-2.1 2.1-2.1 1.1 0 2.1.9 2.1 2.1 0 1.2-.9 2.1-2.1 2.1zm15.2 13.1h-3.6v-5.6c0-1.3 0-3-1.8-3-1.9 0-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2z"
                        fill="#DBDCE1"
                      ></path>
                    </g>
                  </svg>
                </a>
                <a
                  data-qa="instagram-icon-link"
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="iconItem"
                >
                  <svg
                    className="Icon-c98r68-0 ipWlqP Icon-c98r68-1 hFwlVf"
                    viewBox="0 0 24 24"
                  >
                    <g fill="#DBDCE1">
                      <path d="M12 2.162c3.204 0 3.584.012 4.849.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311 1.265-.058 1.645-.07 4.849-.07M12 0C8.741 0 8.332.014 7.052.072c-1.95.089-3.663.567-5.038 1.942C.639 3.389.161 5.102.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.089 1.95.567 3.663 1.942 5.038 1.375 1.375 3.088 1.853 5.038 1.942C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 1.95-.089 3.663-.567 5.038-1.942 1.375-1.375 1.853-3.088 1.942-5.038.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.089-1.95-.567-3.663-1.942-5.038C20.611.639 18.898.161 16.948.072 15.668.014 15.259 0 12 0z"></path>
                      <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z"></path>
                      <circle cx="18.406" cy="5.594" r="1.44"></circle>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
            <div className="contentColumn">
              <p className="columnHeadtext">About Twinkle</p>
              <a
                data-qa="footer-careers"
                className="secondaryLink"
                href="/careers"
              >
                <p className="Text-st1i2q-0 hYsgdw">Careers at Twinkle</p>
              </a>
              <a
                data-qa="footer-customer-support"
                className="secondaryLink"
                href="/contact-us"
              >
                <p className="Text-st1i2q-0 hYsgdw">Customer support</p>
              </a>
            </div>
            <div className="contentColumn">
              <p className="columnHeadtext">For business</p>
              <a
                data-qa="footer-list-business"
                className="secondaryLink"
                href="/for-business"
              >
                <p className="Text-st1i2q-0 hYsgdw">For Partners</p>
              </a>
              <a
                data-qa="footer-pricing"
                className="secondaryLink"
                href="/pricing"
              >
                <p className="Text-st1i2q-0 hYsgdw">Pricing</p>
              </a>
              <a
                data-qa="footer-partners-support"
                className="secondaryLink"
                href="https://support.fresha.com/"
                target="_blank"
                rel="noreferrer"
              >
                <p className="Text-st1i2q-0 hYsgdw">Support for partners</p>
              </a>
            </div>
            <div className="contentColumn">
              <p className="columnHeadtext">Legal</p>
              <a
                data-qa="footer-booking-terms"
                className="secondaryLink"
                href="https://www.fresha.com/docs/legal-clauses-booking-terms_v3.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <p className="Text-st1i2q-0 hYsgdw">Booking terms</p>
              </a>
              <a
                data-qa="footer-privacy-policy"
                className="secondaryLink"
                href="https://www.fresha.com/docs/legal-clauses-privacy.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <p className="Text-st1i2q-0 hYsgdw">Privacy policy</p>
              </a>
              <a
                data-qa="footer-website-terms"
                className="secondaryLink"
                href="https://www.fresha.com/docs/legal-clauses-website-terms_v2.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <p className="Text-st1i2q-0 hYsgdw">Website terms</p>
              </a>
            </div>
            <div className="contentColumn">
              <p className="columnHeadtext">Free mobile app</p>
              <a
                data-qa="footer-download-app"
                className="downloadButton"
                href="/download-app"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="icon-nuGd5b"
                >
                  <g fill="currentColor">
                    <path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"></path>
                    <path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"></path>
                  </g>
                </svg>
                <div className="downloadButtonText">Download app</div>
              </a>
            </div>
          </div>
          <div className="footerLine"></div>
          <div className="companyContent">
            <p>© 2021 Twinkle.com Ltd</p>
          </div>
        </div>
      </section>
    );
  }
}
