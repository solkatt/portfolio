import React, { useRef, useState } from 'react';

import { Canvas, useFrame, useThree } from 'react-three-fiber'
import { softShadows, MeshWobbleMaterial, OrbitControls } from 'drei';
import { useSpring, a } from 'react-spring/three'


import { Html } from "drei"

softShadows();


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




function ThreeAnimation() {



    return (
        <>
            <Canvas
                shadowMap
                colorManagement
                camera={{ position: [-5, 2, 10], fov: 60 }}>


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

                <group>
                    <mesh
                        receiveShadow
                        rotation={[-Math.PI / 2, 0, 0]}
                        position={[0, -3, 0]}>

                        <planeBufferGeometry attach='geometry' args={[100, 100]} />

                        <shadowMaterial attach='material' opacity={0.1} />
                        {/* <meshStandardMaterial attach='material' color='green' /> */}

                    </mesh>


                </group>





                <ReusableBox position={[2, 0, 0]} args={[3, 2, 1]} color='lightblue' speed={2} />
                <ReusableBox position={[2, 1, -5]} color='pink' speed={6} />
                {/* <ReusableBox position={[5, 1, -2]} color='pink' speed={6} /> */}





                {/* <OrbitControls /> */}
            </Canvas>


        </>
    );
}

export default ThreeAnimation;


