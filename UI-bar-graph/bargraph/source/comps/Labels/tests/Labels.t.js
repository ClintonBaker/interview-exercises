import test from "ava";
import React from "react";
import { shallow } from "enzyme";
import Labels from "../Labels";

test("it does not explode", t => {
  const wrapper = shallow(
    <Labels locations={["Dubai", "Paris", "New York"]} />
  );
  t.is(wrapper.length, 1);
});
