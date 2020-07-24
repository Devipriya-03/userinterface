import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';


const data = {
  labels: ['SST1', 'SST2','TT1', 'TT2', 'TT3', 'TT4', 'TT5', 'CRT1', 'CRT2', 'CRT3'],
  datasets: [
    {
      label: 'Attendance',
      backgroundColor: 'red',
      borderColor: 'red',
      borderWidth: 1,
      hoverBackgroundColor: 'red',
      hoverBorderColor: 'red',
      data: [65, 59, 80, 81, 56, 55, 40]
    },
    {
      label: 'Average Attendance',
      backgroundColor: 'green',
      borderColor: 'green',
      borderWidth: 1,
      hoverBackgroundColor: 'green',
      hoverBorderColor: 'green',
      data: [40, 65, 59, 80, 81, 56, 55 ]
    }
  ]
};


export class BarExample extends React.Component{
  render() {
    return (
      <div>
        <Bar
          data={data}
          options={{
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  min: 0,
                  max: 100,
                  stepSize: 20  
                }
              }]
            },
          }}
        />
      </div>
    );
  }
}