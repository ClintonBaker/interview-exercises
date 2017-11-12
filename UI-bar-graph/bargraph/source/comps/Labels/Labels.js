import React from 'react';
import { Label } from '@comps';
import './styles/Labels.css';

type PropsT = {
	children: any
};

const Labels = (props: PropsT) => {
	return (
		<div styleName="Labels">
			{props.locations.map((location, index) => {
				if (index < props.needed) {
					return <Label key={index} name={location} />;
				}
			})}
		</div>
	);
};

export default Labels;
