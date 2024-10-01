import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import axios from 'axios';

const SpindleChart = ({ machineId }) => {
  console.log(machineId)
  const [chartData, setChartData] = useState({
    series: [],
    options: {
      chart: {
        type: 'line',
        height: 350,
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        type: 'datetime',
      },
      title: {
        text: 'Spindle Speed and Load Readings',
        align: 'center',
      },
      stroke: {
        curve: 'smooth',
      },
      tooltip: {
        x: {
          formatter: (value) => {
            const date = new Date(value);
            return date.toLocaleString(); // Shows full date and time in tooltip
          },
        },
      },
    },
  });

  const [filters, setFilters] = useState({
    date: '',
    time: '',
    shift: '',
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const applyPredefinedFilter = (filterType) => {
    const now = new Date();
    let startTime;

    switch (filterType) {
      case 'lastHour':
        startTime = new Date(now.getTime() - 60 * 60 * 1000); // 1 hour ago
        setFilters({ date: startTime.toISOString().split('T')[0], time: startTime.toTimeString().split(' ')[0], shift: '' });
        break;
      case 'today':
        setFilters({ date: now.toISOString().split('T')[0], time: '', shift: '' });
        break;
      case 'shift':
        // Assuming a shift is 8 hours, adjust accordingly
        startTime = new Date(now.getTime() - 8 * 60 * 60 * 1000);
        setFilters({ date: startTime.toISOString().split('T')[0], time: startTime.toTimeString().split(' ')[0], shift: 'current' });
        break;
      case 'lastShift':
        // Assuming a shift is 8 hours, and last shift is 16 hours ago
        startTime = new Date(now.getTime() - 16 * 60 * 60 * 1000);
        setFilters({ date: startTime.toISOString().split('T')[0], time: startTime.toTimeString().split(' ')[0], shift: 'last' });
        break;
      default:
        setFilters({ date: '', time: '', shift: '' });
        break;
    }
  };

  const fetchData = async () => {
    try {
      // Build API URL with query parameters
      const { date, time, shift } = filters;
      const query = new URLSearchParams();
      if (date) query.append('date', date);
      if (time) query.append('time', time);
      if (shift) query.append('shift', shift);

      const url = `http://localhost:5001/api/machine-data/ORG001/${machineId}/MonitoringDataLog?subType=Spindle&${query.toString()}`;
      const response = await axios.get(url);
      const data = response.data;

      // Transform data into series format for ApexCharts
      const groupedData = {
        SpindleSpeed: [],
        SpindleLoad: [],
      };

      data.forEach((item) => {
        const time = new Date(item.createdAt).getTime();
        if (item.ParameterName === 'SpindleSpeed') {
          groupedData.SpindleSpeed.push({
            x: time,
            y: Number(item.ParameterValue),
          });
        } else if (item.ParameterName === 'SpindleLoad') {
          groupedData.SpindleLoad.push({
            x: time,
            y: Number(item.ParameterValue),
          });
        }
      });

      const series = Object.keys(groupedData).map((key) => ({
        name: key,
        data: groupedData[key],
      }));

      setChartData((prevData) => ({
        ...prevData,
        series: series,
      }));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [filters]); // Fetch data on filter change

  return (
    <div className="card mb-4 d-flex flex-column h-100">
      <div className="card-header">
        <h5>Spindle Speed and Load Readings</h5>
      </div>
      <div className="card-body flex-fill">
        <div className="filters mb-3 d-flex flex-wrap justify-content-start">
          <button className="btn btn-outline-primary me-2 mb-2" onClick={() => applyPredefinedFilter('shift')}>
            Shift
          </button>
          <button className="btn btn-outline-primary me-2 mb-2" onClick={() => applyPredefinedFilter('lastShift')}>
            Last Shift
          </button>
          <button className="btn btn-outline-primary me-2 mb-2" onClick={() => applyPredefinedFilter('lastHour')}>
            Last Hour
          </button>
          <button className="btn btn-outline-primary me-2 mb-2" onClick={() => applyPredefinedFilter('today')}>
            Today
          </button>
          <input
            type="date"
            name="date"
            className="form-control me-2 mb-2"
            style={{ width: 'auto' }}
            value={filters.date}
            onChange={handleFilterChange}
          />
          <input
            type="time"
            name="time"
            className="form-control me-2 mb-2"
            style={{ width: 'auto' }}
            value={filters.time}
            onChange={handleFilterChange}
          />
          <select
            name="shift"
            className="form-select me-2 mb-2"
            style={{ width: 'auto' }}
            value={filters.shift}
            onChange={handleFilterChange}
          >
            <option value="">Shift</option>
            <option value="1">Shift 1</option>
            <option value="2">Shift 2</option>
            <option value="3">Shift 3</option>
          </select>
          <button className="btn btn-primary btn-sm" onClick={fetchData}>
            Apply
          </button>
        </div>
        <div style={{ height: '230px' }}>
          <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type="line"
            height={250}
          />
        </div>
      </div>
    </div>
  );
};

export default SpindleChart;
