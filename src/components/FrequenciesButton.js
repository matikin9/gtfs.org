import React from "react";
import {Button} from 'semantic-ui-react'
import $ from "jquery";
import {selector, updateDisplay} from "./CoreButton";

var count = 0;
export default class FrequenciesButton extends React.Component {
    handleClick = () => {
        count += 1;
        if (count % 2 == 1) {
            document.getElementById('frequenciesbutton').innerHTML = 'Hide GTFS-Frequencies';
            selector.frequencies = 1;
        } else {
            document.getElementById('frequenciesbutton').innerHTML = 'Show GTFS-Frequencies';
            selector.frequencies = 0;
        }
        updateDisplay();
    }

    render() {
        return <Button id='frequenciesbutton' onClick={this.handleClick} className="ui button">Show
            GTFS-Frequencies</Button>
    }
}

export {selector};