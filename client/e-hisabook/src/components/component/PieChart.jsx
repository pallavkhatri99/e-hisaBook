import React from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';

const PieChart = () => {
  const config = {
    data: [
      { type: 'Pending', value: 200 },
      { type: 'Steeled', value: 142 },
    ],
    angleField: 'value',
    colorField: 'type',
    paddingRight: 80,
    label: {
      text: 'value',
      style: {
        fontWeight: 'bold',
      },
    },
    legend: {
      color: {
        title: false,
        position: 'right',
        rowPadding: 5,
      },
    },
  };
  return <Pie {...config} />;
};

export default PieChart;
