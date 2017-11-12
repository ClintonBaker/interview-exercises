import React from 'react';

import './styles/Label.css';

type PropsT = {
  name: string
};

const Label = (props: PropsT) => {
  return (
    <div styleName="Label">
      <small>{props.name}</small>
    </div>
  );
};

export default Label;
