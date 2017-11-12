import { GET_DATA } from '../../consts/data';

const initialState = { getData: [] };

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_DATA:
			return { ...state, getData: action.data.data };
			break;
		default:
			return state;
	}
};
