import React from "react";

export default class ButtonFeedInfo extends React.Component {

    handleClick = () => {
        window.open("/best-practices/#feed_infotxt");
    }

    render() {
        return <button onClick={this.handleClick}>Feed_info.txt - Show best Practices</button>
    }
}
