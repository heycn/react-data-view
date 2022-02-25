import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { createEchartsOptions } from '../shared/create-echarts-options';

export const Chart1 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(
      createEchartsOptions({
        xAxis: {
          data: ['天河区', '白云区', '海珠区', '黄埔区', '越秀区'],
          axisTick: { show: false },
          axisLine: {
            lineStyle: { color: '#083B70' }
          },
          axisLabel: {
            formatter(val: string) {
              if (val.length > 3) {
                const array = val.split('');
                array.splice(3, 0, '\n');
                return array.join('');
              } else {
                return val;
              }
            }
          }
        },

        yAxis: {
          splitLine: { show: false },
          axisLine: {
            show: true,
            lineStyle: { color: '#083B70' }
          }
        },
        series: [
          {
            type: 'bar',
            data: [43, 30, 26, 41, 15]
          }
        ]
      })
    );
  }, []);

  return (
    <div className='border 管辖统计'>
      <h2>案发派出所管辖统计</h2>
      <div ref={divRef} className='chart'></div>
    </div>
  );
};
