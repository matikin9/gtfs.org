import React from "react";
import {Button} from 'semantic-ui-react'
import $ from "jquery";
import {selector, updateDisplay} from "./CoreButton";

var count = 0;
export default class PathwaysButton extends React.Component {
    handleClick = () => {
        count += 1;
        if (count % 2 == 1) {
            document.getElementById('feedinfobutton').innerHTML = 'Hide GTFS-FeedInfo';
            selector.feedinfo = 1;
        } else {
            document.getElementById('feedinfobutton').innerHTML = 'Show GTFS-FeedInfo';
            selector.feedinfo = 0;
        }
        updateDisplay();
    }

    render() {
        return <Button id='feedinfobutton' onClick={this.handleClick} className="ui button">Show GTFS-FeedInfo</Button>
    }
}

export {selector};