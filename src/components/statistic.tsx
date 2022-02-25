import React, { useEffect, useState } from 'react';

export const Statistic = () => {
  const [num1, setNum1] = useState('45,235');
  const [num2, setNum2] = useState('365,457');
  useEffect(() => {
    setInterval(() => {
      setNum1(n => {
        const arr1 = n.split('');
        arr1.splice(2, 1);
        const arr2 = Math.floor(parseInt(arr1.join('')) + 1)
          .toString()
          .split('');
        arr2.splice(2, 0, ',');
        return arr2.join('');
      });
    }, 20);
    setInterval(() => {
      setNum2(n => {
        const arr1 = n.split('');
        arr1.splice(3, 1);
        const arr2 = Math.floor(parseInt(arr1.join('')) + 1)
          .toString()
          .split('');
        arr2.splice(3, 0, ',');
        return arr2.join('');
      });
    }, 20);
  }, []);
  return (
    <div className='formWrapper'>
      <div>
        <p>2,876</p>地方公安
      </div>
      <div>
        <p>{num1}</p>违法案件
      </div>
      <div>
        <p>{num2}</p>违法人员
      </div>
    </div>
  );
};
