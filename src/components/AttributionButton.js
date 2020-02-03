import React from "react";
import {Button} from 'semantic-ui-react'
import $ from "jquery";
import {selector} from "./CoreButton";
import {updateDisplay} from "./CoreButton";

var count = 0;
export default class AttributionButtons extends React.Component {
    handleClick = () => {
        count += 1;
        if (count % 2 == 1) {
            document.getElementById('attributionsbutton').innerHTML = 'Hide GTFS-Attributions';
            selector.attributions = 1;
        } else {
            document.getElementById('attributionsbutton').innerHTML = 'Show GTFS-Attributions';
            selector.attributions = 0;
        }
        updateDisplay();
    }

    render() {
        return <Button id='attributionsbutton' onClick={this.handleClick} className="ui button">Show
            GTFS-Attributions</Button>
    }
}

export {selector};