import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
const px = n => (n / 2420) * (window as any).pageWidth;

export const Chart1 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption({
      textStyle: {
        fontSize: px(14),
        color: '#fff'
      },
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
      grid: {
        x: px(40),
        y: px(40),
        x2: px(40),
        y2: px(40)
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
      <h2>案发派出所管辖统计</h2>
      <div ref={divRef} className='chart'></div>
    </div>
  );
};
