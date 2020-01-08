import React from "react";

export default class ButtonStops extends React.Component {

    handleClick = () => {
        window.open("/best-practices/#stopstxt");
    }

    render() {
        return <button onClick={this.handleClick}>Stops.txt - Show best Practices</button>
    }
}
