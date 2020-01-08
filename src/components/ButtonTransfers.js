import React from "react";

export default class ButtonTransfers extends React.Component {

    handleClick = () => {
        window.open("/best-practices/#transferstxt");
    }

    render() {
        return <button onClick={this.handleClick}>Transfers.txt - Show best Practices</button>
    }
}

