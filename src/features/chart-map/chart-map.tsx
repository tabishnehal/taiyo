// react
import React from 'react';

// chartjs
import {
  Chart as ChartJS,
  registerables
} from 'chart.js';

// feature files
import Map from './map/map';
import LineGraphLayout from './line/lineGraphLayout';

// registering all registerabes
ChartJS.register(...registerables);

// chartmap component
export default function ChartMap() {
  return (
    <div className='flex flex-col gap-1'>

      {/* map */}
      <Map />

      {/* graph layout */}
      <LineGraphLayout />
    </div>
  );
}