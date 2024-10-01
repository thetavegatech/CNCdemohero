import React, { useState, useEffect } from 'react';
import ApexCharts from 'react-apexcharts';
import axios from 'axios';

const ProductionBarChart = () => {
  const [chartData, setChartData] = useState({
    series: [],
    categories: []
  });

  useEffect(() => {
    // Fetch data from your API
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/machine-data/ORG001/allpro');
        const machines = response.data;

        // Extract machine names and total parts produced for each shift
        const machineNames = [];
        const partsProduced = { current: [], previous: [] };

        machines.forEach(machine => {
          const machineId = machine.machineId;
          const shift1Total = machine.latestProductionData.Shift1.TotalPartsProduced || 0;
          const shift2Total = machine.latestProductionData.Shift2.TotalPartsProduced || 0;

          // Add machine name to categories
          machineNames.push(machineId);

          // Determine current and previous shifts based on available data
          if (shift1Total > 0 && shift2Total > 0) {
            // If both shifts have data, shift 1 is the previous shift
            partsProduced.previous.push(shift1Total);
            partsProduced.current.push(shift2Total);
          } else if (shift2Total > 0) {
            // Only shift 2 has data
            partsProduced.current.push(shift2Total);
            partsProduced.previous.push(0); // No data for previous shift
          } else if (shift1Total > 0) {
            // Only shift 1 has data
            partsProduced.current.push(shift1Total);
            partsProduced.previous.push(0); // No data for previous shift
          } else {
            // No data for this machine
            partsProduced.current.push(0);
            partsProduced.previous.push(0);
          }
        });

        // Set chart data with both shifts' data
        setChartData({
          series: [
            {
              name: 'Current Shift',
              data: partsProduced.current
            },
            {
              name: 'Previous Shift',
              data: partsProduced.previous
            }
          ],
          categories: machineNames
        });
      } catch (error) {
        console.error('Error fetching machine data', error);
      }
    };

    fetchData();
  }, []);

  // Chart options
  const options = {
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: 'top'
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: chartData.categories
    },
    yaxis: {
      title: {
        text: 'Machines'
      }
    },
    legend: {
      position: 'top'
    }
  };

  return (
    <div>
      {/* <h2>Total Parts Produced per Machine by Shift</h2> */}
      <ApexCharts
        options={options}
        series={chartData.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default ProductionBarChart;