import React from 'react';
import solarIcon from "./solar.png";
import batteryIcon from "./Battery.png";
import carIcon from "./Car.png";
import heatingWaterIcon from "./water.png";
import lightingHomeIcon from "./Homelight.png";
import generalLoadsIcon from "./load.png"; 



const EnergyDisplay = ({ energyData }) => {
  // Define a mapping between resource types and corresponding icons
  const iconMap = {
    "solar": solarIcon,
    "battery": batteryIcon,
    "electricVehicle": carIcon,
    "Heating Water": heatingWaterIcon,
    "Lighting Home": lightingHomeIcon,
    "load": generalLoadsIcon,
    
    // Add mappings for other resource types and icons as needed
  };

  const calculateNetEnergyTransfer = () => {
    // Calculate net energy transfer logic
    let netEnergyTransfer = energyData.energyResources.reduce((total, resource) => total + resource.power, 0);
    // Add grid power flow to net energy transfer
    netEnergyTransfer += energyData.grid.powerFlow;
    return netEnergyTransfer.toFixed(2); 
  };

  return (
    
    <div className="energy-display">
      <h1>Energy Status</h1>
      
      {energyData.energyResources.map((resource, index) => (
        <div key={index} className="energy-resource">
          <img src={iconMap[resource.type]} alt={resource.name} className="resource-icon" />
          <div className="resource-details">
          <div className="dotted-data-separator"></div>
            <div className="resource-name">{resource.name}</div>
            <div className="power-value">
              Power: {resource.power} kW
              {resource.soc && <span>, SOC: {resource.soc}%</span>}
            </div>
            <div className="online-status">
              Online: {resource.online ? 'Yes' : 'No'}
            </div>
          </div>
        </div>
      ))}
      <div className="net-energy-transfer">
        <strong>Net Energy Transfer:</strong> {calculateNetEnergyTransfer()} kW
      </div>
    </div>
  );
};

export default EnergyDisplay;
