import { Canvas } from "@react-three/fiber";
import { useFBX, OrbitControls, useTexture } from "@react-three/drei";
import { Suspense } from "react";

const Scene = ({ src, textureSrc }) => {
  const fbx = useFBX(src);
  const texture = useTexture(textureSrc);

  return (
    <group>
      {fbx.children?.map((child) => {
        return (
          <mesh {...child} scale={1.2}>
            <meshStandardMaterial map={texture} />
          </mesh>
        );
      })}
    </group>
  );
};

const FbxRenderer = ({ src, textureSrc }) => {
  console.log(src);
  return (
    <Canvas style={{ width: 300, height: 300 }}>
      <Suspense fallback={null}>
        <Scene src={src} textureSrc={textureSrc} />
        <ambientLight intensity={0.3} />
        <directionalLight />
        {/* <Environment preset="sunset" background /> */}
        <OrbitControls
          target-y={2}
          minPolarAngle={1}
          maxPolarAngle={1}
          enableZoom={false}
        />
      </Suspense>
    </Canvas>
  );
};

export default FbxRenderer;
