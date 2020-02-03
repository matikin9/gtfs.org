import React from "react";
import {Button} from 'semantic-ui-react'
import $ from "jquery";
import {selector, updateDisplay} from "./CoreButton";

var count = 0;
export default class FareAttributesButton extends React.Component {
    handleClick = () => {
        count += 1;
        if (count % 2 == 1) {
            document.getElementById('faresbutton').innerHTML = 'Hide GTFS-Fares';
            selector.fares = 1;
        } else {
            document.getElementById('faresbutton').innerHTML = 'Show GTFS-Fares';
            selector.fares = 0;
        }
        updateDisplay();
    }

    render() {
        return <Button id='faresbutton' onClick={this.handleClick} className="ui button">Show GTFS-Fares</Button>
    }
}

export {selector};