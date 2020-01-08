import React from "react";

export default class ButtonTrips extends React.Component {

    handleClick = () => {
        window.open("/best-practices/#tripstxt");
    }

    render() {
        return <button onClick={this.handleClick}>Trips.txt - Show best Practices</button>
    }
}
