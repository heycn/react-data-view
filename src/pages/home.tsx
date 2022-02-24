import React from 'react';
import { Chart1 } from '../components/chart-1';
import './home.scss';

export const Home = () => {
  return (
    <div className='home'>
      <header>
        <span className='title'>新型冠状病毒肺炎疫情监控大屏</span>
        <div className='tag'>免责声明：数据均为虚构，请以官方实时数据为准！</div>
      </header>
      <main>
        <section className='section1'>
          <Chart1 />
        </section>
        <section className='border section2'></section>
        <section className='border section3'></section>
        <section className='border section4'></section>
        <section className='border section5'></section>
      </main>
    </div>
  );
};
