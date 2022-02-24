import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { px } from '../shared/px';
import { createEchartsOptions } from '../shared/create-echarts-options';

export const Chart2 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(
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
          data: [
            '越秀区公安局',
            '海珠河区公安局',
            '天河区公安局',
            '荔湾区公安局',
            '白云区公安局',
            '黄埔区公安局',
            '花都区公安局',
            '番禺区公安局'
          ],
          axisLabel: {
            formatter(val) {
              return val.replace('公安局', '\n公安局');
            }
          }
        },
        series: [
          {
            name: '2011年',
            type: 'bar',
            data: [1, 2, 3, 4, 5, 6, 7, 8],
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: '#2034f9'
                  },
                  {
                    offset: 1,
                    color: '#04a1ff'
                  }
                ])
              }
            }
          },
          {
            name: '2012年',
            type: 'bar',
            data: [2, 3, 4, 5, 6, 7, 8, 9],
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: '#b92ae8'
                  },
                  {
                    offset: 1,
                    color: '#6773e7'
                  }
                ])
              }
            }
          }
        ]
      })
    );
  }, []);

  return (
    <div className='border 破获排名'>
      <h2>案件破获排名</h2>
      <div ref={divRef} className='chart' />
      <div className='legend'>
        <span className='first' /> 破案排名1
        <span className='second' /> 破案排名2
      </div>
    </div>
  );
};
