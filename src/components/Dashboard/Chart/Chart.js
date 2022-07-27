import React from 'react';
import './Chart.css';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  export const options = {
    responsive: true,
    redraw: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Income',
        data: [200, 300, 400, 100, 0, 150, 60],
        borderColor: '#29A073',
        backgroundColor: '#29A073',
        yAxisID: 'y',
      },
      {
        label: 'Expenses',
        data: [200, 300, 400, 100, 0, 150, 60].map(elem => elem * Math.random()),
        borderColor: '#C8EE44',
        backgroundColor: '#C8EE44',
        yAxisID: 'y1',
      },
    ],
  };

function Chart(props) {
    
  return (
    <>
    <div className='chart--header'>
        <h3 className='chart--heading'>Working Capital</h3>
        <select>
            <option value="3 days">Last 7 days</option>
            <option value="week">Last week</option>
            <option value="month">Last month</option>
            <option value="3 months">Last 3 months</option>
            <option value="6 months">Last 6 months</option>
            <option value="year">Last year</option>
        </select>
    </div>
    
    <Line options={options} data={data} />
    </>
  )
}

export default Chart;