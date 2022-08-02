import React, { useState } from 'react';
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
        data: [200, 300, 400, 100, 0, 150, 60].map(elem => elem * Math.random() * 5 ),
        borderColor: '#C8EE44',
        backgroundColor: '#C8EE44',
        yAxisID: 'y1',
      },
    ],
  };

function Chart(props) {

  const [selectedPeriod, setSelectedPeriod] = useState('week');

  function getPreviousMonthLength() {
    const date = new Date();
    return new Date(date.getFullYear(), date.getMonth(), 0).getDate(); 
  }

  const selectOptions = [
    {value: 3, text: 'Last 3 days' },
    {value: 7, text: 'Last week' },
    {value: getPreviousMonthLength(), text: 'Last Month' },
    {value: '3-months', text:'Last 3 months' },
    {value: '6-months', text:'Last 6 months' },
    {value: 'year' , text:'Last year' },
  ]

  function handlePeriodChange(e) {
    console.log(e.target.value);
    setSelectedPeriod(e.target.value);
  }

    
  return (
    <>
    <div className='chart--header'>
        <h3 className='chart--heading'>Working Capital</h3>
        <select value={selectedPeriod} onChange={e => handlePeriodChange(e)} className='chart--select'>
          {selectOptions.map( (elem)=> (
            <option key={elem.value} className='chart--option' value={elem.value}>{elem.text}</option>
          ))}
        </select>
    </div>
    
    <Line options={options} data={data} />
    </>
  )
}

export default Chart;