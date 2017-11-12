import { GET_LOCATIONS } from '../../consts/locations';

const initialState = { locations: [] };

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_LOCATIONS:
			return { ...state, locations: action.data[0].data };
			break;
		default:
			return state;
	}
};