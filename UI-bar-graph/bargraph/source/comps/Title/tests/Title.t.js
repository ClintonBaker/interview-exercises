import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import Title from '../Title';

test('it does not explode', t => {
	const wrapper = shallow(<Title name='Hello!'/>);
	t.is(wrapper.length, 1);
});
