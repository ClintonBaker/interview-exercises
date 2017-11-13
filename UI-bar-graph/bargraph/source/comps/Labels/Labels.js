import React from "react";
import { Label } from "@comps";
import "./styles/Labels.css";

const Labels = props => {
  return (
    <div styleName="Labels">
      <For each="location" index="idx" of={props.locations}>
        <Label key={idx} name={location} />
      </For>
    </div>
  );
};

export default Labels;
