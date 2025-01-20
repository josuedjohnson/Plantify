import React, { useState } from "react";
import "./PlantCard.css";

interface PlantCardProps {
  plantName: string;
  lastWatered: string;
  imageUrl: string;
  lightNeeds: string;
  soilType: string;
}

const PlantCard: React.FC<PlantCardProps> = ({
  plantName,
  lastWatered,
  imageUrl,
  lightNeeds,
  soilType,
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => setShowDetails((state) => !state);

  return (
    <div className="plant-card">
      <img src={imageUrl} alt={plantName} className="plant-image" />
      <h2>{plantName}</h2>
      <p>Last Watered: {lastWatered}</p>
      <button onClick={toggleDetails}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>

      {showDetails && (
        <div>
          <p>
            <strong>Soil Type:</strong> {soilType}
          </p>
          <p>
            <strong>Light Needs:</strong> {lightNeeds}
          </p>
        </div>
      )}

      <button>Water Logging</button>
      <button>Add Note</button>
    </div>
  );
};

export default PlantCard;
