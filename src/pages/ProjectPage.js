import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PrudentialBanner from "../imgs/pud-banner.png";
import backArrowIcon from "../imgs/backBtnArrow.svg";
import "animate.css/animate.min.css";
import { Link } from "react-router-dom";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Scene = () => {
    
    const featuredImage = PrudentialBanner;
    const backArrow = backArrowIcon;
    return (
        <>
        <div id='backtoTop' className='wrapper'>
            <Header />
            <section class="">
                <div className="pageContentCont">
                    <h2 className="centeritBig">Prudential Insurance</h2>
                    <img className="featuredImage" src={featuredImage} alt="#"></img>
                    <div className="matopMassive grid14 gap64">
                            <p>
                                A complete re-design of 
                                American Chemical Society's 
                                membership model.
                            </p>
                            <p className="marbot32">
                                American Chemical Society was founded in 1876 and chartered by the U.S. Congress. 
                                Their mission is to advance the education of chemistry to promising youngsters all over the world.
                            </p>
                            <Link to="/">
                                <p>VISIT APP
                                    <span>
                                        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6 1.875C6 1.32272 6.44772 0.875 7 0.875H13C13.5523 0.875 14 1.32272 14 1.875V7.875C14 8.42728 13.5523 8.875 13 8.875C12.4477 8.875 12 8.42728 12 7.875V4.34202L1.72199 15.0669C1.33986 15.4656 0.706838 15.4791 0.308094 15.097C-0.0906486 14.7149 -0.104117 14.0818 0.278012 13.6831L10.6358 2.875H7C6.44772 2.875 6 2.42728 6 1.875Z" fill="black"/>
                                        </svg>
                                    </span>
                                </p>
                            </Link>
                        <div className="flexCol gap40 wid-60">
                            <p className="marbot32">
                                The accessibility and security were also a primary part of the design solutions considering the scope of ACS users.
                            </p>
                            <p className="projectDesc">
                                <span>The client wanted a</span> <br></br> complete re-design of their old membership model, 
                                including both the front and the back end. <br></br><br></br>The new Membership model 
                                is a wide range of applications hosted centrally using Magento and NetForum. 
                            </p>
                            <p className="projectDesc">
                                <span>PROJECT INVOLVED:</span> UX Research, UX/UI Design, Accessibility, PHP, HTML5 with CSS3 and JS
                            </p>
                        </div>
                    </div>    
                </div>
            </section>
            <AnimationOnScroll animateIn="animate__fadeIn" animateOut="animate__fadeOut">
                <section class="grid14 gap64 martop120 marbot32">
                    <div></div>
                    <div className="wid40">
                        <h2 className="">Feature 01</h2>
                        <p className="mar24">
                            American Chemical Society was founded in 1876 and chartered by the U.S. Congress. Their mission is to advance the education of chemistry to promising youngsters all over the world.
                        </p>
                    </div>
                    <img className="featuredImage mar24 spanFull" src={featuredImage} alt="#"></img>
                    <div></div>
                    <div className="wid40 martop120">
                        <h2 className="">Feature 02</h2>
                        <p className="mar24">
                            American Chemical Society was founded in 1876 and chartered by the U.S. Congress. Their mission is to advance the education of chemistry to promising youngsters all over the world.
                        </p>
                    </div>
                    <img className="featuredImage mar24 spanFull" src={featuredImage} alt="#"></img>
                    <img className="featuredImage mar24 spanFull" src={featuredImage} alt="#"></img>
                    <img className="featuredImage mar24 spanFull" src={featuredImage} alt="#"></img>
                </section>
                <Link to={"/"}> 
                    <div class="floatingBackBtn">
                        <img className="pad_T_40" src={backArrow} alt="#"></img>
                    </div>
                </Link>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeIn" animateOut="animate__fadeOut">
                <section class="pageContentCont nextSection h-100 grid14 gap64 align_T">
                    <div className="col2 martop80">
                        <h2 className="">NEXT</h2>
                        <div></div>
                        <img className="nextImage" src={featuredImage} alt="#"></img>
                    </div>
                </section>
            </AnimationOnScroll>
            <Footer />  
        </div>
        </>
    )
};

const ProjectPage = () => {
  return (
    <Scene />
  )
};

export default ProjectPage;