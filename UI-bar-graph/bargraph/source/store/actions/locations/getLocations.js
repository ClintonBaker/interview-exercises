import { GET_LOCATIONS } from '../../consts/locations';

export default () => {
	const DATA_ENDPOINT = `http://rest.learncode.academy/api/bestbarchartever/locations`;
	return async dispatch => {
		const response = await fetch(DATA_ENDPOINT);
		const getData = await response.json();
		dispatch({
			type: GET_LOCATIONS,
			data: getData
		});
	};
};
