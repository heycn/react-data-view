import React from 'react';
import { Chart1 } from '../components/chart-1';
import { Chart2 } from '../components/chart-2';
import { Chart3 } from '../components/chart-3';
import { Chart4 } from '../components/chart-4';
import { Chart5 } from '../components/chart-5';
import { Chart6 } from '../components/chart-6';
import { Chart7 } from '../components/chart-7';
import { Chart8 } from '../components/chart-8';
import { Chart9 } from '../components/chart-9';
import './home.scss';

export const Home = () => {
  return (
    <div className='home'>
      <header>
        <span className='title'>广州智慧公安数据可视化系统</span>
      </header>
      <main>
        <section className='section1'>
          <Chart1 />
          <Chart2 />
        </section>
        <section className='border section2'>
          <Chart3 />
          <Chart4 />
        </section>
        <section className='border section3'>
          <Chart5 />
        </section>
        <section className='section4'>
          <Chart6 />
        </section>
        <section className='section5'>
          <div className='border row1 案发类型'>
            <h2>案发类型统计</h2>
            <div className='charts'>
              <Chart7 />
            </div>
          </div>
          <div className='border row2 案发街道'>
            <h2>案发街道统计</h2>
            <div className='charts'>
              <Chart8 />
              <Chart9 />
            </div>
          </div>
          <div className='border row3 作案手段'>
            <h2>作案手段分析</h2>
          </div>
        </section>
      </main>
      <footer>© heycn 2022 - 免责声明：本页数据仅供参考 请以官方数据为准</footer>
    </div>
  );
};
