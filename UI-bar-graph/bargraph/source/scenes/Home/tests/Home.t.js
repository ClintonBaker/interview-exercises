import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import Home from '../Home';

test('it does not explode', t => {
	const wrapper = shallow(<Home />);
	t.is(wrapper.length, 1);
});
