import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import Chart from '../Chart';

test('it does not explode', t => {
	const wrapper = shallow(<Chart data={[8, 4, 10]}/>);
	t.is(wrapper.length, 1);
});
