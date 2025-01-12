import React from "react";
import PlantCard from "../components/PlantCard";
import "./DashBoard.css";

const DashBoard: React.FC = () => {
  const plants = [
    {
      plantName: "Monstera",
      lastWatered: "Two Days Ago",
      imageUrl:
        "https://images.squarespace-cdn.com/content/v1/56923fa6a976af0bfc533475/4487beac-be01-4ad5-8133-3276fb81972b/IMG_7938.jpg",
      lightNeeds: "Indirect Sunlight",
      soilType: "Well-Draining potting mix",
    },

    {
      plantName: "Fiddle Leaf Fig",
      lastWatered: "8 Days ago",
      imageUrl:
        "https://www.dahingplants.com/cdn/shop/products/detailSSP_2133_2.jpg?v=1639366110",
      lightNeeds: "Bright, indirect sunlight",
      soilType: "Well-draining potting mix",
    },
  ];

  return (
    <div className="dash-board">
      <h1>Your Plants</h1>
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
