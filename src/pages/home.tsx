import React from 'react';
import './home.scss';

export const Home = () => {
  return (
    <div className='home'>
      <header>
        <span className='title'>新型冠状病毒肺炎疫情分布</span>
        <div className='tag'>免责声明：数据纯属虚构，真实数据请以官方为准！</div>
      </header>
      <main>
        <div className='section1'></div>
        <div className='section2'></div>
        <div className='section3'></div>
        <div className='section4'></div>
        <div className='section5'></div>
      </main>
    </div>
  );
};
