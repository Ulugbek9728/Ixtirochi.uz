import React, {useEffect, useState} from 'react';
import "../assets/header.scss"
import logo from '../img/logo.jpg'
import src from '../img/src.png'
import AOS from "aos";
import "aos/dist/aos.css";


function Header(props) {

    useEffect(() => {
        AOS.init()
    });

    const [srcBoolin, setSrc] = useState(false)
    return (
        <div className='headerBox'>
            <div className='headerTop'>
                <div className='left'>
                    <a href="#">Discover</a>
                    <a href="#">Start a project</a>
                </div>
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>
                <div className="right">
                    <a onClick={(e) => {
                        setSrc(true)
                    }} href="#">
                        Search
                        <img src={src} alt=""/>
                    </a>
                    <a href='#'>Log in</a>
                </div>
                {
                    srcBoolin ? <div className='srcColleps' data-aos="fade-down">
                        <input type="text" placeholder='Search for projects or categories'/>
                        <span onClick={(e) => {
                            setSrc(false)
                        }}>x</span>
                    </div> : ''
                }
            </div>
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

        </div>
    );
}

export default Header;