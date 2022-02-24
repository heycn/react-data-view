import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { px } from '../shared/px';
import { baseEchartOptions } from '../shared/base-echart-options';
import { createEchartsOptions } from '../shared/create-echarts-options';

export const Chart2 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(
      createEchartsOptions({
        ...baseEchartOptions,
        textStyle: {
          fontSize: px(14),
          color: '#fff'
        },
        title: { show: false },
        legend: { show: false },
        grid: {
          x: px(80),
          y: px(40),
          x2: px(40),
          y2: px(40)
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.1]
        },
        yAxis: {
          type: 'category',
          data: ['俄罗斯', '英国', '法国', '巴西', '印度', '美国']
        },
        series: [
          {
            name: '确诊确诊',
            type: 'bar',
            data: [15795570, 18734683, 22468239, 28485502, 42880507, 80366783]
          },
          {
            name: '治愈',
            type: 'bar',
            data: [12836228, 17011869, 560486, 25772807, 42209519, 52453550]
          }
        ]
      })
    );
  }, []);
  return (
    <div className='border 管辖统计'>
      <h2>世界确诊病例排名</h2>
      <div ref={divRef} className='chart'></div>
    </div>
  );
};
