import { useState } from "react";
import MaterialCard from "../MaterialCard/MaterialCard";
import SearchBar from "../SearchBar/SearchBar";
import "./Main.css";

function Main({
  materials,
  setIsMaterialDetailModalOpen,
  setSelectedMaterial,
}) {
  return (
    <main className="main">
      <SearchBar />
      <div className="material-cards">
        {materials.map((material) => (
          <MaterialCard
            key={material.id}
            material={material}
            setSelectedMaterial={setSelectedMaterial}
            setIsMaterialDetailModalOpen={setIsMaterialDetailModalOpen}
          />
        ))}
      </div>
    </main>
  );
}

export default Main;
