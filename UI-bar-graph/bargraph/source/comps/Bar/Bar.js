import React from "react";

import "./styles/Bar.css";

const heightScale = 1.5;

const Bar = props => {
  return <div styleName="Bar" style={{ height: props.height * heightScale }} />;
};

export default Bar;
