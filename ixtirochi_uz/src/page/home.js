import React from 'react';
import "../assets/header.scss"
import Bg1 from "../img/1.jpg"
import Bg2 from "../img/2.JPG"
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
            <div className='title'>Ijodiy loyihalaringizni hayotga tadbiq eting</div>
            <div className='text'> Ixtirochi.uz bilan</div>
            <div className="container statistika">
                <div className="row">
                    <div className="col-4 p-4 litleStat">
                        <div className="number">240,347</div>
                        <div className="comment">Loyihalar moliyalashtirildi</div>
                    </div>
                    <div className="col-4 p-4 litleStat">
                        <div className="number">$7,359,808,519</div>
                        <div className="comment">Ijodiy ishlarga</div>
                    </div>
                    <div className="col-4 p-4 litleStat">
                        <div className="number">88,254,609</div>
                        <div className="comment">Investorlar</div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row sectioOne">
                    <div className="col-7 box">
                        <Link to='/projects'>
                            <div className='span'>Kutilayotgan loyihalar</div>
                            <img className='bigImg' src={Bg1} alt=""/>
                            <div className="titleS">FOBOT</div>
                            <div className="textS">
                                Ushbu robot inson harakatlarini (qo'l, barmoq, yurish)
                                yuqori aniqlikda qaytara oladigan dasturiy ta'minot bn taminlangan.
                            </div>
                            <div className="bySomeOne">Yaratuvchi: <span>Robokidz</span></div>
                        </Link>
                    </div>
                    <div className="col-5 box">
                        <div className="titleRec">SIZGA TAVSIYA ETILGAN</div>
                        <div className="d-flex smallBox">
                            <img src={Bg2} alt=""/>
                            <div className="">
                                <p className="titleSmall">Robot ayol o'qituvchi</p>
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
                                    Metan gaz indikator
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
                                    HARAKATNI ANIQLOVCHI KAMERA
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
                            <img src={Bg2} alt=""/>
                        </div>
                        <div className="col-6">
                            <div className="leftTop">
                                <div className="title">Robot ayol o'qituvchi</div>
                                <div className="text">
                                    Loyiha o'z nomi bilan odamsimon ayol robot. Roboxonimning asosiy
                                    etiborga loyiq jihati
                                    ayol kishining yuz qiyofasi bn o'xshash. Bu loyiha ko'plab
                                    qulayliklarni o'zida aks
                                    ettirgan.
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
                            <div className="titleOWL">ROBOT</div>
                            <div className="textOWL">
                                Ushbu robot inson harakatlarini (qo'l, barmoq, yurish) yuqori aniqlikda qaytara
                                oladigan dasturiy ta'minot bn taminlangan.
                            </div>
                            <div className="bySomeOne">By <span>Riftweaver</span></div>
                        </div>
                        <div className="item">
                            <img className='bigImg' src={Bg2} alt=""/>
                            <div className="titleOWL">ROBOT ayol o'qituvchi</div>
                            <div className="textOWL">
                                Loyiha o'z nomi bilan odamsimon ayol robot. Roboxonimning asosiy etiborga loyiq jihati
                                ayol kishining yuz qiyofasi bn o'xshash. Bu loyiha ko'plab qulayliklarni o'zida aks
                                ettirgan.
                            </div>
                            <div className="bySomeOne">By <span>Riftweaver</span></div>
                        </div>
                        <div className="item">
                            <img className='bigImg' src={Bg3} alt=""/>
                            <div className="titleOWL">Metan gaz indikator</div>
                            <div className="textOWL">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ipsam minima non
                                odit quia
                                quod.
                            </div>
                            <div className="bySomeOne">By <span>Riftweaver</span></div>
                        </div>
                        <div className="item">
                            <img className='bigImg' src={Bg4} alt=""/>
                            <div className="titleOWL">Harakatni aniqlovchi kamera</div>
                            <div className="textOWL">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ipsam minima non
                                odit quia
                                quod.
                            </div>
                            <div className="bySomeOne">By <span>Riftweaver</span></div>
                        </div>
                        <div className="item">
                            <img className='bigImg' src={Bg5} alt=""/>
                            <div className="titleOWL">Ko'rlar uchun maxsus mashina</div>
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
                                <div className="title">Harakatni aniqlovchi kamera</div>
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
                            <div className="titleOWL">ROBOT</div>
                            <div className="textOWL">
                                Ushbu robot inson harakatlarini (qo'l, barmoq, yurish) yuqori aniqlikda qaytara
                                oladigan dasturiy ta'minot bn taminlangan.
                            </div>
                            <div className="bySomeOne">By <span>Riftweaver</span></div>
                        </div>
                        <div className="item">
                            <img className='bigImg' src={Bg2} alt=""/>
                            <div className="titleOWL">ROBOT ayol o'qituvchi</div>
                            <div className="textOWL">
                                Loyiha o'z nomi bilan odamsimon ayol robot. Roboxonimning asosiy etiborga loyiq jihati
                                ayol kishining yuz qiyofasi bn o'xshash. Bu loyiha ko'plab qulayliklarni o'zida aks
                                ettirgan.
                            </div>
                            <div className="bySomeOne">By <span>Riftweaver</span></div>
                        </div>
                        <div className="item">
                            <img className='bigImg' src={Bg3} alt=""/>
                            <div className="titleOWL">Metan gaz indikator</div>
                            <div className="textOWL">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ipsam minima non
                                odit quia
                                quod.
                            </div>
                            <div className="bySomeOne">By <span>Riftweaver</span></div>
                        </div>
                        <div className="item">
                            <img className='bigImg' src={Bg4} alt=""/>
                            <div className="titleOWL">Harakatni aniqlovchi kamera</div>
                            <div className="textOWL">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ipsam minima non
                                odit quia
                                quod.
                            </div>
                            <div className="bySomeOne">By <span>Riftweaver</span></div>
                        </div>
                        <div className="item">
                            <img className='bigImg' src={Bg5} alt=""/>
                            <div className="titleOWL">Ko'rlar uchun maxsus mashina</div>
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
                                <div className="title">Ko'rlar uchun maxsus mashina</div>
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