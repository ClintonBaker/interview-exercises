import React from 'react';
import { Bar } from '@comps';

import './styles/Chart.css';

type PropsT = {
  children: any
};

const Chart = (props: PropsT) => {
  return (
    <div styleName="Chart">
      {props.data.map((height, index) => {
        return <Bar key={index} height={height} />;
      })}
    </div>
  );
};

export default Chart;
