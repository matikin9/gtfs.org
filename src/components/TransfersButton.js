import React from "react";
import {Button} from 'semantic-ui-react'
import $ from "jquery";
import {selector, updateDisplay} from "./CoreButton";

var count = 0;
export default class TransfersButton extends React.Component {
    handleClick = () => {
        count += 1;
        if (count % 2 == 1) {
            document.getElementById('transfersbutton').innerHTML = 'Hide GTFS-Transfers';
            selector.transfers = 1;
        } else {
            document.getElementById('transfersbutton').innerHTML = 'Show GTFS-Transfers';
            selector.transfers = 0;
        }
        updateDisplay();
    }

    render() {
        return <Button id='transfersbutton' onClick={this.handleClick} className="ui button">Show
            GTFS-Transfers</Button>
    }
}

export {selector};