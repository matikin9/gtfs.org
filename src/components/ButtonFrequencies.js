import React from "react";

export default class ButtonFrequencies extends React.Component {

    handleClick = () => {
        window.open("/best-practices/#frequenciesxt");
    }

    render() {
        return <button onClick={this.handleClick}>Frequencies.txt - Show best Practices</button>
    }
}
