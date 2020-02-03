import React from "react";
import {Button} from 'semantic-ui-react'
import $ from "jquery";
import {selector, updateDisplay} from "./CoreButton";

var count = 0;
export default class AttributionButtons extends React.Component {
    handleClick = () => {
        count += 1;
        if (count % 2 == 1) {
            document.getElementById('shapesbutton').innerHTML = 'Hide GTFS-Shapes';
            selector.shapes = 1;

        } else {
            document.getElementById('shapesbutton').innerHTML = 'Show GTFS-Shapes';
            selector.shapes = 0;
        }
        updateDisplay();
    }

    render() {
        return <Button id='shapesbutton' onClick={this.handleClick} className="ui button">Show GTFS-Shapes</Button>
    }
}

export {selector};