import React from 'react';
import { Chart1 } from '../components/chart-1';
import { Chart2 } from '../components/chart-2';
import { Chart3 } from '../components/chart-3';
import { Chart4 } from '../components/chart-4';
import { Chart5 } from '../components/chart-5';
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
        <section className='border section4'></section>
        <section className='border section5'></section>
      </main>
      <footer>© heycn 2022 - 免责声明：本页数据仅供参考 请以官方数据为准</footer>
    </div>
  );
};
