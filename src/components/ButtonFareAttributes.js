import React from "react";

export default class ButtonFareAttributes extends React.Component {

    handleClick = () => {
        window.open("/best-practices/#fare_attributestxt");
    }

    render() {
        return <button onClick={this.handleClick}>Fare_attributes.txt - Show best Practices</button>
    }
}
