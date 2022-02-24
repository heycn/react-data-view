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
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.1],
        },
        grid: {
          x: px(60),
          y: px(20),
          x2: px(0),
          y2: px(50)
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
          }
        ]
      })
    );
  }, []);
  return (
    <div className='border 破获排名'>
      <h2>世界确诊病例排名</h2>
      <div ref={divRef} className='chart'></div>
    </div>
  );
};
