import React, { useRef, Suspense } from "react";
import * as THREE from "three";
import { Canvas, extend, useFrame, useLoader } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import glsl from "babel-plugin-glsl/macro";
import ACS from "../imgs/acs-banner.png";

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
      ACS
    ]);
  
    return (
      <mesh>
        <planeBufferGeometry args={[16, 9]} />
        <waveyShaderMaterial uColor={"hotpink"} ref={ref} uTexture={image} />
      </mesh>
    );
  };

const AristCard = () => {
  return (
    <div class="projectItem">
        <Canvas className='wid80' camera={{ fov: 28, position: [0, 0, 12] }}>
          <Suspense fallback={null}>
            <Wave />
          </Suspense>
        </Canvas>
        <div class="projectName">
            <h2 class=" text">
                <span> <sup>04</sup> </span>
                Arist
            </h2>
        </div>
    </div>
  );
};

export default AristCard;