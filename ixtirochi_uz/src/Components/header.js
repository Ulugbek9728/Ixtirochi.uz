import React, {useEffect, useState} from 'react';
import "../assets/header.scss"
import logo from '../img/logo.jpg'
import src from '../img/src.png'
import AOS from "aos";
import "aos/dist/aos.css";
import {Link} from "react-router-dom";



function Header(props) {

    useEffect(() => {
        AOS.init()
    });

    const [srcBoolin, setSrc] = useState(false)
    return (
        <div className='headerBox'>
            <div className='headerTop'>
                <div className='left'>
                    <a href="#">Katigoriya</a>
                    <a href="#">Loyiha qo'shish</a>
                </div>
                <Link to={'/'} className="logo">
                    <img src={logo} alt=""/>
                </Link>
                <div className="right">
                    <a onClick={(e) => {
                        setSrc(true)
                    }} href="#">
                        Qidiruv
                        <img src={src} alt=""/>
                    </a>
                    <Link to='/login'>Kirish</Link>
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
                    <li><a href="#">Elektronika va Arduino</a></li>
                    <li><a href="#">Texnologiya</a></li>
                    <li><a href="#">Komikslar va Illyustratsiya</a></li>
                    <li><a href="#">3D loyihalash </a></li>
                    <li><a href="#">Hunarmandchilik</a></li>
                    <li><a href="#">Sun'iy intellekt </a></li>
                </ul>
            </div>

        </div>
    );
}

export default Header;