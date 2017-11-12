import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import Label from '../Label';

test('it does not explode', t => {
	const wrapper = shallow(<Label name="test" />);
	t.is(wrapper.length, 1);
});
