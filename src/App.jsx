import React, { useState } from "react";
import "./App.css";
import buisness1 from "./assets/business1.png";
import buisness2 from "./assets/business2.png";
import buisness3 from "./assets/business3.png";
import buisness4 from "./assets/business4.png";

import ButtonWIthLeftIcon from "./Components/ButtonWithLeftIcon/ButtonWIthLeftIcon";
import Pagination from "./Components/Pagination/Pagination";
const App = () => {
  const [tabContent, setTabContent] = useState(1);
  return (
    <section id="tab-area" className="container">
      <h1 className="header">
        SAFEGUARD YOUR BUSINESS WITH ALL-IN-ONE CYBERSECURITY
      </h1>
      <div style={{ marginTop: "40px" }}></div>
      <div className="tabs-wrapper">
        <button
          className={`tab ${tabContent == 1 && "tab1"}`}
          onClick={() => setTabContent(1)}
        >
          Risk Assessment
        </button>

        <button
          className={`tab ${tabContent == 2 && "tab2"}`}
          onClick={() => setTabContent(2)}
        >
          Incident Response
        </button>

        <button
          className={`tab ${tabContent == 3 && "tab3"}`}
          onClick={() => setTabContent(3)}
        >
          Security Compliance
        </button>

        <button
          className={`tab ${tabContent == 4 && "tab4"}`}
          onClick={() => setTabContent(4)}
        >
          Managed Solution
        </button>
      </div>
      <div style={{ marginTop: "40px" }}></div>
      <div
        className="content content1"
        style={{ display: tabContent == 1 ? "flex" : "none" }}
      >
        <div className="left">
          <h2>Against Evolving Threats </h2>
          <p>
            Get a clear picture of your organization’s security posture and how
            prepared you are against evolving cyber threats before malicious
            entities, and apply customized recommendations to improve your
            security program.
          </p>
          <ButtonWIthLeftIcon
            btnText="Identify Cyber Risks Today"
            color="#e4202c"
          />
        </div>
        <div className="right">
          <div className="img-box">
            <img src={buisness1} alt="img" />
            <div className="afterdot-tag-wrapper  afterdot-tag-wrapper1">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.2502 8.75005C13.7502 11.25 11.8652 13.604 9.22022 14.13C7.93022 14.3869 6.59204 14.2303 5.39623 13.6824C4.20042 13.1346 3.20794 12.2234 2.56012 11.0786C1.91229 9.93389 1.64214 8.61393 1.78813 7.30672C1.93413 5.99951 2.48882 4.77167 3.37322 3.79805C5.18722 1.80005 8.25022 1.25005 10.7502 2.25005"
                  stroke="#e4202c"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M5.75 7.75L8.25 10.25L14.25 3.75"
                  stroke="#e4202c"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span>SMB Solution</span>
              <div className="tag-dot-wrapper">
                <div className="tag-dot"></div>
              </div>
            </div>
            <div className="beforedot-tag-wrapper beforedot-tag-wrapper2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.2502 8.75005C13.7502 11.25 11.8652 13.604 9.22022 14.13C7.93022 14.3869 6.59204 14.2303 5.39623 13.6824C4.20042 13.1346 3.20794 12.2234 2.56012 11.0786C1.91229 9.93389 1.64214 8.61393 1.78813 7.30672C1.93413 5.99951 2.48882 4.77167 3.37322 3.79805C5.18722 1.80005 8.25022 1.25005 10.7502 2.25005"
                  stroke="#e4202c"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M5.75 7.75L8.25 10.25L14.25 3.75"
                  stroke="#e4202c"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span>Enterprise Security</span>
              <div className="tag-dot-wrapper">
                <div className="tag-dot"></div>
              </div>
            </div>
            <div className="afterdot-tag-wrapper afterdot-tag-wrapper3">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.2502 8.75005C13.7502 11.25 11.8652 13.604 9.22022 14.13C7.93022 14.3869 6.59204 14.2303 5.39623 13.6824C4.20042 13.1346 3.20794 12.2234 2.56012 11.0786C1.91229 9.93389 1.64214 8.61393 1.78813 7.30672C1.93413 5.99951 2.48882 4.77167 3.37322 3.79805C5.18722 1.80005 8.25022 1.25005 10.7502 2.25005"
                  stroke="#e4202c"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M5.75 7.75L8.25 10.25L14.25 3.75"
                  stroke="#e4202c"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span>Turky Security Solution</span>
              <div className="tag-dot-wrapper">
                <div className="tag-dot"></div>
              </div>
            </div>
            <div className="beforedot-tag-wrapper beforedot-tag-wrapper4">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.2502 8.75005C13.7502 11.25 11.8652 13.604 9.22022 14.13C7.93022 14.3869 6.59204 14.2303 5.39623 13.6824C4.20042 13.1346 3.20794 12.2234 2.56012 11.0786C1.91229 9.93389 1.64214 8.61393 1.78813 7.30672C1.93413 5.99951 2.48882 4.77167 3.37322 3.79805C5.18722 1.80005 8.25022 1.25005 10.7502 2.25005"
                  stroke="#e4202c"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M5.75 7.75L8.25 10.25L14.25 3.75"
                  stroke="#e4202c"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span>SMB Solution</span>
              <div className="tag-dot-wrapper">
                <div className="tag-dot"></div>
              </div>
            </div>
            <div className="afterdot-tag-wrapper afterdot-tag-wrapper5">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.2502 8.75005C13.7502 11.25 11.8652 13.604 9.22022 14.13C7.93022 14.3869 6.59204 14.2303 5.39623 13.6824C4.20042 13.1346 3.20794 12.2234 2.56012 11.0786C1.91229 9.93389 1.64214 8.61393 1.78813 7.30672C1.93413 5.99951 2.48882 4.77167 3.37322 3.79805C5.18722 1.80005 8.25022 1.25005 10.7502 2.25005"
                  stroke="#e4202c"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M5.75 7.75L8.25 10.25L14.25 3.75"
                  stroke="#e4202c"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span>Turky Security Solution</span>
              <div className="tag-dot-wrapper">
                <div className="tag-dot"></div>
              </div>
            </div>
            <div className="beforedot-tag-wrapper beforedot-tag-wrapper6">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.2502 8.75005C13.7502 11.25 11.8652 13.604 9.22022 14.13C7.93022 14.3869 6.59204 14.2303 5.39623 13.6824C4.20042 13.1346 3.20794 12.2234 2.56012 11.0786C1.91229 9.93389 1.64214 8.61393 1.78813 7.30672C1.93413 5.99951 2.48882 4.77167 3.37322 3.79805C5.18722 1.80005 8.25022 1.25005 10.7502 2.25005"
                  stroke="#e4202c"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M5.75 7.75L8.25 10.25L14.25 3.75"
                  stroke="#e4202c"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span>SMB Solution</span>
              <div className="tag-dot-wrapper">
                <div className="tag-dot"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="content content2"
        style={{ display: tabContent == 2 ? "flex" : "none" }}
      >
        <div className="left">
          <h2>Mitigate Future Cyber Risk</h2>
          <p>
            Every second counts during a cyberattack. Understand the situation,
            take control, and quickly contain, remediate, and eradicate the
            attack with our proven methodology, expert team, and world-class
            threat intelligence.
          </p>
          <ButtonWIthLeftIcon
            btnText="Mitigate Cyberattacks Now"
            color="#FFC922"
          />
        </div>
        <div className="right">
          <div className="img-box">
            <img src={buisness2} alt="img" />
            <div className="afterdot-tag-wrapper  afterdot-tag-wrapper1">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.2502 8.75005C13.7502 11.25 11.8652 13.604 9.22022 14.13C7.93022 14.3869 6.59204 14.2303 5.39623 13.6824C4.20042 13.1346 3.20794 12.2234 2.56012 11.0786C1.91229 9.93389 1.64214 8.61393 1.78813 7.30672C1.93413 5.99951 2.48882 4.77167 3.37322 3.79805C5.18722 1.80005 8.25022 1.25005 10.7502 2.25005"
                  stroke="#ffc922"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M5.75 7.75L8.25 10.25L14.25 3.75"
                  stroke="#ffc922"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span>SMB Solution</span>
              <div className="tag-dot-wrapper">
                <div className="tag-dot"></div>
              </div>
            </div>
            <div className="beforedot-tag-wrapper beforedot-tag-wrapper2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.2502 8.75005C13.7502 11.25 11.8652 13.604 9.22022 14.13C7.93022 14.3869 6.59204 14.2303 5.39623 13.6824C4.20042 13.1346 3.20794 12.2234 2.56012 11.0786C1.91229 9.93389 1.64214 8.61393 1.78813 7.30672C1.93413 5.99951 2.48882 4.77167 3.37322 3.79805C5.18722 1.80005 8.25022 1.25005 10.7502 2.25005"
                  stroke="#ffc922"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M5.75 7.75L8.25 10.25L14.25 3.75"
                  stroke="#ffc922"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span>Enterprise Security</span>
              <div className="tag-dot-wrapper">
                <div className="tag-dot"></div>
              </div>
            </div>
            <div className="afterdot-tag-wrapper afterdot-tag-wrapper3">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.2502 8.75005C13.7502 11.25 11.8652 13.604 9.22022 14.13C7.93022 14.3869 6.59204 14.2303 5.39623 13.6824C4.20042 13.1346 3.20794 12.2234 2.56012 11.0786C1.91229 9.93389 1.64214 8.61393 1.78813 7.30672C1.93413 5.99951 2.48882 4.77167 3.37322 3.79805C5.18722 1.80005 8.25022 1.25005 10.7502 2.25005"
                  stroke="#ffc922"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M5.75 7.75L8.25 10.25L14.25 3.75"
                  stroke="#ffc922"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span>Turky Security Solution</span>
              <div className="tag-dot-wrapper">
                <div className="tag-dot"></div>
              </div>
            </div>
            <div className="beforedot-tag-wrapper beforedot-tag-wrapper4">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.2502 8.75005C13.7502 11.25 11.8652 13.604 9.22022 14.13C7.93022 14.3869 6.59204 14.2303 5.39623 13.6824C4.20042 13.1346 3.20794 12.2234 2.56012 11.0786C1.91229 9.93389 1.64214 8.61393 1.78813 7.30672C1.93413 5.99951 2.48882 4.77167 3.37322 3.79805C5.18722 1.80005 8.25022 1.25005 10.7502 2.25005"
                  stroke="#ffc922"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M5.75 7.75L8.25 10.25L14.25 3.75"
                  stroke="#ffc922"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span>SMB Solution</span>
              <div className="tag-dot-wrapper">
                <div className="tag-dot"></div>
              </div>
            </div>
            <div className="afterdot-tag-wrapper afterdot-tag-wrapper5">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.2502 8.75005C13.7502 11.25 11.8652 13.604 9.22022 14.13C7.93022 14.3869 6.59204 14.2303 5.39623 13.6824C4.20042 13.1346 3.20794 12.2234 2.56012 11.0786C1.91229 9.93389 1.64214 8.61393 1.78813 7.30672C1.93413 5.99951 2.48882 4.77167 3.37322 3.79805C5.18722 1.80005 8.25022 1.25005 10.7502 2.25005"
                  stroke="#ffc922"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M5.75 7.75L8.25 10.25L14.25 3.75"
                  stroke="#ffc922"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span>Turky Security Solution</span>
              <div className="tag-dot-wrapper">
                <div className="tag-dot"></div>
              </div>
            </div>
            <div className="beforedot-tag-wrapper beforedot-tag-wrapper6">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.2502 8.75005C13.7502 11.25 11.8652 13.604 9.22022 14.13C7.93022 14.3869 6.59204 14.2303 5.39623 13.6824C4.20042 13.1346 3.20794 12.2234 2.56012 11.0786C1.91229 9.93389 1.64214 8.61393 1.78813 7.30672C1.93413 5.99951 2.48882 4.77167 3.37322 3.79805C5.18722 1.80005 8.25022 1.25005 10.7502 2.25005"
                  stroke="#ffc922"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M5.75 7.75L8.25 10.25L14.25 3.75"
                  stroke="#ffc922"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span>SMB Solution</span>
              <div className="tag-dot-wrapper">
                <div className="tag-dot"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="content content3"
        style={{ display: tabContent == 3 ? "flex" : "none" }}
      >
        <div className="left">
          <h2>Cybersecurity Compliance Consultation</h2>
          <p>
            Cybersecurity compliance can be confusing for most organizations.
            Get expert cybersecurity compliance consulting and find out the
            specific regulatory compliance requirements for your organization,
            your geographic location, and your company.
          </p>
          <ButtonWIthLeftIcon
            btnText="Become Compliant Today"
            color="#007aff"
          />
        </div>
        <div className="right">
          <div className="img-box">
            <img src={buisness3} alt="img" />
            <div className="afterdot-tag-wrapper  afterdot-tag-wrapper1">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.2502 8.75005C13.7502 11.25 11.8652 13.604 9.22022 14.13C7.93022 14.3869 6.59204 14.2303 5.39623 13.6824C4.20042 13.1346 3.20794 12.2234 2.56012 11.0786C1.91229 9.93389 1.64214 8.61393 1.78813 7.30672C1.93413 5.99951 2.48882 4.77167 3.37322 3.79805C5.18722 1.80005 8.25022 1.25005 10.7502 2.25005"
                  stroke="#007aff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M5.75 7.75L8.25 10.25L14.25 3.75"
                  stroke="#007aff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span>SMB Solution</span>
              <div className="tag-dot-wrapper">
                <div className="tag-dot"></div>
              </div>
            </div>
            <div className="beforedot-tag-wrapper beforedot-tag-wrapper2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.2502 8.75005C13.7502 11.25 11.8652 13.604 9.22022 14.13C7.93022 14.3869 6.59204 14.2303 5.39623 13.6824C4.20042 13.1346 3.20794 12.2234 2.56012 11.0786C1.91229 9.93389 1.64214 8.61393 1.78813 7.30672C1.93413 5.99951 2.48882 4.77167 3.37322 3.79805C5.18722 1.80005 8.25022 1.25005 10.7502 2.25005"
                  stroke="#007aff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M5.75 7.75L8.25 10.25L14.25 3.75"
                  stroke="#007aff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span>Enterprise Security</span>
              <div className="tag-dot-wrapper">
                <div className="tag-dot"></div>
              </div>
            </div>
            <div className="afterdot-tag-wrapper afterdot-tag-wrapper3">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.2502 8.75005C13.7502 11.25 11.8652 13.604 9.22022 14.13C7.93022 14.3869 6.59204 14.2303 5.39623 13.6824C4.20042 13.1346 3.20794 12.2234 2.56012 11.0786C1.91229 9.93389 1.64214 8.61393 1.78813 7.30672C1.93413 5.99951 2.48882 4.77167 3.37322 3.79805C5.18722 1.80005 8.25022 1.25005 10.7502 2.25005"
                  stroke="#007aff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M5.75 7.75L8.25 10.25L14.25 3.75"
                  stroke="#007aff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span>Turky Security Solution</span>
              <div className="tag-dot-wrapper">
                <div className="tag-dot"></div>
              </div>
            </div>
            <div className="beforedot-tag-wrapper beforedot-tag-wrapper4">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.2502 8.75005C13.7502 11.25 11.8652 13.604 9.22022 14.13C7.93022 14.3869 6.59204 14.2303 5.39623 13.6824C4.20042 13.1346 3.20794 12.2234 2.56012 11.0786C1.91229 9.93389 1.64214 8.61393 1.78813 7.30672C1.93413 5.99951 2.48882 4.77167 3.37322 3.79805C5.18722 1.80005 8.25022 1.25005 10.7502 2.25005"
                  stroke="#007aff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M5.75 7.75L8.25 10.25L14.25 3.75"
                  stroke="#007aff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span>SMB Solution</span>
              <div className="tag-dot-wrapper">
                <div className="tag-dot"></div>
              </div>
            </div>
            <div className="afterdot-tag-wrapper afterdot-tag-wrapper5">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.2502 8.75005C13.7502 11.25 11.8652 13.604 9.22022 14.13C7.93022 14.3869 6.59204 14.2303 5.39623 13.6824C4.20042 13.1346 3.20794 12.2234 2.56012 11.0786C1.91229 9.93389 1.64214 8.61393 1.78813 7.30672C1.93413 5.99951 2.48882 4.77167 3.37322 3.79805C5.18722 1.80005 8.25022 1.25005 10.7502 2.25005"
                  stroke="#007aff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M5.75 7.75L8.25 10.25L14.25 3.75"
                  stroke="#007aff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span>Turky Security Solution</span>
              <div className="tag-dot-wrapper">
                <div className="tag-dot"></div>
              </div>
            </div>
            <div className="beforedot-tag-wrapper beforedot-tag-wrapper6">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.2502 8.75005C13.7502 11.25 11.8652 13.604 9.22022 14.13C7.93022 14.3869 6.59204 14.2303 5.39623 13.6824C4.20042 13.1346 3.20794 12.2234 2.56012 11.0786C1.91229 9.93389 1.64214 8.61393 1.78813 7.30672C1.93413 5.99951 2.48882 4.77167 3.37322 3.79805C5.18722 1.80005 8.25022 1.25005 10.7502 2.25005"
                  stroke="#007aff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M5.75 7.75L8.25 10.25L14.25 3.75"
                  stroke="#007aff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span>SMB Solution</span>
              <div className="tag-dot-wrapper">
                <div className="tag-dot"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="content content4"
        style={{ display: tabContent == 4 ? "flex" : "none" }}
      >
        <div className="left">
          <h2>Protect Your Small & Medium Businesses</h2>
          <p>
            Small and medium-sized businesses face the same cybersecurity
            challenges as larger enterprises while having smaller IT resources.
            Our comprehensive SMB solutions aim to effectively secure your Small
            and Medium-sized Businesses, without breaking the bank.
          </p>
          <ButtonWIthLeftIcon btnText="Protect Your Buisness" color="#2c235a" />
        </div>
        <div className="right">
          <div className="img-box">
            <img src={buisness4} alt="img" />
            <div className="afterdot-tag-wrapper  afterdot-tag-wrapper1">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.2502 8.75005C13.7502 11.25 11.8652 13.604 9.22022 14.13C7.93022 14.3869 6.59204 14.2303 5.39623 13.6824C4.20042 13.1346 3.20794 12.2234 2.56012 11.0786C1.91229 9.93389 1.64214 8.61393 1.78813 7.30672C1.93413 5.99951 2.48882 4.77167 3.37322 3.79805C5.18722 1.80005 8.25022 1.25005 10.7502 2.25005"
                  stroke="#2C235A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M5.75 7.75L8.25 10.25L14.25 3.75"
                  stroke="#2C235A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span>SMB Solution</span>
              <div className="tag-dot-wrapper">
                <div className="tag-dot"></div>
              </div>
            </div>
            <div className="beforedot-tag-wrapper beforedot-tag-wrapper2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.2502 8.75005C13.7502 11.25 11.8652 13.604 9.22022 14.13C7.93022 14.3869 6.59204 14.2303 5.39623 13.6824C4.20042 13.1346 3.20794 12.2234 2.56012 11.0786C1.91229 9.93389 1.64214 8.61393 1.78813 7.30672C1.93413 5.99951 2.48882 4.77167 3.37322 3.79805C5.18722 1.80005 8.25022 1.25005 10.7502 2.25005"
                  stroke="#2C235A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M5.75 7.75L8.25 10.25L14.25 3.75"
                  stroke="#2C235A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span>Enterprise Security</span>
              <div className="tag-dot-wrapper">
                <div className="tag-dot"></div>
              </div>
            </div>
            <div className="afterdot-tag-wrapper afterdot-tag-wrapper3">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.2502 8.75005C13.7502 11.25 11.8652 13.604 9.22022 14.13C7.93022 14.3869 6.59204 14.2303 5.39623 13.6824C4.20042 13.1346 3.20794 12.2234 2.56012 11.0786C1.91229 9.93389 1.64214 8.61393 1.78813 7.30672C1.93413 5.99951 2.48882 4.77167 3.37322 3.79805C5.18722 1.80005 8.25022 1.25005 10.7502 2.25005"
                  stroke="#2C235A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M5.75 7.75L8.25 10.25L14.25 3.75"
                  stroke="#2C235A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span>Turky Security Solution</span>
              <div className="tag-dot-wrapper">
                <div className="tag-dot"></div>
              </div>
            </div>
            <div className="beforedot-tag-wrapper beforedot-tag-wrapper4">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.2502 8.75005C13.7502 11.25 11.8652 13.604 9.22022 14.13C7.93022 14.3869 6.59204 14.2303 5.39623 13.6824C4.20042 13.1346 3.20794 12.2234 2.56012 11.0786C1.91229 9.93389 1.64214 8.61393 1.78813 7.30672C1.93413 5.99951 2.48882 4.77167 3.37322 3.79805C5.18722 1.80005 8.25022 1.25005 10.7502 2.25005"
                  stroke="#2C235A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M5.75 7.75L8.25 10.25L14.25 3.75"
                  stroke="#2C235A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span>SMB Solution</span>
              <div className="tag-dot-wrapper">
                <div className="tag-dot"></div>
              </div>
            </div>
            <div className="afterdot-tag-wrapper afterdot-tag-wrapper5">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.2502 8.75005C13.7502 11.25 11.8652 13.604 9.22022 14.13C7.93022 14.3869 6.59204 14.2303 5.39623 13.6824C4.20042 13.1346 3.20794 12.2234 2.56012 11.0786C1.91229 9.93389 1.64214 8.61393 1.78813 7.30672C1.93413 5.99951 2.48882 4.77167 3.37322 3.79805C5.18722 1.80005 8.25022 1.25005 10.7502 2.25005"
                  stroke="#2C235A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M5.75 7.75L8.25 10.25L14.25 3.75"
                  stroke="#2C235A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span>Turky Security Solution</span>
              <div className="tag-dot-wrapper">
                <div className="tag-dot"></div>
              </div>
            </div>
            <div className="beforedot-tag-wrapper beforedot-tag-wrapper6">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.2502 8.75005C13.7502 11.25 11.8652 13.604 9.22022 14.13C7.93022 14.3869 6.59204 14.2303 5.39623 13.6824C4.20042 13.1346 3.20794 12.2234 2.56012 11.0786C1.91229 9.93389 1.64214 8.61393 1.78813 7.30672C1.93413 5.99951 2.48882 4.77167 3.37322 3.79805C5.18722 1.80005 8.25022 1.25005 10.7502 2.25005"
                  stroke="#2C235A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M5.75 7.75L8.25 10.25L14.25 3.75"
                  stroke="#2C235A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span>SMB Solution</span>
              <div className="tag-dot-wrapper">
                <div className="tag-dot"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pagination setTabContent={setTabContent} tabContent={tabContent} />
    </section>
  );
};

export default App;
