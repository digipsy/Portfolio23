import React, { useState, useRef, Suspense } from "react";
import * as THREE from "three";
import { Canvas, extend, useFrame, useLoader } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import glsl from "babel-plugin-glsl/macro";
import PrudentialBanner from "./pud-banner.png";
import ProjectCardExpanded from "./ProjectCont_Expanded"
// import { AnimationOnScroll } from 'react-animation-on-scroll';
// import "animate.css/animate.min.css";

const WaveyShaderMaterial = shaderMaterial (
    // Uniform
    {
      uTime: 0,
      uColor: new THREE.Color(0.0, 0.0, 0.0),
      uTexture: new THREE.Texture()
    },
    // Vertex Shader
    glsl`
      precision mediump float;
   
      varying vec2 vUv;
      varying float vWave;
  
      uniform float uTime;
  
      #pragma glslify: snoise3 = require(glsl-noise/simplex/3d.glsl);
  
      void main() {
        vUv = uv;
  
        vec3 pos = position;
        float noiseFreq = 1.6;
        float noiseAmp = 0.2;
        vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);
        pos.z += snoise3(noisePos) * noiseAmp;
        vWave = pos.z;
  
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);  
      }
    `,
    // Fragment Shader
    glsl`
      precision mediump float;
  
      uniform vec3 uColor;
      uniform float uTime;
      uniform sampler2D uTexture;
  
      varying vec2 vUv;
      varying float vWave;
  
      void main() {
        float wave = vWave * 0.12;
        vec3 texture = texture2D(uTexture, vUv + wave).rgb;
        gl_FragColor = vec4(texture, 1.0); 
      }
    `
  );
  
  extend({ WaveyShaderMaterial });
  
  const Wave = () => {
    const ref = useRef();
    useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()));
  
    const [image] = useLoader(THREE.TextureLoader, [
      PrudentialBanner
    ]);
  
    return (
      <mesh>
        <planeBufferGeometry args={[16, 9]} />
        <waveyShaderMaterial uColor={"hotpink"} ref={ref} uTexture={image} />
      </mesh>
    );
  };

const ProjectCard = () => {

  const [show, setShow] = useState(false);

  const featuredImage = PrudentialBanner;
  
  return (
    <div className="btn" type="button" onClick={() => setShow(true)}>
      <div class="projectItem">
          <Canvas className='wid80' camera={{ fov: 28, position: [0, 0, 12] }}>
            <Suspense fallback={null}>
              <Wave />
            </Suspense>
          </Canvas>
          <div class="projectName">
              <h2 class=" text">
                  <span> <sup>01</sup> </span>
                  Prudential Insurance
              </h2>
              <ProjectCardExpanded show={show} setShow={setShow}>
                  <div className="pageContentCont">
                    <h2 className="centeritBig">Prudential Insurance</h2>
                    <img className="featuredImage" src={featuredImage} alt="#"></img>
                    <p>
                    pageContentContpageContentContpageContentContpageContentContpageContentContpageContentContpageCont
                    entContpageContentContpageContentContpageContentContpageContentContpageContentContpageContentContpageContentContpag
                    eContentContpageContentContpageContentContpageContentContpageContentContpageContentContpageContentContpageContentContpageContentContp
                    ageContentContpageContentContpageContentContpageContentContpageContentContpageContentContpageC
                    ontentContpageContentContpageContentContpageContentContpageContentContpageContentContpageContentContpageContentContpageContentCont
                    </p>
                    
                  </div>
              </ProjectCardExpanded>
          </div>
      </div>
    </div>
  );
};

export default ProjectCard;