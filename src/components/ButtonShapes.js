import React from "react";

export default class ButtonShapes extends React.Component {

    handleClick = () => {
        window.open("/best-practices/#shapestxt");
    }

    render() {
        return <button onClick={this.handleClick}>Shapes.txt - Show best Practices</button>
    }
}

