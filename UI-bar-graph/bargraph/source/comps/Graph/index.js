import { connect } from 'react-redux';
import Graph from './Graph';
import { getData } from '@store/actions/data';
import { getLocations } from '@store/actions/locations';

const mapStateToProps = state => {
	return {
		data: state.data.getData,
		locations: state.locations.locations
	};
};

const mapActionsToProps = dispatch => {
	return {
		actions: {
			getData() {
				dispatch(getData());
			},
			getLocations() {
				dispatch(getLocations());
			},
			uploadLocations() {
				const locations = {
					data: [
						"Rome",
						"Sydney",
						"Porto",
						"London",
						"Paris",
						"Prague",
						"Dubai",
						"Bali",
						"Phuket",
						"Tahiti",
						"Banff",
						"Park City",
						"Costa Rica",
						"Barcelona"
					]
				}
				fetch('http://rest.learncode.academy/api/bestbarchartever/locations', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(locations)
				})
			}
		},
	};
};

export default connect(mapStateToProps, mapActionsToProps)(Graph);
