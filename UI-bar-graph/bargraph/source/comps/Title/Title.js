import React from 'react';

import './styles/Title.css';

type PropsT = {
  name: string
};

const Title = (props: PropsT) => {
  return (
    <h3 styleName='Title'>{props.name}</h3>
  );
};

export default Title;
