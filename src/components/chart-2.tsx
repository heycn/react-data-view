import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { px } from '../shared/px';
import { createEchartsOptions } from '../shared/create-echarts-options';
import { baseEchartOptions } from '../shared/base-echart-options';

export const Chart2 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = [
    { name: '越秀区公安局', 2020: 2, 2021: 3 },
    { name: '海珠区公安局', 2020: 2, 2021: 3 },
    { name: '天河区公安局', 2020: 2, 2021: 3 },
    { name: '荔湾区公安局', 2020: 2, 2021: 3 },
    { name: '白云区公安局', 2020: 2, 2021: 3 },
    { name: '黄埔区公安局', 2020: 2, 2021: 3 },
    { name: '花都区公安局', 2020: 2, 2021: 3 },
    { name: '番禺区公安局', 2020: 2, 2021: 3 }
  ];
  useEffect(() => {
    setInterval(() => {
      const newData = [
        { name: '越秀区公安局', 2020: Math.random() * 10, 2021: Math.random() * 10 },
        { name: '海珠区公安局', 2020: Math.random() * 10, 2021: Math.random() * 10 },
        { name: '天河区公安局', 2020: Math.random() * 10, 2021: Math.random() * 10 },
        { name: '荔湾区公安局', 2020: Math.random() * 10, 2021: Math.random() * 10 },
        { name: '白云区公安局', 2020: Math.random() * 10, 2021: Math.random() * 10 },
        { name: '黄埔区公安局', 2020: Math.random() * 10, 2021: Math.random() * 10 },
        { name: '花都区公安局', 2020: Math.random() * 10, 2021: Math.random() * 10 },
        { name: '番禺区公安局', 2020: Math.random() * 10, 2021: Math.random() * 10 }
      ];
      x(newData);
    }, 1000);
  }, []);
  const x = data => {
    myChart.current.setOption(
      createEchartsOptions({
        grid: {
          x: px(80),
          y: px(20),
          x2: px(0),
          y2: px(20)
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
          splitLine: { show: false },
          axisLabel: { show: false }
        },
        yAxis: {
          axisTick: { show: false },
          type: 'category',
          data: data.map(i => i.name),
          axisLabel: {
            formatter(val) {
              return val.replace('公安局', '\n公安局');
            }
          }
        },
        series: [
          {
            name: '2020年',
            type: 'bar',
            data: data.map(i => i[2020]),
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: '#2034F9'
                  },
                  {
                    offset: 1,
                    color: '#04A1FF'
                  }
                ])
              }
            }
          },
          {
            name: '2021年',
            type: 'bar',
            data: data.map(i => i[2021]),
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: '#B92AE8'
                  },
                  {
                    offset: 1,
                    color: '#6773E7'
                  }
                ])
              }
            }
          }
        ]
      })
    );
  };
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data);
  }, []);

  return (
    <div className='bordered 破获排名'>
      <h2>案件破获排名</h2>
      <div ref={divRef} className='chart' />
      <div className='legend'>
        <span className='first' /> 破案排名1
        <span className='second' /> 破案排名2
      </div>
    </div>
  );
};
