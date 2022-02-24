import React, { useEffect, useRef } from 'react';
import './home.scss';
import * as echarts from 'echarts';

const px = n => (n / 2420) * (window as any).pageWidth;

export const Home = () => {
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
    <div className='home'>
      <header>
        <span className='title'>新型冠状病毒肺炎疫情监控大屏</span>
        <div className='tag'>免责声明：数据均为虚构，请以官方实时数据为准！</div>
      </header>
      <main>
        <section className='section1'>
          <div className='border 管辖统计'>
            <h2>案发派出所管辖统计</h2>
            <div ref={divRef} className='chart'></div>
          </div>
        </section>
        <section className='border section2'></section>
        <section className='border section3'></section>
        <section className='border section4'></section>
        <section className='border section5'></section>
      </main>
    </div>
  );
};
