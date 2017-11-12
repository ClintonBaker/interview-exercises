import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { store } from '../../../store';
import $NAME from '../';

test('it does not explode', t => {
	const wrapper = shallow(<Provider store={store}><$NAME /></Provider>);
	t.is(wrapper.length, 1);
});
