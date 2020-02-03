import React from "react";
import {Button} from 'semantic-ui-react'
import $ from "jquery";
import {selector, updateDisplay} from "./CoreButton";

var count = 0;
export default class LevelsButton extends React.Component {
    handleClick = () => {
        count += 1;
        if (count % 2 == 1) {
            document.getElementById('levelsbutton').innerHTML = 'Hide GTFS-Levels';
            selector.levels = 1;
        } else {
            document.getElementById('levelsbutton').innerHTML = 'Show GTFS-Levels';
            selector.levels = 0;
        }
        updateDisplay();
    }

    render() {
        return <Button id='levelsbutton' onClick={this.handleClick} className="ui button">Show GTFS-Levels</Button>
    }
}

export {selector};