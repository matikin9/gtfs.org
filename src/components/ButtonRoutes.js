import React from "react";

export default class ButtonRoutes extends React.Component {

    handleClick = () => {
        window.open("/best-practices/#routestxt");
    }

    render() {
        return <button onClick={this.handleClick}>Routes.txt - Show best Practices</button>
    }
}
