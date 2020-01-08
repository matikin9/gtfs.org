import React from "react";

export default class ButtonCalendar extends React.Component {

    handleClick = () => {
        window.open("/best-practices/#calendartxt");
    }

    render() {
        return <button onClick={this.handleClick}>Calendar.txt - Show best Practices</button>
    }
}
