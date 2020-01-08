import React from "react";

export default class ButtonFareRules extends React.Component {

    handleClick = () => {
        window.open("/best-practices/#fare_rulestxt");
    }

    render() {
        return <button onClick={this.handleClick}>Fare_rules.txt - Show best Practices</button>
    }
}
