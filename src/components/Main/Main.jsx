import { useState } from "react";
import MaterialCard from "../MaterialCard/MaterialCard";
import SearchBar from "../SearchBar/SearchBar";
import "./Main.css";

function Main({
  materials,
  setIsMaterialDetailModalOpen,
  setSelectedMaterial,
  onDeleteMaterial,
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredMaterials = materials.filter((material) =>
    material.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <main className="main">
      <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <div className="material-cards">
        {filteredMaterials.map((material) => (
          <MaterialCard
            key={material.id}
            material={material}
            setSelectedMaterial={setSelectedMaterial}
            setIsMaterialDetailModalOpen={setIsMaterialDetailModalOpen}
            onDeleteMaterial={onDeleteMaterial}
          />
        ))}
      </div>
    </main>
  );
}

export default Main;
