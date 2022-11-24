import FbxRenderer from "./components/FbxRenderer";

function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <FbxRenderer
        src="/assets/Samba_Dancing.fbx"
        cameraInit={[0, 1, 10]}
        bgColor="#f7f1e3"
        intensity={5}
      />
    </div>
  );
}

export default App;
