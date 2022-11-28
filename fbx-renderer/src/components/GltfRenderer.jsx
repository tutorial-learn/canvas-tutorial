import React, { useRef, Suspense } from "react";
import { useGLTF, useAnimations, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";

function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/assets/punch.gltf");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions["punch"]?.play();
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null} scale={3}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            name="Ch03"
            geometry={nodes.Ch03.geometry}
            material={materials.Ch03_Body}
            skeleton={nodes.Ch03.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/assets/punch.gltf");

const GltfRenderer = () => {
  return (
    <Canvas style={{ width: 300, height: 300 }}>
      <perspectiveCamera position={[1, 200, 1]} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <ambientLight intensity={0.5} />
      <directionalLight intensity={1.5} />
      {/* <Environment preset="sunset" background /> */}
      <OrbitControls
        target-y={2}
        minPolarAngle={1.5}
        maxPolarAngle={1.5}
        // enableZoom={false}
      />
    </Canvas>
  );
};

export default GltfRenderer;
