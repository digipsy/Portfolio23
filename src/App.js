import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GizmoCard from "./components/GizmoCard";
import ProjectCard from "./components/ProjectCard";
import PrudentialCard from "./components/PrudentialCard";
import WorkeeCard from "./components/WorkeeCard";
import AristCard from "./components/AristCard";
import PrezzeeCard from "./components/PrezzeeCard";


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
          <div class="subtext text">
              <p>
                  I design high quality interafaces and build front-end. I have designed experiences for more than 30
                  applications during
                  last 4 years. I have already worked with renowned clients such as: American Chemical Society,
                  Prudential
                  Insurance,
                  WellHealth Canada, Arist, Gizmo...
              </p>
              <p class=" text">
                  I can help you build your next web application from scratch or enhance experiences on your existing
                  products.
              </p>
          </div>
        </section>
        <div className='projectCont'>
          <PrudentialCard />
          <ProjectCard />
          <GizmoCard />
          <AristCard />
          <PrezzeeCard />
          <WorkeeCard />
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
