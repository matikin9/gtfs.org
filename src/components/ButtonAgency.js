import React from "react";

export default class ButtonAgency extends React.Component {

    handleClick = () => {
        window.open("/best-practices/#agencytxt");
    }

    render() {
        return <button onClick={this.handleClick}>Agency.txt - Show best Practices</button>
    }
}
