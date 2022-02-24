import { px } from './px';

export const baseEchartOptions = {
  textStyle: {
    fontSize: px(14),
    color: '#fff'
  },
  title: { show: false },
  legend: { show: false },
  grid: {
    x: px(40),
    y: px(20),
    x2: px(20),
    y2: px(50)
  }
};
