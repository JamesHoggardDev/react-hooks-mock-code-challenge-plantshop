import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((plantsArr) => {
        setPlants(plantsArr);
      });
  }, []);

  function handleAddPlant(newPlant) {
    const updatedPlantsArray = [...plants, newPlant];
    setPlants(updatedPlantsArray);
  }

  const filteredPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(searchTerm.toLowerCase());
  });


  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant}/>
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
      <PlantList plants={filteredPlants}/>
    </main>
  );
}


export default PlantPage;


