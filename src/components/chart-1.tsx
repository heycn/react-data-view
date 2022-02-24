import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { px } from '../shared/px';
import { baseEchartOptions } from '../shared/base-echart-options';

export const Chart1 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption({
      ...baseEchartOptions,
      xAxis: {
        data: ['待定', '待定', '待定', '待定', '待定'],
        axisTick: { show: false },
        axisLabel: {
          fontSize: px(14),
          formatter(val) {
            if (val.length > 2) {
              const array = val.split('');
              array.splice(2, 0, '\n');
              return array.join('');
            } else {
              return val;
            }
          }
        }
      },

      yAxis: {
        axisLabel: {
          fontSize: px(14)
        }
      },
      series: [
        {
          type: 'bar',
          data: [20, 36, 10, 10, 20]
        }
      ]
    });
  }, []);
  return (
    <div className='border 管辖统计'>
      <h2>各城市统计</h2>
      <div ref={divRef} className='chart'></div>
    </div>
  );
};
