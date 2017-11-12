import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import $NAME from '../$NAME';

test('it does not explode', t => {
	const wrapper = shallow(<$NAME />);
	t.is(wrapper.length, 1);
});
