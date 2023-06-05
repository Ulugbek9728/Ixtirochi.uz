import React from 'react';
import "../assets/header.scss"
import facebook from "../img/facebook.png";
import instagram from "../img/instagram.png";
import twitter from "../img/twitter.png";
import youtube from "../img/youtube.png";

const footer = {
    background: "white",
    width: "100%",
    height: "400px",
    color: "grey",
};

const flex = {
    display: "flex",
    flexDirection: "column",
    marginTop: "50px",
};
const icons = {
    display: "flex",
    flexDirection: "row",
    margin: "80px 40% 80px 35%",
};
function Footer(props) {
    return (
        <div>
            <div className="heder">
                <ul>
                    <li><a href="#">Arts</a></li>
                    <li><a href="#">Comics & Illustration</a></li>
                    <li><a href="#">Design & Tech</a></li>
                    <li><a href="#">Film</a></li>
                    <li><a href="#">Food & Craft</a></li>
                    <li><a href="#">Games</a></li>
                    <li><a href="#">Music</a></li>
                    <li><a href="#">Publishing</a></li>
                </ul>
            </div>
            <div style={footer}>
                <div>
                    <div
                        style={{
                            width: "80%",
                            display: "flex",
                            justifyContent: "space-around",
                            margin: "auto",
                        }}
                    >
                        <div style={flex}>
                            <h3>ABOUT</h3>
                            <div>About us</div>
                            <div>Our charter</div>
                            <div>Stats</div>
                            <div>Press</div>
                            <div>Jobs</div>
                        </div>
                        <div style={flex}>
                            <h3>SUPPORT</h3>
                            <div>Help Center</div>
                            <div>Our Rules</div>
                            <div>Creator Handbook</div>
                            <div>Patrons</div>
                            <div>Brand assets</div>
                        </div>
                        <div style={flex}>
                            <h3>MORE FROM KICKSTARTER</h3>
                            <div>Newsletters</div>
                            <div>Kickstarter Magazine</div>
                            <div>The Creative Independent</div>
                            <div>Mobile ads</div>
                            <div>Research</div>
                        </div>
                    </div>
                </div>
                <div style={icons}>
                    <div style={{ marginLeft: "50px", textAlign: "center" }}>
                        <img style={{ width: "40px" }} src={facebook} />
                    </div>
                    <div style={{ marginLeft: "50px", textAlign: "center" }}>
                        <img style={{ width: "40px" }} src={instagram} />
                    </div>
                    <div style={{ marginLeft: "50px", textAlign: "center" }}>
                        <img style={{ width: "40px" }} src={twitter} />
                    </div>
                    <div style={{ marginLeft: "50px", textAlign: "center" }}>
                        <img style={{ width: "40px" }} src={youtube} />
                    </div>
                </div>
                <div
                    style={{
                        height: "80px",
                        width: "100%",
                        borderTop: "1px solid grey",
                        display: "flex",
                        justifyContent: "left",
                        margin: "auto",
                    }}
                >
                    <div style={{ marginLeft: "280px", marginTop: "20px" }}>
                        Trust & Safety
                    </div>
                    <div style={{ marginLeft: "30px", marginTop: "20px" }}>
                        Terms of Use
                    </div>
                    <div style={{ marginLeft: "30px", marginTop: "20px" }}>
                        Privacy Policy
                    </div>
                    <div style={{ marginLeft: "30px", marginTop: "20px" }}>
                        Cookie Policy
                    </div>
                    <div style={{ marginLeft: "30px", marginTop: "20px" }}>
                        Accessibility Statement
                    </div>
                    <div style={{ marginLeft: "30px", marginTop: "20px" }}>
                        CA Notice of Consent
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;