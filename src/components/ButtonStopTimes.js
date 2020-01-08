import React from "react";

export default class ButtonStopTimes extends React.Component {

    handleClick = () => {
        window.open("/best-practices/#stops_timestxt");
    }

    render() {
        return <button onClick={this.handleClick}>Stop_times.txt - Show best Practices</button>
    }
}
