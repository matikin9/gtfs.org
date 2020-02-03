import React from "react";
import {Button} from 'semantic-ui-react'
import $ from "jquery";
import {selector, updateDisplay} from "./CoreButton";

var count = 0;
export default class PathwaysButton extends React.Component {
    handleClick = () => {
        count += 1;
        if (count % 2 == 1) {
            document.getElementById('pathwaysbutton').innerHTML = 'Hide GTFS-Pathways';
            selector.pathways = 1;
        } else {
            document.getElementById('pathwaysbutton').innerHTML = 'Show GTFS-Pathways';
            selector.pathways = 0;
        }
        updateDisplay();
    }

    render() {
        return <Button id='pathwaysbutton' onClick={this.handleClick} className="ui button">Show GTFS-Pathways</Button>
    }
}

export {selector};