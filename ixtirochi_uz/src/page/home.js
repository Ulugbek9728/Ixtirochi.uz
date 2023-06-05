import React from 'react';
import "../assets/header.scss"
import Bg1 from "../img/1.png"
import Bg2 from "../img/2.png"
import Bg3 from "../img/3.jpg"
import Bg4 from "../img/4.jpg"
import Bg5 from "../img/5.jpg"
import Bgribbon from "../img/ribbon.png"
import Bglike from "../img/like.png"
import {Pagination} from 'antd';
import OwlCarousel from "react-owl-carousel"
import "owl.carousel/dist/assets/owl.carousel.min.css"
import "owl.carousel/dist/assets/owl.theme.default.min.css"
import {Link} from "react-router-dom";



function Home(props) {
    return (

        <div className='home'>
            <div className='title'>Bring a creative project to life.</div>
            <div className='text'>ON Ixtirochi.uz</div>
            <div className="container statistika">
                <div className="row">
                    <div className="col-4 p-4 litleStat">
                        <div className="number">240,347</div>
                        <div className="comment">projects funded</div>
                    </div>
                    <div className="col-4 p-4 litleStat">
                        <div className="number">$7,359,808,519</div>
                        <div className="comment">towards creative work</div>
                    </div>
                    <div className="col-4 p-4 litleStat">
                        <div className="number">88,254,609</div>
                        <div className="comment">pledges</div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row sectioOne">
                    <div className="col-7 box">
                        <Link to='/projects'>
                            <div className='span'>FEATURED PROJECT</div>
                            <img className='bigImg' src={Bg1} alt=""/>
                            <div className="titleS">Lorem</div>
                            <div className="textS">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
                                ipsam minima non oditquia quod.
                            </div>
                            <div className="bySomeOne">By <span>Riftweaver</span></div>
                        </Link>
                    </div>
                    <div className="col-5 box">
                        <div className="titleRec">RECOMMENDED FOR YOU</div>
                        <div className="d-flex smallBox">
                            <img src={Bg2} alt=""/>
                            <div className="">
                                <p className="titleSmall">MetMo Pocket Driver</p>
                                <p className="prosentSmall">17,678% funded</p>
                                <p className="textSmall">By MetMo cube</p>
                                <div className="d-flex">
                                    <span className='icon'>
                                        <img src={Bgribbon} alt=""/>
                                    </span>
                                    <span className='icon'>
                                        <img src={Bglike} alt=""/>
                                    </span>
                                    <span className='icon'>
                                        <img src={Bglike} alt=""/>
                                    </span>


                                </div>
                            </div>
                        </div>
                        <div className="d-flex smallBox">
                            <img src={Bg3} alt=""/>
                            <div className="">
                                <p className="titleSmall">
                                    Jenn Champion's - "The Last Night of
                                </p>
                                <p className="prosentSmall">84% funded</p>
                                <p className="textSmall">By Jenn Champion</p>
                                <div className="d-flex">
                                    <span className='icon'>
                                        <img src={Bgribbon} alt=""/>
                                    </span>
                                    <span className='icon'>
                                        <img src={Bglike} alt=""/>
                                    </span>
                                    <span className='icon'>
                                        <img src={Bglike} alt=""/>
                                    </span>


                                </div>
                            </div>
                        </div>
                        <div className="d-flex smallBox">
                            <img src={Bg4} alt=""/>
                            <div className="">
                                <p className="titleSmall">
                                    Cocoa Asante: Ethical Chocolate Tastes
                                </p>
                                <p className="prosentSmall">59% funded</p>
                                <p className="textSmall">By Ella Livingston</p>
                                <div className="d-flex">
                                    <span className='icon'>
                                        <img src={Bgribbon} alt=""/>
                                    </span>
                                    <span className='icon'>
                                        <img src={Bglike} alt=""/>
                                    </span>
                                    <span className='icon'>
                                        <img src={Bglike} alt=""/>
                                    </span>


                                </div>
                            </div>
                        </div>
                        <Pagination className='pagination' simple defaultCurrent={1} total={50}/>
                    </div>
                </div>
            </div>
            <div className="SectionTwo">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={Bg3} alt=""/>
                        </div>
                        <div className="col-6">
                            <div className="leftTop">
                                <div className="title">Food Stars on Ixtirochi.uz</div>
                                <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                                    cumque harum non repudiandae sunt tempora voluptatum! Consequuntur deserunt id
                                    libero, modi nesciunt provident tempore. Consequuntur deleniti rem sed
                                    temporibus.
                                </div>

                            </div>
                            <a className='learnMore' href="#">Learn more</a>
                        </div>
                    </div>
                </div>


            </div>
            <div className="container sectionThree">
                <div className="row">
                    <div className="title">
                        FRESH FAVORITES
                        <a href="#">Discover more ></a>
                    </div>
                    <OwlCarousel className='owl-theme' loop items={4}
                                 autoplay nav dots={false}>
                        <div className="item">
                            <img className='bigImg' src={Bg1} alt=""/>
                            <div className="titleOWL">Lorem</div>
                            <div className="textOWL">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ipsam minima non
                                odit quia
                                quod.
                            </div>
                            <div className="bySomeOne">By <span>Riftweaver</span></div>
                        </div>
                        <div className="item">
                            <img className='bigImg' src={Bg2} alt=""/>
                            <div className="titleOWL">Lorem</div>
                            <div className="textOWL">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ipsam minima non
                                odit quia
                                quod.
                            </div>
                            <div className="bySomeOne">By <span>Riftweaver</span></div>
                        </div>
                        <div className="item">
                            <img className='bigImg' src={Bg3} alt=""/>
                            <div className="titleOWL">Lorem</div>
                            <div className="textOWL">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ipsam minima non
                                odit quia
                                quod.
                            </div>
                            <div className="bySomeOne">By <span>Riftweaver</span></div>
                        </div>
                        <div className="item">
                            <img className='bigImg' src={Bg4} alt=""/>
                            <div className="titleOWL">Lorem</div>
                            <div className="textOWL">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ipsam minima non
                                odit quia
                                quod.
                            </div>
                            <div className="bySomeOne">By <span>Riftweaver</span></div>
                        </div>
                        <div className="item">
                            <img className='bigImg' src={Bg5} alt=""/>
                            <div className="titleOWL">Lorem</div>
                            <div className="textOWL">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ipsam minima non
                                odit quia
                                quod.
                            </div>
                            <div className="bySomeOne">By <span>Riftweaver</span></div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
            <div className="SectionTwo">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={Bg4} alt=""/>
                        </div>
                        <div className="col-6">
                            <div className="leftTop">
                                <div className="title">Food Stars on Ixtirochi.uz</div>
                                <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                                    cumque harum non repudiandae sunt tempora voluptatum! Consequuntur deserunt id
                                    libero, modi nesciunt provident tempore. Consequuntur deleniti rem sed
                                    temporibus.
                                </div>

                            </div>
                            <a className='learnMore' href="#">Learn more</a>
                        </div>
                    </div>
                </div>


            </div>
            <div className="container sectionThree">
                <div className="row">
                    <div className="title">
                        FRESH FAVORITES
                        <a href="#">Discover more ></a>
                    </div>
                    <OwlCarousel className='owl-theme' loop items={4}
                                 autoplay nav dots={false}>
                        <div className="item">
                            <img className='bigImg' src={Bg1} alt=""/>
                            <div className="titleOWL">Lorem</div>
                            <div className="textOWL">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ipsam minima non
                                odit quia
                                quod.
                            </div>
                            <div className="bySomeOne">By <span>Riftweaver</span></div>
                        </div>
                        <div className="item">
                            <img className='bigImg' src={Bg2} alt=""/>
                            <div className="titleOWL">Lorem</div>
                            <div className="textOWL">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ipsam minima non
                                odit quia
                                quod.
                            </div>
                            <div className="bySomeOne">By <span>Riftweaver</span></div>
                        </div>
                        <div className="item">
                            <img className='bigImg' src={Bg3} alt=""/>
                            <div className="titleOWL">Lorem</div>
                            <div className="textOWL">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ipsam minima non
                                odit quia
                                quod.
                            </div>
                            <div className="bySomeOne">By <span>Riftweaver</span></div>
                        </div>
                        <div className="item">
                            <img className='bigImg' src={Bg4} alt=""/>
                            <div className="titleOWL">Lorem</div>
                            <div className="textOWL">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ipsam minima non
                                odit quia
                                quod.
                            </div>
                            <div className="bySomeOne">By <span>Riftweaver</span></div>
                        </div>
                        <div className="item">
                            <img className='bigImg' src={Bg5} alt=""/>
                            <div className="titleOWL">Lorem</div>
                            <div className="textOWL">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ipsam minima non
                                odit quia
                                quod.
                            </div>
                            <div className="bySomeOne">By <span>Riftweaver</span></div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
            <div className="SectionTwo">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={Bg5} alt=""/>
                        </div>
                        <div className="col-6">
                            <div className="leftTop">
                                <div className="title">Food Stars on Ixtirochi.uz</div>
                                <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                                    cumque harum non repudiandae sunt tempora voluptatum! Consequuntur deserunt id
                                    libero, modi nesciunt provident tempore. Consequuntur deleniti rem sed
                                    temporibus.
                                </div>

                            </div>
                            <a className='learnMore' href="#">Learn more</a>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    );
}

export default Home;