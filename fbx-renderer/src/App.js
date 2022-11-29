import FbxRenderer from "./components/FbxRenderer";
import GltfRenderer from "./components/GltfRenderer";

function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <GltfRenderer />
      {/* <FbxRenderer
        src="/assets/m03_gargoyle.FBX"
        textureSrc="/assets/m03_gargoyle.png"
      /> */}
      {/* <FbxRenderer
        src="/assets/M04_Orc.FBX"
        textureSrc="/assets/M04_Orc.tga.png"
      /> */}
      {/* <FbxRenderer
        src="/assets/M05_Ogre.FBX"
        textureSrc="/assets/M05_Ogre.png"
      /> */}
      {/* <FbxRenderer
        src="/assets/M06_Ettin.FBX"
        textureSrc="/assets/M06_Ettin.png"
      /> */}
      {/* <FbxRenderer
        src="/assets/mst_zombie_all.fbx"
        textureSrc="/assets/mst_zombie_all.png"
      /> */}
      {/* <FbxRenderer
        src="/assets/mst_death_all.fbx"
        textureSrc="/assets/mst_death_all.png"
      /> */}
    </div>
  );
}

export default App;
