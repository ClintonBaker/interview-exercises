import React from 'react';

import './styles/Bar.css';

type PropsT = {
  children: any
};

const heightScale = 1.5;

const Bar = (props: PropsT) => {
  return (
    <div styleName="Bar" style={{height: props.height * heightScale}}>
    </div>
  );
};

export default Bar;
