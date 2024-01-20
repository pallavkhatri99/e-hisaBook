import { Column } from '@ant-design/plots';
import React from 'react';

const tempdata = [
  {"type": "Given", "Month": "Jan.", "Amount": 18.9},
  {"type": "Given", "Month": "Feb.", "Amount": 20.5},
  {"type": "Given", "Month": "Mar.", "Amount": 22.1},
  {"type": "Given", "Month": "Apr.", "Amount": 23.7},
  {"type": "Given", "Month": "May", "Amount": 25.3},
  {"type": "Given", "Month": "Jun.", "Amount": 26.9},
  {"type": "Pending", "Month": "Jan.", "Amount": 15.2},
  {"type": "Pending", "Month": "Feb.", "Amount": 17.8},
  {"type": "Pending", "Month": "Mar.", "Amount": 19.4},
  {"type": "Pending", "Month": "Apr.", "Amount": 21.0},
  {"type": "Pending", "Month": "May", "Amount": 22.6},
  {"type": "Pending", "Month": "Jun.", "Amount": 24.2}
]




const ColumnChart = () => {
  const config = {
    // data: {
    //   type: 'fetch',
    //   value: tempdata,
    // },
    data : tempdata,
    xField: 'Month',
    yField: 'Amount',
    colorField: 'type',
    color: ({ type }) => {
      if(type === 'Given'){
        return '#3f8600';
      }
      return '#cf1322';
    },
    group: true,
    // columnStyle: {
    //   Given: { fill: '#3f8600' }, // Color for "Given" type
    //   Pending: { fill: '#cf1322' }, // Color for "Pending" type
    // },
    style: {  
      // 矩形四个方向的内边距
      inset: 5,
      // 矩形单个方向的内边距
      // insetLeft:5,
      // insetRight:20,
      // insetBottom:10
      // insetTop:10
    },
  };
  return <Column {...config} />;
};

export default ColumnChart;