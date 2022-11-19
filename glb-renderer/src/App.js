import GlbRenderer from "./components/GlbRenderer";

function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <GlbRenderer
        src="/assets/nanite_systems_assault_rifle.glb"
        cameraInit={[0, 1, 10]}
        bgColor="#f7f1e3"
        intensity={5}
      />
      <GlbRenderer
        src="/assets/car_sample.glb"
        cameraInit={[0, 3, 15]}
        bgColor="#74b9ff"
        intensity={1}
      />
      <GlbRenderer
        src="/assets/demo.glb"
        cameraInit={[0, 3, 12]}
        bgColor="#d1ccc0"
        intensity={3}
      />
      <GlbRenderer
        src="/assets/irex_sketchfab.glb"
        bgColor="#b8e994"
        cameraInit={[0, 5, 15]}
        intensity={4}
      />
    </div>
  );
}

export default App;
