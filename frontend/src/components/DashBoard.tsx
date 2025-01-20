import React, { useState, useEffect } from "react";
import PlantCard from "../components/PlantCard";
import { searchPlants } from "../api";
import axios from "axios";
import "./DashBoard.css";

interface Plant {
  plantName: string;
  lastWatered: string;
  imageUrl: string;
  lightNeeds: string;
  soilType: string;
}

const DashBoard: React.FC = () => {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Plant[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setHasSearched(true);

    try {
      const response = await searchPlants(searchQuery);
      const results = response.map((plant: any) => ({
        plantName: plant.common_name || "Unknown",
        lastWatered: "Not Watered Yet",
        imageUrl: plant.default_image?.regular_url || "",
        lightNeeds: plant.sunlight?.join(", ") || "Unknown",
        soilType: plant.soil || "Standard Potting Mix",
      }));
      console.log("Mapped Results:", results); // Log the formatted results
      setSearchResults(results);
    } catch (error) {
      console.error("Error Fetching Plants:", error);
    }
  };

  const addPlant = (plant: Plant) => {
    setPlants((prevPlants) => [...prevPlants, plant]);
  };

  return (
    <div className="dash-board">
      <h1>Your Plants</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for a plant..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div className="search-results">
        <h2>Search Results:</h2>
        {searchResults.length === 0 && hasSearched && <p>No results found</p>}
        {searchResults.length > 0
          ? searchResults.map((plant, index) => (
              <div key={index} className="plant-result">
                <PlantCard
                  plantName={plant.plantName}
                  lastWatered={plant.lastWatered}
                  imageUrl={plant.imageUrl}
                  lightNeeds={plant.lightNeeds}
                  soilType={plant.soilType}
                />
                <button onClick={() => addPlant(plant)}>
                  Add to My Plants
                </button>
              </div>
            ))
          : null}
      </div>

      <div className="plant-grid">
        {plants.map((plant, index) => (
          <PlantCard
            key={index}
            plantName={plant.plantName}
            lastWatered={plant.lastWatered}
            imageUrl={plant.imageUrl}
            lightNeeds={plant.lightNeeds}
            soilType={plant.soilType}
          />
        ))}
      </div>
    </div>
  );
};

export default DashBoard;
