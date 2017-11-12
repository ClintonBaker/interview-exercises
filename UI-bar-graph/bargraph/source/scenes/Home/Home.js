import React from 'react';
import { Graph } from '@comps';

import './styles/Home.css';

type PropsT = {
	children: any
};

const Home = (props: PropsT) => {
	return (
		<div styleName="Home">
			<Graph />
		</div>
	);
};

export default Home;
