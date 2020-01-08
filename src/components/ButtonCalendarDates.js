import React from "react";

export default class ButtonCalendarDate extends React.Component {

    handleClick = () => {
        window.open("/best-practices/#calendardatestxt");
    }

    render() {
        return <button onClick={this.handleClick}>Calendar_dates.txt - Show best Practices</button>
    }
}
