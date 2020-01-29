import React from "react";
import {Button} from 'semantic-ui-react'

var textToDisplay = 'Add levels.txt';
var count = 0;

export default class LevelsButton extends React.Component {
    handleClick = () => {
        var content = document.getElementById('levels')
        if (content.style.display == 'block') {
            content.style.display = 'none'
        } else {
            content.style.display = 'block'
        }        // document.getElementById("multiselect-specification");
    }


    render() {
        return <Button onClick={this.handleClick} className="ui button">Add levels.txt</Button>
    }
}
