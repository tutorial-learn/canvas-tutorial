// import FbxRenderer from "./components/FbxRenderer";
import GltfRenderer from "./components/GltfRenderer";

function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <GltfRenderer src={"/assets/sample3.glb"} />
      <GltfRenderer src={"/assets/sample-rich.glb"} />
      <GltfRenderer src={"/assets/sample4.glb"} />
      <GltfRenderer src={"/assets/sample5.glb"} />
    </div>
  );
}

export default App;
