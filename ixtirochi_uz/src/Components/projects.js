import React from 'react';
import "../assets/Projects.scss"
import Bgribbon from "../img/ribbon.png"
import coding from "../img/icon/coding.png"
import Facebook from "../img/icon/facebook.png"
import mail from "../img/icon/mail.png"
import twt from "../img/icon/twitter.png"
import LogoIcon from "../img/ixtirochiUz.jpg"
import message from "../img/icon/chatting.png"
import speaker from "../img/icon/speaker.png"
import Bg3 from "../img/3.jpg"
import Bg4 from "../img/4.jpg"
import Bg5 from "../img/5.jpg"

import {Badge, Space, InputNumber} from 'antd';

const onChange = (value) => {
    console.log('changed', value);
};

function Projects(props) {
    return (
        <div className='Projects'>
            <p className="title">ROBOT</p>
            <p className="text">
                Ushbu loyiha O'zbekistondagi birinchi marta ixtiro qilingan eng katta va og'ir yuklarni ko'tarishga
                mo'ljallangan Robot. Loyihadan ko'zlangan asosiy maqsad inson ko'tara olmaydigan og'ir yuklarni
                ko'tarish va Robotning ichki kabinasiga òtirgan holda qòl harakatlari orqali masofaga yuklarni tashish,
                hamda harbiy, qutqaruv sohalarida jangovor va qutqaruvchi vazifasida xavfli xududlardagi opiratsialarga
                qatnashishdan iborat.
                Ushbu robot inson harakatlarini (qo'l, barmoq, yurish) yuqori aniqlikda qaytara oladigan dasturiy
                ta'minot bn taminlangan. Yana bir qulay funksiyalardan biri uzoq masofadan ushbu ulkan robotni
                boshqarish ham mumkin.
            </p>
            <div className="container">
                <div className="row">
                    <div className="col-7 box">
                        <iframe src="https://www.youtube.com/embed/58GRCmlCwoM"
                                title="Robokidzdagi Lego Mindstorms kusidan lavhalar" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen/>
                    </div>
                    <div className=" col-5 rightBox">
                        <div className="right">
                            <div className="cost">
                                $ 1,117,360
                            </div>
                            <div className="comment">
                                Kutilayotgan Investitsiya $ 50,000
                            </div>
                            <div className="backers">
                                9,281
                            </div>
                            <div className="comment">
                                Investorlar
                            </div>
                            <div className="backers">
                                9
                            </div>
                            <div className="comment">
                                Tugash vaqti
                            </div>
                            <button className='btn' type={"button"}>Investitsiya kiritish</button>
                            <div className="remindMeBox d-flex">
                                <button className='btn' type={"button"}>
                                    <img src={Bgribbon} alt=""/>
                                    Saqlab qo'yish
                                </button>
                                <div className="rightIcon">
                                    <a href="#">
                                        <img src={Facebook} alt=""/>
                                    </a>
                                    <a href="#">
                                        <img src={twt} alt=""/>
                                    </a>
                                    <a href="#">
                                        <img src={mail} alt=""/>
                                    </a>
                                    <a href="#">
                                        <img src={coding} alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div className="remindButton">
                                <a href="#">All or nothing. </a>
                                <span>
                                    This project will only be funded if it reaches its goal by Fri,
                                    June 9 2023 12:00 PM UTC +05:00.
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="CommentBox">
                <div className="container">
                    <div className="row">
                        <div className="col-4 comment">
                            <img src={LogoIcon} alt=""/>
                            <p>Ixtirochi.uz loyihalarni moliyalashtirish uchun ijodkorlarni qo'llab-quvvatlovchilar
                                bilan
                                bog'laydi.
                            </p>
                        </div>
                        <div className="col-4 comment">
                            <img src={message} alt=""/>
                            <p>Mukofotlar kafolatlanmaydi, lekin ijodkorlar muntazam
                                ravishda qo‘llab-quvvatlovchilarni yangilab turishlari kerak.
                            </p>
                        </div>
                        <div className="col-4 comment">
                            <img src={speaker} alt=""/>
                            <p>Agar loyiha o‘zining moliyalashtirish maqsadiga aksiya
                                muddatigacha yetib qolsa, sizdan to‘lov olinadi.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="Nav2 ">
                <div className="container">
                    <div className="row">
                        <div className="left col-6">
                            <Space size="large">
                                <Badge>
                                    <span>Campaign</span>
                                </Badge>
                                <Badge count={18} overflowCount={10}>
                                    <span>FAQ</span>
                                </Badge>
                                <Badge count={99} overflowCount={50}>
                                    <span>Updates</span>
                                </Badge>
                                <Badge count={500} overflowCount={100}>
                                    <span>Comments</span>
                                </Badge>
                                <Badge>
                                    <span>Community</span>
                                </Badge>
                            </Space>
                        </div>
                        <div className="right col-6">
                            <button className='btn' type={"button"}>Back this project</button>
                            <button className='btn' type={"button"}>
                                <img src={Bgribbon} alt=""/>
                                Remind me
                            </button>
                        </div>
                    </div>
                </div>


            </div>
            <div className='storyBox'>

                <div className="story">
                    <div>Story</div>
                    <div>Risks</div>
                    <div>ENVIRONMENTAL COMMITMENTS</div>
                </div>
                <div className="centrContent">
                    <div className="title">Story</div>
                    <div className="Text_title">
                        Whoa! Peak Design is launching a new product on Kickstarter. A few things to know:
                    </div>
                    <div className="text_text">
                        Micro Clutch will ship in summer of 2023.
                        Lock in this sweet deal by backing now!
                        You can add other PD products onto you reward for up to 50% off MSRP!
                        This is a shorter campaign than most of our others. We've got big
                        things coming soon.
                        We launch products on Kickstarter because it keeps us free of
                        outside investment and you closer to great design.
                        <img src={Bg4} alt=""/>
                        Micro Clutch will ship in summer of 2023.
                        Lock in this sweet deal by backing now!
                        You can add other PD products onto you reward for up to 50% off MSRP!
                        This is a shorter campaign than most of our others. We've got big
                        things coming soon.
                        We launch products on Kickstarter because it keeps us free of
                        outside investment and you closer to great design.
                        <img src={Bg3} alt=""/>
                        Micro Clutch will ship in summer of 2023.
                        Lock in this sweet deal by backing now!
                        You can add other PD products onto you reward for up to 50% off MSRP!
                        This is a shorter campaign than most of our others. We've got big
                        things coming soon.
                        We launch products on Kickstarter because it keeps us free of
                        outside investment and you closer to great design.
                        <img src={Bg5} alt=""/>
                        Micro Clutch will ship in summer of 2023.
                        Lock in this sweet deal by backing now!
                        You can add other PD products onto you reward for up to 50% off MSRP!
                        This is a shorter campaign than most of our others. We've got big
                        things coming soon.
                        We launch products on Kickstarter because it keeps us free of
                        outside investment and you closer to great design.
                        <img src={Bg4} alt=""/>
                        Micro Clutch will ship in summer of 2023.
                        Lock in this sweet deal by backing now!
                        You can add other PD products onto you reward for up to 50% off MSRP!
                        This is a shorter campaign than most of our others. We've got big
                        things coming soon.
                        We launch products on Kickstarter because it keeps us free of
                        outside investment and you closer to great design.
                        <img src={Bg3} alt=""/>
                    </div>
                </div>
                <div className="right">
                    <div className="cardBox">
                        <img src={Bg5} alt=""/>
                        <div className="card">
                            <div className="Cardtitle">
                                Oru Kayak
                            </div>
                            <div className="Cardtext">
                                6 created 0 backend
                            </div>
                            <div className="Cardtext">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolore doloremque
                                earum eos esse, explicabo illum ipsa iure, molestiae nostrum officia officiis placeat
                                ratione rerum tenetur unde ut! Quidem, rem?...
                                <span>See more</span>
                            </div>
                        </div>
                    </div>
                    <h3>Support</h3>
                    <div className="card">
                        <div className="Cardtitle">
                            Pledge without a reward
                        </div>
                        <Space>
                            <InputNumber
                                defaultValue={10}
                                formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                                onChange={onChange}
                            />

                        </Space>
                        <div className="background">
                            <div className="titleGradiant">
                                Back it because you believe in it.
                            </div>
                            <div className="textGradiant">
                                Support the project for no reward, just because it speaks to you.
                            </div>

                        </div>
                        <button className='btn' type='button'>Continue</button>
                    </div>
                    <div className="card card1">
                        <img src={Bg3} alt=""/>
                        <div className="box">
                            <div className="comment">
                                Pledge $10 or more
                            </div>
                            <div className="Cardtitle">
                                SINGLE DOWNLOAD - I'm an Old Cowhand
                            </div>
                            <div className="Cardtext">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolore doloremque
                                earum eos esse, explicabo illum ipsa iure, molestiae nostrum officia officiis placeat
                                ratione rerum tenetur unde ut! Quidem, rem?...
                                <span>Read more...</span>
                            </div>
                            <div className="Cardtext">
                                ESTIMATED DELIVERY
                                <p>Jul 2023</p>
                            </div>
                            <Space>
                                <InputNumber
                                    defaultValue={10}
                                    formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                    parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                                    onChange={onChange}
                                />

                            </Space>
                            <button className='btn' type='button'>Continue</button>
                        </div>

                    </div>
                    <div className="card card1">
                        <img src={Bg4} alt=""/>
                        <div className="box">
                            <div className="comment">
                                Pledge $15 or more
                            </div>
                            <div className="Cardtitle">
                                SINGLE DOWNLOAD - I'm an Old Cowhand
                            </div>
                            <div className="Cardtext">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolore doloremque
                                earum eos esse, explicabo illum ipsa iure, molestiae nostrum officia officiis placeat
                                ratione rerum tenetur unde ut! Quidem, rem?...
                                <span>Read more...</span>
                            </div>
                            <div className="Cardtext">
                                ESTIMATED DELIVERY
                                <p>Jul 2023</p>
                            </div>
                            <Space>
                                <InputNumber
                                    defaultValue={15}
                                    formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                    parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                                    onChange={onChange}
                                />

                            </Space>
                            <button className='btn' type='button'>Continue</button>
                        </div>

                    </div>
                    <div className="card card1">
                        <img src={Bg5} alt=""/>
                        <div className="box">
                            <div className="comment">
                                Pledge $20 or more
                            </div>
                            <div className="Cardtitle">
                                SINGLE DOWNLOAD - I'm an Old Cowhand
                            </div>
                            <div className="Cardtext">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolore doloremque
                                earum eos esse, explicabo illum ipsa iure, molestiae nostrum officia officiis placeat
                                ratione rerum tenetur unde ut! Quidem, rem?...
                                <span>Read more...</span>
                            </div>
                            <div className="Cardtext">
                                ESTIMATED DELIVERY
                                <p>Jul 2023</p>
                            </div>
                            <Space>
                                <InputNumber
                                    defaultValue={20}
                                    formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                    parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                                    onChange={onChange}
                                />

                            </Space>
                            <button className='btn' type='button'>Continue</button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Projects;