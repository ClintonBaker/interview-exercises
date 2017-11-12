import 'regenerator-runtime/runtime';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { store } from './store';
import '@styles/reset';

ReactDom.render(
	<Provider store={ store }>
		<App />
	</Provider>,
	document.getElementById('main')
);
