import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { createEchartsOptions } from '../shared/create-echarts-options';
import { px } from '../shared/px';

export const Chart8 = () => {
  const divRef = useRef(null);
  const data = [
    { value: 0.08, name: '五山路' },
    { value: 0.06, name: '新塘路' },
    { value: 0.11, name: '白云' },
    { value: 0.12, name: '龙洞' },
    { value: 0.08, name: '科学城' },
    { value: 0.08, name: '越秀' },
    { value: 0.08, name: '花都湖' }
  ];
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(
      createEchartsOptions({
        xAxis: { show: false },
        yAxis: { show: false },
        grid: { x: 0, x2: 0, y: 0, y2: 0, containLabel: true },
        legend: {
          orient: 'vertical',
          left: 'left',
          top: 'center',
          textStyle: { color: 'white' },
          itemWidth: px(10),
          itemHeight: px(10),
          formatter(name) {
            const value = data.find(i => i.name === name)?.value * 100 + '%';
            return name + ' ' + value;
          }
        },
        series: [
          {
            center: ['60%', '50%'],
            type: 'pie',
            radius: '80%',
            label: { show: false },
            labelLine: { show: false },
            data: data,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
    );
  }, []);
  return <div ref={divRef} className='chart'></div>;
};
