import React from "react";
import { Bar } from "@comps";

import "./styles/Chart.css";

const Chart = props => {
  return (
    <div styleName="Chart">
      <For each="height" index="idx" of={props.data}>
        <Bar key={idx} height={height} />
      </For>
    </div>
  );
};

export default Chart;
