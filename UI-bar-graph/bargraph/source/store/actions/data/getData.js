import { GET_DATA } from "../../consts/data";

export default () => {
  const DATA_ENDPOINT = `https://rawgit.com/ngva-dev/interview-exercises/master/UI-bar-graph/data.json`;
  return async dispatch => {
    const response = await fetch(DATA_ENDPOINT);
    const data = await response.json();
    dispatch({
      type: GET_DATA,
      data: data
    });
  };
};
