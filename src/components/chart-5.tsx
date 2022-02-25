import React from 'react';

export const Chart5 = () => {
  return (
    <div className='战果'>
      <h2>往年战果数对比</h2>
      <table>
        <thead>
          <tr>
            <th>年份</th>
            <th>破案数</th>
            <th>抓捕人数</th>
            <th>并串案件</th>
            <th>现勘录入</th>
            <th>视侦录入</th>
            <th>合成案件</th>
            <th>合计</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2019</td>
            <td>10010</td>
            <td>999</td>
            <td>123</td>
            <td>987</td>
            <td>111</td>
            <td>333</td>
            <td>10086</td>
          </tr>
          <tr>
            <td>2020</td>
            <td>10086</td>
            <td>888</td>
            <td>456</td>
            <td>654</td>
            <td>222</td>
            <td>222</td>
            <td>12315</td>
          </tr>
          <tr>
            <td>2021</td>
            <td>12315</td>
            <td>777</td>
            <td>789</td>
            <td>321</td>
            <td>333</td>
            <td>111</td>
            <td>10010</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
