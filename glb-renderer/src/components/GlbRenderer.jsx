import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const CANVAS_WIDTH = 400,
  CANVAS_HEIGHT = 300;

const GlbRenderer = ({ src, cameraInit, bgColor, intensity }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
    });
    const loader = new GLTFLoader();
    const camera = new THREE.PerspectiveCamera(
      75,
      CANVAS_WIDTH / CANVAS_HEIGHT,
      0.1,
      1000
    );

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(CANVAS_WIDTH, CANVAS_HEIGHT);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    renderer.outputEncoding = THREE.sRGBEncoding;

    camera.position.set(...cameraInit);

    scene.background = new THREE.Color(bgColor);

    const light = new THREE.DirectionalLight("0xffff00", intensity);
    scene.add(light);

    loader.load(src, function (gltf) {
      scene.add(gltf.scene);

      function animate() {
        requestAnimationFrame(animate);
        gltf.scene.rotation.y -= 0.004;
        renderer.render(scene, camera);
      }
      animate();
    });
  }, [canvasRef.current]);

  return <canvas ref={canvasRef} />;
};

export default GlbRenderer;
