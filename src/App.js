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
    <div id='backtoTop' className='wrapper'>
      <Header />
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
  )
};

const App = () => {
  return (
    <Scene />
  )
};

export default App;
