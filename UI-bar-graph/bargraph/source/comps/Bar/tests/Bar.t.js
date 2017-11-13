import test from "ava";
import React from "react";
import { shallow } from "enzyme";
import Bar from "../Bar";

test("it does not explode", t => {
  const wrapper = shallow(<Bar />);
  t.is(wrapper.length, 1);
});
