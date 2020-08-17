import React, { useRef, useState } from 'react';

import { Canvas, useFrame, useThree, Terrain } from 'react-three-fiber'
import { softShadows, MeshWobbleMaterial, OrbitControls } from 'drei';
import { useSpring, a } from 'react-spring/three'
import * as THREE from 'three';
import { noise } from '../assets/perlin.js'
import { Html } from "drei"
import { PlaneBufferGeometry } from 'three';

softShadows();





const Landscape = () => {


    return (

        <>
            <group>
                <mesh
                    receiveShadow
                    rotation={[-Math.PI / 2, 0, 0]}
                    position={[0, -3, 0]}>


                    <meshPhongMaterial color={0xff33} specular={0x773300} side={THREE.DoubleSide} flatShading shininess={3} />
                    <shadowMaterial attach='material' opacity={0.1} />
                    {/* <meshStandardMaterial attach='material' color='green' /> */}

                </mesh>


            </group>





        </>


    )



}

























const ReusableBox = ({ position, args, color, speed }) => {

    const mesh = useRef(null)
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

    const [expand, setExpand] = useState(false);
    const props = useSpring({
        scale: expand ? [1.4, 1.4, 1.4,] : [1, 1, 1],
    })

    return (

        <a.mesh
            onClick={() => setExpand(!expand)}
            castShadow ref={mesh}
            position={position}
            scale={props.scale} >
            <boxBufferGeometry attach='geometry' args={args} />
            {/* <meshStandardMaterial attach='material' color={color} /> */}
            <MeshWobbleMaterial attach='material' color={color} speed={speed} factor={0.6} />

            {/* <Html scaleFactor={20}>
                <div class="content">
                    <h2>Suspense </h2>

                </div>

            </Html> */}

        </a.mesh >

    )
}







function ThreeAnimationTwo() {



    return (
        <>
            <Canvas
                shadowMap
                colorManagement
                camera={{ position: [-5, 5, 10], fov: 70 }}>


                <ambientLight intensity={0.3} />
                <directionalLight
                    castShadow
                    position={[0, 10, 0]}
                    intensity={1.5}


                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                    shadow-camera-far={50}
                    shadow-camera-left={-10}
                    shadow-camera-right={10}
                    shadow-camera-top={10}
                    shadow-camera-bottom={-10}


                />
                <pointLight position={[-10, 0, -20]} intensity={0.5} />
                <pointLight position={[0, -10, 0]} intensity={1.5} />





                <ReusableBox position={[2, 0, 0]} args={[3, 2, 1]} color='lightblue' speed={2} />
                <ReusableBox position={[2, 1, -5]} color='pink' speed={6} />
                {/* <ReusableBox position={[5, 1, -2]} color='pink' speed={6} /> */}



                <Landscape />


                {/* <OrbitControls /> */}
            </Canvas>


        </>
    );
}

export default ThreeAnimationTwo;


