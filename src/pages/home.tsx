import React from 'react';
import { Chart1 } from '../components/chart-1';
import { Chart2 } from '../components/chart-2';
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
        <section className='border section2'></section>
        <section className='border section3'></section>
        <section className='border section4'></section>
        <section className='border section5'></section>
      </main>
    </div>
  );
};
