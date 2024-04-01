// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import EnergyDisplay from './EnergyDisplay';
import GridStatus from './GridStatus.js';

function App() {
  
  const [energyData, setEnergyData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/energyData.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setEnergyData(data);
      } catch (error) {
        console.error('Error fetching energy data:', error);
      }
    };

    // Fetch data initially
    fetchData();

    // Fetch data at intervals for real-time updates
    const interval = setInterval(fetchData, 5000); // Fetch every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);
  
  const gridStatus = {
    status: 'Connected', // Example grid status
    powerFlow: 0 // Example power flow in kW
  };
  return (
    <div className="App">
      {energyData ? <EnergyDisplay energyData={energyData} /> : <p>Loading energy data...</p>}
      <GridStatus gridStatus={gridStatus} />
    </div>
  );
}

export default App;
