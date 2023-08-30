import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GizmoCard from "./components/GizmoCard";
import PrudentialCard from "./components/PrudentialCard";
import WorkeeCard from "./components/WorkeeCard";
import AristCard from "./components/AristCard";
import PrezzeeCard from "./components/PrezzeeCard";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import ACS from "./components/ACS";
// import { Routes, Route } from "react-router-dom";
import "animate.css/animate.min.css";
import {Link} from "react-router-dom"

import './App.css';

const Scene = () => {
  return (
    <>
      <div id='backtoTop' className='wrapper'>
        <Header />
        <section class="h-100">
          <h1 class="displayHeading">
              Frontend Developer, based in India
          </h1>
          <div class="subtext text mar24">
              <AnimationOnScroll animateIn="animate__fadeIn" animateOut="animate__fadeOut">
                <p>
                  I design high quality interafaces and build front-end. I have designed experiences for more than 30
                  applications during
                  last 4 years. I have already worked with renowned clients such as: American Chemical Society,
                  Prudential
                  Insurance,
                  WellHealth Canada, Arist, Gizmo...
                </p>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn="animate__fadeIn" animateOut="animate__fadeOut">
                <p class=" text">
                  I can help you build your next web application from scratch or enhance experiences on your existing
                  products.
                </p>
              </AnimationOnScroll>
          </div>
        </section>
        <div className='projectCont'>
          <AnimationOnScroll animateIn="animate__fadeIn" animateOut="animate__fadeOut">
            <Link to="/projectPage"><PrudentialCard /></Link>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeIn" animateOut="animate__fadeOut">
            <Link to="/projectPage"><ACS /></Link>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeIn" animateOut="animate__fadeOut">
            <GizmoCard />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeIn" animateOut="animate__fadeOut">
            <AristCard />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeIn" animateOut="animate__fadeOut">
            <PrezzeeCard />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeIn" animateOut="animate__fadeOut">
            <WorkeeCard />
          </AnimationOnScroll>
        </div>
        <Footer />  
      </div>
    </>
  )
};

const App = () => {
  return (
    <Scene />
  )
};

export default App;
