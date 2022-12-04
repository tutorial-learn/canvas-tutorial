import React, { useRef, Suspense } from "react";
import { useAnimations, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";

function Model(props) {
  const group = useRef();
  const { nodes, scene, materials, animations } = useGLTF(props.src);

  const { actions } = useAnimations(animations, group);
  const options = Object.keys(actions);
  const nodeValues = Object.values(nodes).filter((node) =>
    node.type.includes("Mesh")
  );

  useEffect(() => {
    (actions["Idle"] || actions[options[0]])?.play();
  }, [actions, options]);

  return (
    <group ref={group} dispose={null} scale={props.scale}>
      <primitive object={scene} />
      {nodeValues?.map((node, idx) => {
        return (
          <skinnedMesh
            frustumCulled={false}
            key={idx}
            geometry={node?.geometry}
            material={materials["real"]}
            skeleton={node?.skeleton}
          />
        );
      })}
    </group>
  );
}

const GltfRenderer = ({ src, textureSrc, scale }) => {
  return (
    <Canvas style={{ width: 300, height: 300 }}>
      <Suspense fallback={null}>
        <Model src={src} textureSrc={textureSrc} scale={scale || 0.05} />
      </Suspense>
      <ambientLight intensity={0.5} />
      <directionalLight intensity={1} />
      <OrbitControls
        target-y={3}
        minPolarAngle={1.5}
        maxPolarAngle={1.5}
        enableZoom={false}
      />
    </Canvas>
  );
};

export default GltfRenderer;
