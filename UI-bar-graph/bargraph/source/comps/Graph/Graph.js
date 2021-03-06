import React from "react";
import { Title, Chart, Labels } from "@comps";

import "./styles/Graph.css";

class Graph extends React.Component {
  state = {
    graphWidth: 0
  };
  componentWillMount() {
    this.props.actions.getData();
    this.props.actions.getLocations();
  }
  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.setState(state => {
        return {
          graphWidth: this.props.data.length * 60 + 65
        };
      });
    }
  }

  render({ props, state } = this) {
    return (
      <div styleName="Graph" style={{ width: this.state.graphWidth }}>
        <Title name="Most Frequented Vacation Destinations" />
        <Choose>
          <When condition={state.graphWidth > 0}>
            <Chart data={props.data} />
            <Labels locations={props.locations.splice(0, props.data.length)} />
          </When>
        </Choose>
      </div>
    );
  }
}

export default Graph;
