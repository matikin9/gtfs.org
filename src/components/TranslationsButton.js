import React from "react";
import {Button} from 'semantic-ui-react'
import $ from "jquery";
import {selector, updateDisplay} from "./CoreButton";

var count = 0;
export default class PathwaysButton extends React.Component {
    handleClick = () => {
        count += 1;
        if (count % 2 == 1) {
            document.getElementById('translationsbutton').innerHTML = 'Hide GTFS-Translations';
            selector.translations = 1;
        } else {
            document.getElementById('translationsbutton').innerHTML = 'Show GTFS-Translations';
            selector.translations = 0;
        }
        updateDisplay();
    }

    render() {
        return <Button id='translationsbutton' onClick={this.handleClick} className="ui button">Show
            GTFS-Translations</Button>
    }
}

export {selector};