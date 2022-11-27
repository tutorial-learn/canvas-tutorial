import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { LoopOnce } from "three";
import {
  useFBX,
  OrbitControls,
  useTexture,
  useAnimations,
} from "@react-three/drei";
import { useState } from "react";

const Scene = ({ src, textureSrc, replayTrigger, playEndTrigger }) => {
  const fbx = useFBX(src);
  const texture = useTexture(textureSrc);
  const targetRef = useRef();
  const { actions } = useAnimations(fbx.animations, targetRef);

  const actionOptions = Object.keys(actions);

  useEffect(() => {
    if (actionOptions.length === 0 || !replayTrigger) return;
    actions[actionOptions[0]].reset().setLoop(LoopOnce).setDuration(10).play();
  }, [actions, actionOptions, replayTrigger]);

  useFrame(() => {
    if (actionOptions.length === 0 || !replayTrigger) return;
    if (!actions[actionOptions[0]].isRunning()) playEndTrigger();
  });

  return (
    <group ref={targetRef} dispose={null} scale={1.1}>
      <primitive object={fbx} />
      {fbx.children?.map((child, idx) => {
        if (!child.type.includes("Mesh")) return null;
        return (
          <mesh {...child} key={idx}>
            <meshLambertMaterial map={texture} />
          </mesh>
        );
      })}
    </group>
  );
};

const FbxRenderer = ({ src, textureSrc }) => {
  const [isPlay, setIsPlay] = useState(true);

  const playHandler = () => {
    if (!isPlay) {
      setIsPlay(true);
    }
  };

  const playEndHandler = () => {
    setIsPlay(false);
  };

  return (
    <Canvas style={{ width: 300, height: 300 }} onClick={playHandler}>
      <Suspense fallback={null}>
        <Scene
          src={src}
          textureSrc={textureSrc}
          replayTrigger={isPlay}
          playEndTrigger={playEndHandler}
        />
      </Suspense>
      <ambientLight intensity={0.3} />
      <directionalLight intensity={1} />
      {/* <Environment preset="sunset" background /> */}
      <OrbitControls
        target-y={2}
        minPolarAngle={1.5}
        maxPolarAngle={1.5}
        enableZoom={false}
      />
    </Canvas>
  );
};

export default FbxRenderer;
